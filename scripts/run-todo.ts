#!/usr/bin/env node
/**
 * Orchestrates one scan from TODO.md through the pipeline described in AGENTS.md → "Pipeline":
 *
 *   stage 1  work/NN/a.md      blind transcription (model A)
 *   stage 2  work/NN/b.md      blind transcription (model B)     ← runs in parallel with 1
 *   stage 3  work/NN/final.md  reconciliation against the scan   (+ diff.md)
 *   stage 4  work/NN/build.md  components, translation, npm run check, screenshots
 *
 * Every stage is a checkpoint: the output file is committed on branch `scan/NN` as soon as
 * it exists, and a re-run starts from the first missing file. Nothing is pushed; the PR is
 * opened by a human after reviewing `work/NN/final.md` → "Сумніви" and `build.md`.
 *
 * Usage:
 *   npm run scan                 # first unchecked item of TODO.md
 *   npm run scan -- 12           # a specific scan
 *   npm run scan -- 12 --redo build   # delete that stage's output (and later ones) and re-run
 *   npm run scan -- --list       # show pipeline state for every unchecked scan
 *
 * Env:
 *   CURSOR_API_KEY   required (https://cursor.com/dashboard/integrations); read from `.env.local` if present
 *   SCAN_MODEL_A     model id for stages 1, 3, 4 (default: auto)
 *   SCAN_MODEL_B     model id for stage 2 — pick a DIFFERENT family than A (default: auto)
 *   SCAN_NO_COMMIT=1 do not create checkpoint commits
 */
import { execFileSync, spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { Agent, Cursor, CursorAgentError } from '@cursor/sdk'

const ROOT = join(import.meta.dirname, '..')
const WORK = join(ROOT, 'work')
const PROMPTS = join(ROOT, 'scripts/prompts')

type Stage = { name: string; file: string; prompt: string; model: 'A' | 'B' }
const STAGES: Stage[] = [
  { name: 'transcribe-a', file: 'a.md', prompt: '01-transcribe.md', model: 'A' },
  { name: 'transcribe-b', file: 'b.md', prompt: '01-transcribe.md', model: 'B' },
  { name: 'reconcile', file: 'final.md', prompt: '02-reconcile.md', model: 'A' },
  { name: 'build', file: 'build.md', prompt: '03-build.md', model: 'A' },
]

// --- cli -------------------------------------------------------------------------

const args = process.argv.slice(2)
const flag = (name: string) => {
  const i = args.indexOf(name)
  if (i === -1) return undefined
  const v = args[i + 1]
  args.splice(i, v && !v.startsWith('--') ? 2 : 1)
  return v ?? ''
}
const listOnly = flag('--list') !== undefined
const redo = flag('--redo')
const explicitScan = args.find((a) => /^\d{2}$/.test(a))

// --- todo ------------------------------------------------------------------------

type TodoItem = { nn: string; topic: string; done: boolean }
const readTodo = (): TodoItem[] =>
  [
    ...readFileSync(join(ROOT, 'TODO.md'), 'utf8').matchAll(
      /^- \[([ x])\] `(\d{2})\.png`(?: — (.*))?$/gm,
    ),
  ].map((m) => ({ done: m[1] === 'x', nn: m[2], topic: (m[3] ?? '').trim() || '(без опису)' }))

const stageState = (nn: string) =>
  STAGES.map((s) => `${existsSync(join(WORK, nn, s.file)) ? '✓' : '·'} ${s.file}`).join('  ')

const todo = readTodo()
if (listOnly) {
  for (const t of todo.filter((t) => !t.done))
    console.log(`${t.nn}  ${stageState(t.nn)}  ${t.topic}`)
  process.exit(0)
}

const found = explicitScan ? todo.find((t) => t.nn === explicitScan) : todo.find((t) => !t.done)
if (!found) {
  console.error(explicitScan ? `scan ${explicitScan} is not in TODO.md` : 'nothing left in TODO.md')
  process.exit(1)
}
const item: TodoItem = found
if (item.done && !redo) {
  console.error(`scan ${item.nn} is already marked done in TODO.md (use --redo <stage> to redo)`)
  process.exit(1)
}
const NN = item.nn
const DIR = join(WORK, NN)

// --- git / shell helpers -----------------------------------------------------------

const sh = (cmd: string, cmdArgs: string[], opts: { allowFail?: boolean } = {}) => {
  const r = spawnSync(cmd, cmdArgs, {
    cwd: ROOT,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  })
  if (r.status !== 0 && !opts.allowFail) {
    throw new Error(`${cmd} ${cmdArgs.join(' ')} failed:\n${r.stdout}${r.stderr}`)
  }
  return { ok: r.status === 0, out: `${r.stdout}${r.stderr}` }
}
const git = (...a: string[]) => execFileSync('git', a, { cwd: ROOT, encoding: 'utf8' }).trim()

const noCommit = process.env.SCAN_NO_COMMIT === '1'
const commit = (message: string, paths: string[]) => {
  if (noCommit) return
  git('add', '-A', '--', ...paths)
  if (git('status', '--porcelain', '--', ...paths) === '') return
  git('commit', '-q', '-m', message, '--', ...paths)
  console.log(`  ↳ committed: ${message}`)
}

const ensureBranch = () => {
  const branch = `scan/${NN}`
  const current = git('branch', '--show-current')
  if (current === branch) return
  if (git('status', '--porcelain') !== '') {
    throw new Error(`working tree is dirty; commit or stash before switching to ${branch}`)
  }
  const exists = sh('git', ['rev-parse', '--verify', '--quiet', branch], { allowFail: true }).ok
  git('checkout', '-q', exists ? branch : '-b', ...(exists ? [] : [branch]))
  console.log(`on branch ${branch}${exists ? '' : ' (new, from ' + current + ')'}`)
}

// --- agents --------------------------------------------------------------------------

// `.env.local` is gitignored (`*.local`); keep the key there, never in the repo.
if (existsSync(join(ROOT, '.env.local'))) process.loadEnvFile(join(ROOT, '.env.local'))
const apiKey = process.env.CURSOR_API_KEY
if (!apiKey) {
  console.error('CURSOR_API_KEY is not set (export it or put it into .env.local)')
  process.exit(1)
}
const MODELS = {
  A: process.env.SCAN_MODEL_A ?? 'auto',
  B: process.env.SCAN_MODEL_B ?? 'auto',
}

async function validateModels() {
  const wanted = [...new Set(Object.values(MODELS))].filter((m) => m !== 'auto')
  if (wanted.length === 0) {
    console.warn('SCAN_MODEL_A / SCAN_MODEL_B not set — both blind transcriptions use "auto".')
    console.warn('For a real cross-check set them to two different model families.')
    return
  }
  const available = (await Cursor.models.list({ apiKey })).map((m) => m.id)
  const unknown = wanted.filter((m) => !available.includes(m))
  if (unknown.length > 0) {
    throw new Error(
      `unknown model id(s): ${unknown.join(', ')}\navailable: ${available.join(', ')}`,
    )
  }
}

const renderPrompt = (stage: Stage) =>
  readFileSync(join(PROMPTS, stage.prompt), 'utf8')
    .replaceAll('{{NN}}', NN)
    .replaceAll('{{TOPIC}}', item.topic)
    .replaceAll('{{OUT}}', `work/${NN}/${stage.file}`)

async function runStage(stage: Stage) {
  const out = join(DIR, stage.file)
  if (existsSync(out)) {
    console.log(`[${stage.name}] ${stage.file} exists — skipping`)
    return
  }
  const model = MODELS[stage.model]
  console.log(`[${stage.name}] starting (model ${stage.model} = ${model})`)
  const started = Date.now()

  await using agent = await Agent.create({
    apiKey,
    model: { id: model },
    local: { cwd: ROOT, settingSources: ['project'] },
  })
  const run = await agent.send(renderPrompt(stage))
  console.log(`[${stage.name}] agent ${agent.agentId} run ${run.id}`)

  let lastTool = ''
  for await (const ev of run.stream()) {
    if (ev.type === 'tool_call' && ev.status === 'running' && ev.name !== lastTool) {
      lastTool = ev.name
      process.stdout.write(`  · ${ev.name}\n`)
    } else if (ev.type === 'assistant') {
      for (const block of ev.message.content) {
        if (block.type === 'text' && block.text.trim()) {
          process.stdout.write(
            block.text
              .trim()
              .split('\n')
              .map((l) => `  │ ${l}`)
              .join('\n') + '\n',
          )
        }
      }
    }
  }
  const result = await run.wait()
  const mins = ((Date.now() - started) / 60000).toFixed(1)
  if (result.status !== 'finished') {
    throw new Error(
      `[${stage.name}] run ${run.id} ended with status ${result.status}: ${result.error?.message ?? ''}`,
    )
  }
  if (!existsSync(out)) {
    throw new Error(`[${stage.name}] finished after ${mins} min but ${stage.file} was not written`)
  }
  console.log(`[${stage.name}] done in ${mins} min`)
}

// --- main -----------------------------------------------------------------------------

async function main() {
  console.log(`scan ${NN} — ${item.topic}`)
  await validateModels()
  ensureBranch()
  mkdirSync(DIR, { recursive: true })

  if (redo !== undefined) {
    const from = STAGES.findIndex(
      (s) => s.name === redo || s.file === redo || s.file === `${redo}.md`,
    )
    if (from === -1)
      throw new Error(`unknown stage "${redo}"; stages: ${STAGES.map((s) => s.name).join(', ')}`)
    for (const s of STAGES.slice(from)) rmSync(join(DIR, s.file), { force: true })
    if (from === 2) rmSync(join(DIR, 'diff.md'), { force: true })
    console.log(`redoing from ${STAGES[from].name}`)
  }

  console.log(`state: ${stageState(NN)}`)
  sh('bash', [join(ROOT, 'scripts/crop-scans.sh'), NN])

  // Stages 1+2 are independent and blind — run them concurrently.
  await Promise.all([runStage(STAGES[0]), runStage(STAGES[1])])
  commit(`scan ${NN}: blind transcriptions`, [`work/${NN}`])

  await runStage(STAGES[2])
  commit(`scan ${NN}: reconciled transcription`, [`work/${NN}`])

  await runStage(STAGES[3])
  const check = sh('npm', ['run', 'check'], { allowFail: true })
  if (!check.ok) {
    console.log('[build] npm run check failed — asking the agent to fix it once')
    const fix = await Agent.prompt(
      `You just added scan ${NN} to this repo (see work/${NN}/build.md). \`npm run check\` fails with the output below. Fix the issues, re-run \`npm run check\` until it passes, keep work/${NN}/final.md as the source of truth for Greek, and update work/${NN}/build.md if anything changed.\n\n\`\`\`\n${check.out.slice(-6000)}\n\`\`\``,
      { apiKey, model: { id: MODELS.A }, local: { cwd: ROOT, settingSources: ['project'] } },
    )
    if (fix.status !== 'finished' || !sh('npm', ['run', 'check'], { allowFail: true }).ok) {
      throw new Error(
        'npm run check still fails after the fix attempt — inspect the branch manually',
      )
    }
  }
  commit(`feat: scan ${NN} — ${item.topic}`, ['.'])

  const final = readFileSync(join(DIR, 'final.md'), 'utf8')
  const doubts = final.split(/^## Сумніви\s*$/m)[1]?.trim() || '(немає)'
  console.log(`\n=== scan ${NN} ready for review on branch scan/${NN} ===`)
  console.log(`Сумніви з транскрипції:\n${doubts}\n`)
  console.log(
    `Review: work/${NN}/final.md (vs public/foreign/${NN}.png), work/${NN}/build.md, /tmp/shots/${NN}/`,
  )
  console.log(`Then: git push -u origin scan/${NN} && gh pr create --fill`)
}

main().catch((err) => {
  if (err instanceof CursorAgentError) {
    console.error(`agent startup failed: ${err.message} (retryable=${err.isRetryable})`)
    process.exit(1)
  }
  console.error(err instanceof Error ? err.message : err)
  process.exit(2)
})

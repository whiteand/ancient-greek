#!/usr/bin/env node
/**
 * Verifies that the Cursor API key used by `npm run scan` works.
 *
 *   npm run scan:auth
 *
 * Reads CURSOR_API_KEY from the environment or `.env.local`, then:
 *   1. calls Cursor.me()            — is the key accepted at all?
 *   2. lists the available models   — ids usable for SCAN_MODEL_A / SCAN_MODEL_B
 *   3. runs a tiny local agent      — can the key actually drive a run on this machine?
 * Each step prints OK / FAIL with the reason; the exit code is 1 on the first failure.
 * The key itself is never printed (only its prefix and length).
 */
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { Agent, Cursor } from '@cursor/sdk'

const ROOT = join(import.meta.dirname, '..')
if (existsSync(join(ROOT, '.env.local'))) process.loadEnvFile(join(ROOT, '.env.local'))

const apiKey = process.env.CURSOR_API_KEY
if (!apiKey) {
  console.log('FAIL  CURSOR_API_KEY is not set (export it or put CURSOR_API_KEY=… into .env.local)')
  process.exit(1)
}
console.log(`key   ${apiKey.slice(0, 5)}… (${apiKey.length} chars)`)

const describe = (e: unknown) => {
  if (e && typeof e === 'object') {
    const err = e as { code?: string; status?: number; message?: string }
    return [err.code, err.status, err.message?.split('\n')[0]].filter(Boolean).join(' · ')
  }
  return String(e)
}

const step = async <T>(label: string, fn: () => Promise<T>): Promise<T> => {
  try {
    const value = await fn()
    console.log(`OK    ${label}`)
    return value
  } catch (e) {
    console.log(`FAIL  ${label}: ${describe(e)}`)
    process.exit(1)
  }
}

const me = await step('Cursor.me()', () => Cursor.me({ apiKey }))
console.log(`      key name: ${me.apiKeyName}${me.userEmail ? `, user: ${me.userEmail}` : ''}`)

const models = await step('Cursor.models.list()', () => Cursor.models.list({ apiKey }))
for (const m of models) console.log(`      ${m.id.padEnd(40)} ${m.displayName}`)

const result = await step('local Agent.prompt("pong")', () =>
  Agent.prompt('Reply with exactly the word: pong', {
    apiKey,
    model: { id: process.env.SCAN_MODEL_A ?? 'auto' },
    tools: [],
    local: { cwd: ROOT },
  }),
)
if (result.status !== 'finished') {
  console.log(`FAIL  run status ${result.status}: ${result.error?.message ?? ''}`)
  process.exit(1)
}
console.log(`      reply: ${(result.result ?? '').trim().slice(0, 60)}`)
console.log('\nAll good — `npm run scan` can use this key.')

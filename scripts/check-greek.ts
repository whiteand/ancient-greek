#!/usr/bin/env node
/**
 * Static checks for the Greek text and page structure.
 *
 *   node scripts/check-greek.ts            # all components
 *   node scripts/check-greek.ts src/components/Foo.vue ...
 *
 * Checks every `<Gr text="…" />` in `src/components` (+ `src/App.vue`):
 *   - text is NFC-normalized (so `ά` is always U+03AC, never U+1F71; `ᾱ` is U+1FB1, not `α`+U+0304);
 *   - only Greek letters, a small set of combining marks, punctuation and digits are used;
 *   - no Latin letters glued into a Greek word (lookalikes such as `o`, `a`, `v`, `p`, `n`);
 *   - `**` highlight markers are balanced.
 * Structure:
 *   - every `id` on `SectionHeader` / `SectionSubheader` is registered in `TableOfContents.vue`
 *     and every ToC entry points to an existing id;
 *   - inline `<Gr … />` / `<em>` / `<strong>` siblings separated only by a newline
 *     (Vue drops that whitespace → glued words) must have `{{ ' ' }}` in between.
 *
 * Exits with code 1 when any error was found. Does not touch the repo.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join, relative } from 'node:path'

const ROOT = join(import.meta.dirname, '..')
const COMPONENTS_DIR = join(ROOT, 'src/components')
const TOC_FILE = join(COMPONENTS_DIR, 'TableOfContents.vue')
const IGNORED_FILES = new Set(['src/OldApp.vue'])

type Issue = { file: string; line: number; message: string }
const issues: Issue[] = []
const report = (file: string, line: number, message: string) =>
  issues.push({ file: relative(ROOT, file), line, message })

// --- file list ---------------------------------------------------------------

const argFiles = process.argv.slice(2).map((f) => join(process.cwd(), f))
const files =
  argFiles.length > 0
    ? argFiles
    : [
        ...readdirSync(COMPONENTS_DIR)
          .filter((f) => f.endsWith('.vue'))
          .map((f) => join(COMPONENTS_DIR, f)),
        join(ROOT, 'src/App.vue'),
      ]

const sources = new Map<string, string>()
for (const file of files) {
  if (IGNORED_FILES.has(relative(ROOT, file))) continue
  sources.set(file, readFileSync(file, 'utf8'))
}

const lineOf = (src: string, index: number) => src.slice(0, index).split('\n').length

const decodeEntities = (s: string) =>
  s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, '\u00a0')
    .replace(/&quot;/g, '"')

// --- Greek text checks ---------------------------------------------------------

const isGreekLetter = (cp: number) =>
  (cp >= 0x0370 && cp <= 0x03ff) || (cp >= 0x1f00 && cp <= 0x1fff)
const isLatinLetter = (cp: number) =>
  (cp >= 0x41 && cp <= 0x5a) || (cp >= 0x61 && cp <= 0x7a) || (cp >= 0xc0 && cp <= 0x24f)

const ALLOWED_COMBINING = new Set([
  0x0300, // grave
  0x0301, // acute
  0x0304, // macron
  0x0306, // breve
  0x0308, // diaeresis
  0x0313, // smooth breathing (psili)
  0x0314, // rough breathing (dasia)
  0x0342, // perispomeni
  0x0345, // ypogegrammeni
])

const ALLOWED_OTHER = new Set(
  [
    ' ',
    '\u00a0',
    '*',
    ',',
    '.',
    ';',
    ':',
    '·',
    '(',
    ')',
    '[',
    ']',
    '/',
    '-',
    '‑', // non-breaking hyphen
    '–',
    '—',
    '=',
    '+',
    '<',
    '>',
    '?',
    '!',
    "'",
    '’',
    '"',
    '«',
    '»',
    'Ø',
    '…',
  ].map((c) => c.codePointAt(0)!),
)

const isDigit = (cp: number) => cp >= 0x30 && cp <= 0x39

function checkGreekText(file: string, line: number, raw: string) {
  const text = decodeEntities(raw)

  if (text.normalize('NFC') !== text) {
    report(
      file,
      line,
      `not NFC-normalized (use precomposed letters; combining marks only where no precomposed form exists): "${text}"`,
    )
  }

  const stars = (text.match(/\*\*/g) ?? []).length
  if (stars % 2 !== 0) report(file, line, `unbalanced ** highlight markers: "${text}"`)
  if (/\*(?!\*)/.test(text.replace(/\*\*/g, ''))) report(file, line, `stray single * in: "${text}"`)

  for (const ch of text) {
    const cp = ch.codePointAt(0)!
    if (isGreekLetter(cp) || isLatinLetter(cp) || isDigit(cp)) continue
    if (ALLOWED_COMBINING.has(cp)) continue
    if (ALLOWED_OTHER.has(cp)) continue
    report(
      file,
      line,
      `unexpected character U+${cp.toString(16).toUpperCase().padStart(4, '0')} (${ch}) in: "${text}"`,
    )
  }

  // Mixed-script tokens: a Latin letter inside a word that also has Greek letters.
  for (const token of text.replace(/\*\*/g, '').split(/[\s,;:·()[\]/=+<>?!"«»…–—-]+/)) {
    if (!token) continue
    let greek = false
    let latin = false
    for (const ch of token) {
      const cp = ch.codePointAt(0)!
      if (isGreekLetter(cp)) greek = true
      else if (isLatinLetter(cp) && ch !== 'Ø') latin = true
    }
    if (greek && latin)
      report(file, line, `Latin letter inside Greek word "${token}" in: "${text}"`)
  }
}

const GR_TAG = /<Gr\b[^>]*?\/>/gs
const TEXT_ATTR = /(?<![:@\w-])text\s*=\s*"([^"]*)"/

for (const [file, src] of sources) {
  for (const m of src.matchAll(GR_TAG)) {
    const attr = TEXT_ATTR.exec(m[0])
    if (!attr) continue // dynamic :text binding or no text
    checkGreekText(file, lineOf(src, m.index), attr[1])
  }
}

// --- structure: headers vs table of contents ------------------------------------

const toc = readFileSync(TOC_FILE, 'utf8')
const tocIds = new Set([...toc.matchAll(/\bid:\s*'([^']+)'/g)].map((m) => m[1]))

const headerIds = new Map<string, { file: string; line: number }>()
for (const [file, src] of sources) {
  if (file === TOC_FILE) continue
  for (const m of src.matchAll(/<Section(?:Sub)?[Hh]eader\b[^>]*?\bid="([^"]+)"/g)) {
    const id = m[1]
    const line = lineOf(src, m.index)
    if (headerIds.has(id)) report(file, line, `duplicate section id "${id}"`)
    headerIds.set(id, { file, line })
    if (!tocIds.has(id))
      report(file, line, `section id "${id}" is not registered in TableOfContents.vue`)
  }
}
const warnings: string[] = []
for (const id of tocIds) {
  if (!headerIds.has(id)) {
    // Not fatal: the ToC may list sections that are planned but not transcribed yet.
    warnings.push(
      `${relative(ROOT, TOC_FILE)}:${lineOf(toc, toc.indexOf(`'${id}'`))}: ToC entry "${id}" has no matching SectionHeader/SectionSubheader yet`,
    )
  }
}

// --- structure: glued inline siblings ------------------------------------------

const INLINE_PAIR = /(<Gr\b[^>]*?\/>|<\/em>|<\/strong>)([ \t]*\n[ \t]*)(?=<Gr\b|<em\b|<strong\b)/g
for (const [file, src] of sources) {
  for (const m of src.matchAll(INLINE_PAIR)) {
    const before = src.slice(Math.max(0, m.index - 12), m.index)
    if (before.includes("{{ ' ' }}")) continue
    // Grid/flex cells: each `<Gr class="[grid-area:…]"` is a separate cell, not inline text.
    const next = src.slice(m.index + m[0].length, m.index + m[0].length + 80)
    if (/grid-area/.test(m[1]) || /grid-area/.test(next)) continue
    report(
      file,
      lineOf(src, m.index + m[1].length),
      `inline elements separated only by a newline will be glued together; insert {{ ' ' }} (or keep them on one line)`,
    )
  }
}

// --- output ---------------------------------------------------------------------

for (const w of warnings) console.warn(`warning: ${w}`)
if (issues.length === 0) {
  console.log(`check-greek: OK (${sources.size} files)`)
} else {
  issues.sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line)
  for (const i of issues) console.error(`${i.file}:${i.line}: ${i.message}`)
  console.error(`check-greek: ${issues.length} issue(s)`)
  process.exit(1)
}

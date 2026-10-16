# AGENTS.md

Guidance for AI agents (and humans) working on this repository.

## What this project is

A single-page "Коротка граматика давньогрецької" (short Ancient Greek grammar) in **Ukrainian**.
The source material is a Czech grammar overview scanned into `public/foreign/NN.png`
(01–43). We go through the scans one by one, transcribe the Greek, translate the Czech
into Ukrainian, and rebuild each table/paragraph as Vue components.

Progress so far (in order on the page): alphabet & pronunciation (01–04), accent, article,
nouns I–II declension (05, 06), III declension consonant stems (07, 08). The next scans
continue the III declension (vowel stems, etc.), then adjectives, pronouns, verbs.

`src/OldApp.vue` and the raw `<img>` dump at the bottom of `App.vue` are the legacy
version and the yet-unprocessed scans. They stay until everything is rebuilt.

## Stack and commands

- Vue 3 (`<script setup lang="ts">`), Vite, Tailwind CSS v4, SCSS for scoped grid templates.
- Package manager: **npm** (`package-lock.json`). `pnpm` is not set up; use `npm`/`npx`.
- `npm run dev` — dev server on http://localhost:5173 (usually already running with HMR; do not start a second one).
- `npm run type-check` — `vue-tsc --build`. Must pass.
- `npx oxfmt <files>` — formatter (project uses oxfmt, not prettier). Run on every file you touch.
- `npx eslint <files>` and `npx oxlint <files>` — linters. Must be clean.
- `npm run build` — type-check + Vite build. Deployed to GitHub Pages at
  https://whiteand.github.io/ancient-greek/ (base path `/ancient-greek/`, set in `vite.config.ts`
  when `GITHUB_ACTIONS` is defined; workflow in `.github/workflows/deploy.yml`, Node 24).
- Public assets must be resolved via `import.meta.env.BASE_URL` (see `resolvePublic` in `App.vue`).

## Workflow for adding a scan (`public/foreign/NN.png`)

1. **Read the image**, then zoom: crop regions with `sips` into `/tmp` and read the crops.
   Accents, breathings, macrons (ᾱ ῑ ῡ), breves (ᾰ ῐ ῠ), iota subscripts and combined marks
   (e.g. `γῡ́ψ` = macron + acute, `ᾱ́`) are easy to misread at native resolution. Always verify.
2. **Transcribe** the Czech + Greek faithfully, then **translate the Czech to Ukrainian**.
   Keep Greek exactly as printed (including which letters are pink = endings).
3. **Build a table component** (see conventions below) and **wire it into the relevant
   `*Explanation.vue`** together with translated paragraphs.
4. Add an `id` to any new `SectionSubheader` and register it in `TableOfContents.vue`.
5. Run formatter, linters, type-check.
6. **Verify in headless Chrome** (see "Verification").
7. Delete every temp file you created (`/tmp/*.png`, anything placed in `public/` for probing).

## Conventions

### Greek text
- Wrap every Greek letter/word/phrase in `<Gr text="…" />` (`src/components/GreekSpan.vue`).
  It applies the Alegreya `font-greek` class.
- Highlight endings with markdown bold inside `text`: `text="ἀνθρώπ**ου**"` renders `ου`
  in pink (`parseHighlightedTextFromMarkdown`). Override color with `highlight-class`
  (used for the cyan stem labels: `highlight-class="text-cyan-600 dark:text-cyan-400"`).
- Stem/consonant labels in headers are cyan: `<Gr class="text-cyan-600 dark:text-cyan-400" text="-κ, -γ, -χ" />`.
- Use precomposed Unicode where it exists (`ᾱ` U+1FB1, `ῡ` U+1FE1, `ῃ`, `ῷ`…); add combining
  marks only where no precomposed form exists (`ᾱ́`, `ῡ́`, `ο̆`).
- Articles/standalone words before another word keep the grave as printed (`τὸν`, `τοὺς`, `τὰ`).

### Ukrainian terminology
- Cases: `Наз.`, `Род.`, `Дав.`, `Зн.`, `Кл.`; numbers `одн.`, `мн.` — always via
  `CASE_SHORTEN_NAME` / `NUMBER_SHORT_NAME` from `src/components/cases.ts` and
  `GREEK_CASES` from `src/data/greekCase.ts` (order: nominative, genitive, dative, accusative, vocative).
- Genders: `чол.`, `жін.`, `сер.`; `відміна` (declension), `основа` (stem), `закінчення` (ending),
  `стягнені іменники` (contracted nouns), `= наз.` for "= nom.".
- Czech enumeration a) b) c) d) e) → Ukrainian `а) б) в) г) д)` (skip ґ).
- Glosses (word meanings) go in `<em>`; Czech/Latin stem labels like *n-kmeny* become
  `<em class="text-cyan-600 dark:text-cyan-400">n</em>-основи`.

### Vue template gotchas
- Vue drops whitespace-only text nodes that contain a newline. When the formatter puts
  `<Gr … />` and `<em>` on separate lines, insert `{{ ' ' }}` before the second element,
  otherwise words glue together (`νόσοςхвороба`). Check screenshots for this.
- Do not put `<div>` inside `<p>` (invalid HTML; oxfmt rejects it). Use `<div>` wrappers.
- `<Gr>` accepts a `class` prop (merged onto the span), e.g. `class="text-right [grid-area:i0]"`.

### Declension table components
Each paradigm table is its own component (`FirstDeclensionTable.vue`,
`SecondDeclensionTable.vue`, `ThirdDeclension*Table.vue`). Pattern:

- Root: `<div class="<name>-grid mx-auto grid max-w-[…em] grid-cols-[…] gap-x-2 min-[…]:max-w-[…em] md:max-w-[…em]">`.
- Every cell is positioned with a **named grid area** (`[grid-area:a3]`), and the layout is a
  `grid-template` string in a `<style scoped lang="scss">` block, one per breakpoint.
  Note: the `grid-template` shorthand resets `grid-template-columns`, so the Tailwind
  `grid-cols-[…]` is effectively ignored and columns are `auto` — width is controlled by `max-w-*`.
- Area naming: words `a0..a8` (one letter per paradigm, index = row), article columns
  `i`, `j`, `k`…, headers `h1`, `h2`…, case labels `s0..s4` (sg) / `p0..p3` (pl) plus extra
  label sets `s2`, `s3`… for layouts where paradigms are stacked or split into rows.
- Case labels are generated from a `LABEL_SETS` array `{ pref, number, cases, class }`;
  extra sets get `min-[Xem]:hidden` / `md:hidden` so only the sets used by the current layout show.
- Articles are `text-right` and sit in their own column directly left of the word.
- Breakpoints: fully stacked (one `case + word` per row) below the table's mobile threshold;
  I/II declension use `27rem`, III declension tables use `30em`, the endings box `26em`;
  everything in one row from `md` (48rem). Mobile layout must have a `max-w-[~14–15em]`
  so the auto columns do not spread across the screen.
- Vocative placeholders: `<div class="[grid-area:x4]">= наз.</div>`; missing form: `–`.
- Side-by-side blocks (e.g. paradigms + endings box) are composed in the `*Explanation.vue`
  with `flex flex-col … lg:flex-row` (switches at 1024px).

### Page structure
- `App.vue`: `SectionHeader` + `ColoredSection` per topic; `TableOfContents.vue` is a
  data-driven list (`ITEMS` with optional `children`) — add new anchors there.
- `NounsExplanation.vue` holds all noun tables and prose, in scan order.

## Verification

Use headless Chrome from the shell (needs `required_permissions: ["all"]`):

```sh
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
# exact CSS width via an iframe wrapper (window-size alone is unreliable below ~500px)
printf '<!doctype html><body style="margin:0"><iframe src="http://localhost:5173/" style="width:400px;height:14000px;border:0;display:block" scrolling="no"></iframe>' > /tmp/f.html
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --window-size=420,14000 --virtual-time-budget=8000 --screenshot=/tmp/s.png file:///tmp/f.html
```

- Check at least: 320, 400, ~480 (just above/below the mobile threshold), 768, 1024+.
- Crop with `sips --cropToHeightWidth H W --cropOffset Y X` and read the crop; full-page
  screenshots are too small to read.
- For an **overflow/wrapping check**, a probe page must be same-origin: temporarily drop an
  HTML file into `public/` that iframes `/`, walks `main *` with `getBoundingClientRect()`,
  and prints elements whose `right > clientWidth`; read it with `--dump-dom`. Remove the file afterwards.
- Look specifically for: glued words (missing `{{ ' ' }}`), grid spreading across the full
  width (missing `max-w`), headers not aligned over their paradigms, wrong accent marks.

## Don'ts

- Don't edit `public/foreign/*` or `src/OldApp.vue` (legacy, will be removed later).
- Don't leave probe/screenshot files in the repo.
- Don't "fix" Greek forms to match dictionaries — reproduce the source scan; flag doubts in the summary instead.
- Don't restyle existing tables when adding a new one; match the existing pattern, including the
  user's adjustments (`mx-auto`, `max-w-*`, right-aligned articles, grave accents on articles).

Add scan `{{NN}}` ({{TOPIC}}) to the page, following `AGENTS.md` in the repo root — read it first
and follow every convention there (Greek in `<Gr>`, pink endings via `**…**`, named grid areas,
`LABEL_SETS`, breakpoints, `{{ ' ' }}` between inline elements, Ukrainian terminology, ToC ids…).

## Source of truth

`work/{{NN}}/final.md` is the verified transcription of the scan. Use it for ALL Greek and for the
Czech text you translate. Do not re-transcribe from the image yourself and do not open
`work/{{NN}}/a.md` / `b.md`. Open the image (`public/foreign/{{NN}}.png`, tiles in
`/tmp/scans/{{NN}}/`, create with `scripts/crop-scans.sh {{NN}}` if absent) only to understand the
LAYOUT: which words form one table, which column is the article, what is a header, what is a
footnote. If you believe `final.md` contains an error, do NOT silently fix it — keep `final.md`'s
reading in the component and list the doubt in `work/{{NN}}/build.md`.

Items marked `(?)` in `final.md` are rendered as written (without the `(?)`), and every one of
them is copied into the "Сумнівні місця" list of `build.md`.

## Steps

1. Read `AGENTS.md`, `work/{{NN}}/final.md`, `TODO.md`, and the existing components closest to
   what you are building (e.g. the `ThirdDeclension*Table.vue` family and `NounsExplanation.vue`
   for noun tables) so the new component matches their pattern exactly.
2. Translate the Czech into Ukrainian (terminology per `AGENTS.md`). Glosses in `<em>`.
3. Build the component(s) and wire them into the relevant `*Explanation.vue` (or create a new
   `*Explanation.vue` + `SectionHeader`/`ColoredSection` in `App.vue` when a new top-level topic
   starts — e.g. adjectives, pronouns, verbs — matching how existing sections are added).
   New `SectionSubheader`/`SectionHeader` ids go into `TableOfContents.vue`.
4. Run `npm run check` (format check, lint, types, Greek checks, build) and fix everything it
   reports. Format touched files with `npx oxfmt <files>`.
5. Verify in headless Chrome exactly as described in `AGENTS.md` → "Verification": screenshots
   at 320, 400, 480, 768 and 1024 px, crop the new section with `sips` and READ the crops; run the
   same-origin overflow probe. Fix glued words, grid spreading, header misalignment, overflow.
   Save the final crops of the new section to `/tmp/shots/{{NN}}/<width>.png`. Remove any probe
   file you put into `public/`.
6. Mark the scan done in `TODO.md` (`- [x]`).
7. Write `work/{{NN}}/build.md`:

   ```
   # Скан {{NN}} — збірка
   ## Додано
   - <component files, where wired, ToC ids>
   ## Переклад
   - <non-obvious terminology decisions>
   ## Скриншоти
   - /tmp/shots/{{NN}}/320.png … (what was checked at each width)
   ## Сумнівні місця (для рев'ю)
   - <every (?) from final.md + anything you suspect, with block/row/column>
   ```

Do not touch `public/foreign/*`, `src/OldApp.vue`, or `work/{{NN}}/{a,b,diff,final}.md`.
Delete temp files you created except `/tmp/scans/` and `/tmp/shots/`. Reply with the list of files
changed and the "Сумнівні місця" section verbatim.

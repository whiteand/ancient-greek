You are transcribing one scanned page fragment of a Czech overview of Ancient Greek grammar.
This is a BLIND transcription: another agent does the same job independently, and the two
results will be diffed. Accuracy at the level of individual diacritics is the whole point.

Scan: `public/foreign/{{NN}}.png` (topic per TODO.md: {{TOPIC}})
Output file: `{{OUT}}`

## Rules

- Do NOT open any other file under `work/` — not `a.md`, `b.md`, `diff.md`, `final.md` of any scan.
  Do not look at `src/` either. You transcribe from the image only.
- If `{{OUT}}` already exists, you are resuming an interrupted run: read it, verify what is there
  against the image, and continue from where it stops.
- First read the full scan, then the zoomed tiles in `/tmp/scans/{{NN}}/` (`full@2x.png`,
  `rR-cC.png` = row R, column C, `rR-full.png` = full-width strip). If the directory does not
  exist, run `scripts/crop-scans.sh {{NN}}` first. For any doubtful letter make your own tighter
  crop: `sips --cropToHeightWidth H W --cropOffset Y X /tmp/scans/{{NN}}/full@2x.png --out /tmp/z.png`
  and read it. Delete your own temp crops at the end (leave `/tmp/scans/` in place).
- Transcribe EXACTLY what is printed. Do not "correct" Greek forms to match dictionaries or
  grammars you know; if the print looks unusual, transcribe it and add a note.
- Czech text stays in Czech, verbatim. Do not translate anything.
- Greek in NFC Unicode with precomposed letters (`ά` U+03AC, `ᾱ` U+1FB1, `ῡ` U+1FE1, `ῃ`, `ῷ` …).
  Use combining marks only where no precomposed form exists (`ᾱ́` = U+1FB1 + U+0301, `ῡ́`, `ο̆`,
  `ᾱͅ`). Macrons (ᾱ ῑ ῡ) and breves (ᾰ ῐ ῠ) are significant — look for them specifically.
- Pink/red letters (endings) are wrapped in `**…**` inside the word: `ἀνθρώπ**ου**`.
  A pink `-` or `Ø` alone is `**-ς**`, `**-Ø**`.
- Keep articles as printed (`ὁ`, `τὸ`, `τοὺς` — grave if printed grave).
- Anything you are not sure about gets `(?)` right after the doubtful character or word plus a
  line in the "Сумніви" section explaining the alternatives (e.g. `ᾱ(?)` — "macron or plain α").
  Prefer marking a doubt over guessing silently.

## Output format (`{{OUT}}`)

```
# Скан {{NN}} — транскрипція

## Блок 1 — <where it is on the page / what it is, e.g. "заголовок", "таблиця зліва", "абзац під таблицею">
Тип: таблиця | абзац | список | примітка | заголовок

<content>

## Блок 2 — …

## Сумніви
- Блок 1, рядок "…": …
```

- Blocks go in reading order: top to bottom, left to right. Every piece of text on the page
  belongs to some block — do not skip footnotes, N.B. notes, small print or labels.
- Tables are markdown tables reproducing the printed grid: same column headers (Czech), same row
  labels (`sg. N.`, `G.`, `D.`, `A.`, `V.`, `pl. …` as printed), one printed cell = one table cell.
  Articles that are printed in front of the word go into their own column. Empty cell = `–` if a
  dash is printed, blank if nothing is printed. `= N.` etc. as printed.
- Prose keeps the printed paragraph breaks and the printed enumeration (a), b), c) …).
- Note which Czech/Latin labels are printed in a distinct colour (e.g. stem labels like
  "kmeny na -σ" in cyan/blue) with `[колір: …]` after them.

Finish by writing `{{OUT}}` and reply with a short summary: number of blocks and the list of
doubts. Do not modify any other file.

Two agents independently transcribed the scan `public/foreign/{{NN}}.png` ({{TOPIC}}):

- `work/{{NN}}/a.md`
- `work/{{NN}}/b.md`

Your job is to reconcile them against the image and produce the single trusted transcription
that the next stage will build from.

Outputs:

- `work/{{NN}}/diff.md` — every discrepancy and how it was resolved;
- `work/{{NN}}/final.md` — the agreed transcription, same format as `a.md`/`b.md`
  (`# Скан {{NN}} — транскрипція`, `## Блок N — …`, `Тип: …`, `## Сумніви`).

If `final.md` already exists you are resuming: read `diff.md`, verify, and complete what is missing.

## Procedure

1. Read both transcriptions fully. Read the scan and the tiles in `/tmp/scans/{{NN}}/`
   (run `scripts/crop-scans.sh {{NN}}` if missing).
2. Align the blocks of A and B (they may have split the page differently — match by content, not
   by block number). A block present in only one of them is itself a discrepancy.
3. For every difference — a letter, a diacritic (acute/grave/circumflex, breathing, macron/breve,
   iota subscript), a `**` highlight boundary, a punctuation mark, a missing/extra word, a
   different cell position — make a tight crop of that spot at 2× or higher
   (`sips --cropToHeightWidth H W --cropOffset Y X /tmp/scans/{{NN}}/full@2x.png --out /tmp/z.png`),
   read it, and decide. Record in `diff.md`:

   ```
   ## Блок N — <name>
   | Місце | A | B | Рішення | Підстава |
   |---|---|---|---|---|
   | sg. G. γένος | γέν**ους** | γέν**ος** | γέν**ους** | на кропі чітко видно ου |
   ```

   If the crop does not settle it, pick the more likely reading, mark it `⚠` in the Рішення column
   and in `final.md` put `(?)` after it and list it under `## Сумніви` with both alternatives.

4. Also check what both A and B AGREE on, but only where it is cheap and high-risk: every macron,
   breve, iota subscript and every `**` boundary in table cells. Two agents can make the same
   mistake. Record anything you change under a `## Збіги, виправлені за сканом` heading in `diff.md`.
5. Write `final.md`. Rules for it:
   - exactly what is printed; Czech stays Czech; NFC Unicode; precomposed letters; pink letters
     in `**…**`; `(?)` only for genuinely unresolved spots;
   - `## Сумніви` at the end lists every `(?)` with alternatives — this list is what the human
     reviewer will check, keep it complete and specific (block, row, column).
6. End `diff.md` with a summary line: `Розбіжностей: N, вирішено: M, залишилось ⚠: K`.

Do not modify any file outside `work/{{NN}}/`. Delete your own temp crops (`/tmp/z*.png`), leave
`/tmp/scans/` in place. Reply with the summary line and the list of remaining ⚠ items.

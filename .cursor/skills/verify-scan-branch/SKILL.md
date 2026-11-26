---
name: verify-scan-branch
description: >-
  Fact-checks a scan/NN branch of the Ukrainian Ancient Greek grammar: every
  sentence (true for Ancient Greek), every Greek form (diacritics, pink ending
  highlights, case/gender/number/degree) against the scan, Logeion Morpho, LSJ
  and Smyth, then fixes findings one commit at a time with user approval. Use
  when the user asks to verify/check/review a scan branch or MR, «перевір
  правильність тверджень», or names a branch like scan/14.
disable-model-invocation: true
---

# Verify a scan branch

Input: a branch `scan/NN`. Output: a report in Ukrainian, then (if the user asks) fixes.

## 1. Scope the diff

Local `main` may be stale. Diff against the merge commit of the previous scan, not `main`:

```sh
git log --oneline -8 scan/NN          # find "Merge pull request … scan/<NN-1>"
git diff --stat <merge>..scan/NN
git diff <merge>..scan/NN -- src TODO.md
```

Also read `work/NN/final.md` (transcription + diacritic notes) and `work/NN/build.md`.

## 2. Compare with the scan

`scripts/crop-scans.sh NN` → tiles in `/tmp/scans/NN/`. For every doubtful mark, crop further with
`sips --cropToHeightWidth H W --cropOffset Y X` (X ≠ 0) and read the crop. Tile pixel size is
several times the displayed size; compute offsets from `sips -g pixelWidth -g pixelHeight`.
Check: accents (acute vs circumflex), breathings, iota subscripts, macrons, which letters are pink.

`work/NN/a.md` / `b.md` / `diff.md` show where the two blind transcriptions disagreed — the
reconciled choice there is the most likely place for an error.

## 3. Check every form in Logeion Morpho

Logeion pages are client-rendered (WebFetch returns nothing). Use the bundled script, which calls
the JSON API directly (needs `required_permissions: ["full_network"]`):

```sh
python3 .cursor/skills/verify-scan-branch/scripts/morpho_check.py --diff <merge> --head scan/NN
python3 .cursor/skills/verify-scan-branch/scripts/morpho_check.py λῴων μεγάλε   # ad hoc
```

- `OK` + parses → compare the parse with the case/gender/number/degree the page claims.
- `NOT FOUND (closest …)` → suspicious; check LSJ. Morpho only knows corpus-attested forms,
  so a rare but correct nominative can be missing — LSJ decides.
- Macrons/breves are stripped before lookup; verify vowel quantity in Smyth/LSJ separately.

## 4. LSJ and grammar rules

- LSJ: `WebFetch https://lsj.gr/wiki/<lemma>` (works directly; long pages land in a file — grep it).
  Gives Attic forms, accents, quantities (`[ῑ Att.]`), "poet." labels.
- Smyth: `WebFetch https://smyth-greek-grammar.netlify.app/` writes the whole grammar to a file;
  grep for `^§?NNN` or a Greek form. Key sections: §§287–311 adjectives, §§313–324 comparison,
  §§325+ pronouns, §345 adverbs. Use `WebSearch` for anything else and cite the section.
- Check each prose sentence as a claim: is it true, complete enough, and does it match the scan?
  The scan can be wrong too — report such places as factual issues, not transcription errors.
- Also check the Ukrainian: agreement, calques from Czech, consistent glosses for the same lemma
  across the page, Latin letters inside Greek.

## 5. Report

Lead with the verdict. Then, in Ukrainian:

```markdown
## Помилки
1. **<form/claim>** — що не так, що на скані, джерело (LSJ / Smyth § / Morpho). Цитата коду.
## Неточності (варто уточнити)
## Українська мова
## Що підтверджено
(кількість форм через Morpho, правила й параграфи Smyth, виділення закінчень)
```

Keep corpus parses for the claims the page makes (e.g. `κακίω` — зн. одн. чол./жін., наз./зн. мн. сер.).

## 6. Fixing (only when asked)

- **One fix = one commit. Make the fix, run `npm run check`, show the diff, and STOP.
  Never commit before the user explicitly approves** («апрув», «коміть»). Then commit and prepare
  the next fix the same way.
- If the user does not pick between offered options, take the recommended one and say so.
- Transcription errors: fix the component and `work/NN/final.md`; leave `a.md`/`b.md`/`diff.md`
  as history.
- Deliberate deviations from the scan (the scan is factually wrong): keep the scan's text, add a
  short clarification in parentheses or a separate sentence, and log it in `work/NN/build.md` →
  «Сумнівні місця» with the source.
- Run `npx oxfmt` on touched files; watch for glued words (`{{ ' ' }}`) after reflow.
- Never push. Delete `/tmp` crops and scan tiles when done.

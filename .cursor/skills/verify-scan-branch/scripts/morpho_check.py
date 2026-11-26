#!/usr/bin/env python3
"""Check Greek forms against Logeion Morpho (anastrophe.uchicago.edu).

Usage:
  morpho_check.py --diff BASE [--head HEAD] [PATH ...]   forms from <Gr text="…"> on added lines
  morpho_check.py WORD [WORD ...]                          explicit forms

Prints TSV: form, OK / NOT FOUND (closest …), parses.
Macrons/breves are stripped before lookup (the corpus does not mark quantity);
fragments containing '-' (suffixes, stems) are skipped.
Needs network access (sandbox: full_network).
"""

import argparse
import json
import re
import subprocess
import sys
import unicodedata
import urllib.parse
import urllib.request

API = "https://anastrophe.uchicago.edu/morpho-api//wordwheel/"
GREEK_TOKEN = re.compile(r"^[\u0370-\u03FF\u1F00-\u1FFF\u0300-\u036F\u02BC'’]+$")
QUANTITY_MARKS = {"\u0304", "\u0306"}


def strip_quantity(word: str) -> str:
    decomposed = unicodedata.normalize("NFD", word)
    return unicodedata.normalize("NFC", "".join(c for c in decomposed if c not in QUANTITY_MARKS))


def forms_from_text(text: str) -> list[str]:
    out = []
    for chunk in re.split(r"[\s,;:.()~·]+", text.replace("**", "")):
        if not chunk or "-" in chunk or not GREEK_TOKEN.match(chunk):
            continue
        out.append(strip_quantity(chunk))
    return out


def forms_from_diff(base: str, head: str, paths: list[str]) -> list[str]:
    diff = subprocess.run(
        ["git", "diff", "-U0", f"{base}..{head}", "--", *(paths or ["src"])],
        check=True,
        capture_output=True,
        text=True,
    ).stdout
    forms = []
    for line in diff.splitlines():
        if line.startswith("+") and not line.startswith("+++"):
            for text in re.findall(r'text="([^"]*)"', line):
                forms.extend(forms_from_text(text))
    return forms


def lookup(word: str) -> tuple[str, str]:
    try:
        with urllib.request.urlopen(API + urllib.parse.quote(word), timeout=30) as r:
            data = json.load(r)
    except Exception as e:  # noqa: BLE001
        return f"ERROR {e}", ""
    status = "OK" if data.get("word") == word else f"NOT FOUND (closest {data.get('word')})"
    parses = "; ".join(
        f"{p['lemma']}: "
        + re.sub(r"\s+", " ", re.sub(r"<[^>]+>|&#x2713;?", " ", p["parse"])).strip()
        for p in data.get("parses") or []
    )
    return status, parses


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--diff", metavar="BASE")
    ap.add_argument("--head", default="HEAD")
    ap.add_argument("items", nargs="*")
    args = ap.parse_args()

    if args.diff:
        forms = forms_from_diff(args.diff, args.head, args.items)
    else:
        forms = [f for item in args.items for f in forms_from_text(item)]
    if not forms:
        sys.exit("no Greek forms found")

    seen = set()
    for form in forms:
        if form in seen:
            continue
        seen.add(form)
        status, parses = lookup(form)
        print(f"{form}\t{status}\t{parses[:400]}", flush=True)


if __name__ == "__main__":
    main()

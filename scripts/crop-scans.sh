#!/usr/bin/env bash
# Produce 2x upscaled tiles of a scan so that diacritics are readable by an agent.
#
# Usage:
#   scripts/crop-scans.sh 09          # tiles for public/foreign/09.png -> /tmp/scans/09/
#   scripts/crop-scans.sh 09 10 11    # several scans
#   scripts/crop-scans.sh all         # every scan
#
# Output (per scan): /tmp/scans/NN/full@2x.png and /tmp/scans/NN/rR-cC.png where
# R is the row (top to bottom) and C the column (0 = left half, 1 = right half).
# Tiles overlap so that no word is cut in half. Nothing is written into the repo.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/public/foreign"
OUT_ROOT="${SCANS_OUT:-/tmp/scans}"
SCALE=2
# Tile size in ORIGINAL pixels (before upscaling).
TILE_H=300
OVERLAP_Y=40
OVERLAP_X=80

if [[ $# -eq 0 ]]; then
  echo "usage: $0 <NN ...|all>" >&2
  exit 1
fi

if [[ "$1" == "all" ]]; then
  set -- $(ls "$SRC" | sed -n 's/^\([0-9][0-9]\)\.png$/\1/p')
fi

for NN in "$@"; do
  IN="$SRC/$NN.png"
  [[ -f "$IN" ]] || { echo "no such scan: $IN" >&2; exit 1; }
  OUT="$OUT_ROOT/$NN"
  rm -rf "$OUT"
  mkdir -p "$OUT"

  W=$(sips -g pixelWidth "$IN" | awk '/pixelWidth/{print $2}')
  H=$(sips -g pixelHeight "$IN" | awk '/pixelHeight/{print $2}')

  FULL="$OUT/full@2x.png"
  sips --resampleWidth $((W * SCALE)) "$IN" --out "$FULL" >/dev/null

  HALF_W=$(( W / 2 + OVERLAP_X ))
  ROWS=$(( (H + TILE_H - OVERLAP_Y - 1) / (TILE_H - OVERLAP_Y) ))
  [[ $ROWS -lt 1 ]] && ROWS=1

  # sips silently ignores the crop when the Y offset is non-zero and the X offset is 0,
  # so crops at the left edge start at x=1 (one pixel narrower).
  crop() { # crop <height> <width> <y> <x> <out>
    local h=$1 w=$2 y=$3 x=$4 out=$5
    if (( y > 0 && x == 0 )); then x=1; w=$(( w - 1 )); fi
    sips --cropToHeightWidth "$h" "$w" --cropOffset "$y" "$x" "$FULL" --out "$out" >/dev/null
  }

  for ((r = 0; r < ROWS; r++)); do
    Y=$(( r * (TILE_H - OVERLAP_Y) ))
    TH=$TILE_H
    if (( Y + TH > H )); then TH=$(( H - Y )); fi
    (( TH <= 0 )) && continue
    for c in 0 1; do
      if (( c == 0 )); then X=0; else X=$(( W - HALF_W )); fi
      crop $(( TH * SCALE )) $(( HALF_W * SCALE )) $(( Y * SCALE )) $(( X * SCALE )) "$OUT/r$r-c$c.png"
    done
    # Full-width strip as well (useful for wide tables).
    crop $(( TH * SCALE )) $(( W * SCALE )) $(( Y * SCALE )) 0 "$OUT/r$r-full.png"
  done

  echo "$NN: ${W}x${H} -> $OUT ($ROWS rows)"
done

<template>
  <div
    class="third-declension-adjective-stems mx-auto flex w-fit max-w-full flex-col items-center gap-4"
  >
    <div class="third-declension-adjective-eudaimon mx-auto grid w-fit max-w-full gap-x-2">
      <div class="adj-stem-head min-w-0 text-center [grid-area:h1]">
        <span class="font-bold italic">в) основи на</span>
        {{ ' ' }}
        <span class="whitespace-nowrap">
          <span class="font-bold italic">носовий</span>
          {{ ' ' }}
          <Gr class="text-cyan-600 dark:text-cyan-400" text="-ν" />
        </span>
      </div>
      <div class="adj-stem-head min-w-0 text-center italic [grid-area:h1s]">
        прикметники двох закінчень
      </div>

      <template v-for="set in EUDAIMON_LABELS" :key="set.pref">
        <div
          v-for="(x, i) in set.cases"
          :key="x"
          :style="{ gridArea: `${set.pref}${i}` }"
          :class="set.class"
        >
          {{ CASE_SHORTEN_NAME[x]
          }}<template v-if="i === 0 || (set.number === 'plural' && x === 'accusative')"
            >&nbsp;{{ NUMBER_SHORT_NAME[set.number] }}</template
          >
        </div>
      </template>

      <Gr class="[grid-area:a0]" text="εὐδαίμων" />
      <Gr class="[grid-area:b0]" text="εὔδαιμον" />
      <Gr class="[grid-area:a1]" text="εὐδαίμον**ος**" />
      <Gr class="[grid-area:a2]" text="εὐδαίμον**ι**" />
      <Gr class="[grid-area:a3]" text="εὐδαίμον**α**" />
      <Gr class="[grid-area:b3]" text="εὔδαιμον" />
      <Gr class="[grid-area:a4]" text="εὔδαιμον" />
      <Gr class="[grid-area:b4]" text="εὔδαιμον" />
      <Gr class="[grid-area:a5]" text="εὐδαίμον**ες**" />
      <Gr class="[grid-area:b5]" text="εὐδαίμον**α**" />
      <Gr class="[grid-area:a6]" text="εὐδαιμόν**ων**" />
      <Gr class="[grid-area:a7]" text="εὐδαίμο**σι**" />
      <Gr class="[grid-area:a8]" text="εὐδαίμον**ας**" />
      <Gr class="[grid-area:b8]" text="εὐδαίμον**α**" />
    </div>

    <div class="third-declension-adjective-eugenes mx-auto grid w-fit max-w-full gap-x-2">
      <div class="adj-stem-head min-w-0 text-center [grid-area:h2]">
        <span class="font-bold italic">г) основи на</span>
        {{ ' ' }}
        <span class="whitespace-nowrap">
          <span class="font-bold italic">сибілянт</span>
          {{ ' ' }}
          <Gr class="text-cyan-600 dark:text-cyan-400" text="-σ" />
        </span>
      </div>
      <div class="adj-stem-head min-w-0 text-center italic [grid-area:h2s]">
        прикметники двох закінчень
      </div>

      <template v-for="set in EUGENES_LABELS" :key="set.pref">
        <div
          v-for="(x, i) in set.cases"
          :key="x"
          :style="{ gridArea: `${set.pref}${i}` }"
          :class="set.class"
        >
          {{ CASE_SHORTEN_NAME[x]
          }}<template v-if="i === 0 || (set.number === 'plural' && x === 'accusative')"
            >&nbsp;{{ NUMBER_SHORT_NAME[set.number] }}</template
          >
        </div>
      </template>

      <Gr class="[grid-area:c0]" text="εὐγεν**ής**" />
      <Gr class="[grid-area:d0]" text="εὐγεν**ές**" />
      <Gr class="[grid-area:c1]" text="εὐγεν**οῦς**" />
      <Gr class="[grid-area:c2]" text="εὐγεν**εῖ**" />
      <Gr class="[grid-area:c3]" text="εὐγεν**ῆ**" />
      <Gr class="[grid-area:d3]" text="εὐγεν**ές**" />
      <Gr class="[grid-area:c4]" text="εὐγεν**ές**" />
      <Gr class="[grid-area:d4]" text="εὐγεν**ές**" />
      <Gr class="[grid-area:c5]" text="εὐγεν**εῖς**" />
      <Gr class="[grid-area:d5]" text="εὐγεν**ῆ**" />
      <Gr class="[grid-area:c6]" text="εὐγεν**ῶν**" />
      <Gr class="[grid-area:c7]" text="εὐγεν**έσι**" />
      <Gr class="[grid-area:c8]" text="εὐγεν**εῖς**" />
      <Gr class="[grid-area:d8]" text="εὐγεν**ῆ**" />
    </div>

    <div class="third-declension-adjective-hedys mx-auto grid w-fit max-w-full gap-x-2">
      <div class="adj-stem-head min-w-0 text-center [grid-area:h3]">
        <span class="font-bold italic">д) основи на</span>
        {{ ' ' }}
        <Gr class="whitespace-nowrap text-cyan-600 dark:text-cyan-400" text="-υ/-ε (Ϝ)" />
      </div>
      <div class="adj-stem-head min-w-0 text-center italic [grid-area:h3s]">
        прикметники трьох закінчень
      </div>

      <template v-for="set in HEDYS_LABELS" :key="set.pref">
        <div
          v-for="(x, i) in set.cases"
          :key="x"
          :style="{ gridArea: `${set.pref}${i}` }"
          :class="set.class"
        >
          {{ CASE_SHORTEN_NAME[x]
          }}<template v-if="i === 0 || (set.number === 'plural' && x === 'accusative')"
            >&nbsp;{{ NUMBER_SHORT_NAME[set.number] }}</template
          >
        </div>
      </template>

      <Gr class="[grid-area:e0]" text="ἡδύ**ς**" />
      <Gr class="[grid-area:f0]" text="ἡδεῖ**α**" />
      <Gr class="[grid-area:g0]" text="ἡδύ" />
      <Gr class="[grid-area:e1]" text="ἡδέ**ος**" />
      <Gr class="[grid-area:f1]" text="ἡδεί**ας**" />
      <Gr class="[grid-area:g1]" text="ἡδέ**ος**" />
      <Gr class="[grid-area:e2]" text="ἡδε**ῖ**" />
      <Gr class="[grid-area:f2]" text="ἡδεί**ᾳ**" />
      <Gr class="[grid-area:g2]" text="ἡδε**ῖ**" />
      <Gr class="[grid-area:e3]" text="ἡδύ**ν**" />
      <Gr class="[grid-area:f3]" text="ἡδεῖ**αν**" />
      <Gr class="[grid-area:g3]" text="ἡδύ" />
      <Gr class="[grid-area:e4]" text="ἡδύ" />
      <Gr class="[grid-area:f4]" text="ἡδεῖ**α**" />
      <Gr class="[grid-area:g4]" text="ἡδύ" />
      <Gr class="[grid-area:e5]" text="ἡδεῖς" />
      <Gr class="[grid-area:f5]" text="ἡδεῖ**αι**" />
      <Gr class="[grid-area:g5]" text="ἡδέ**α**" />
      <Gr class="[grid-area:e6]" text="ἡδέ**ων**" />
      <Gr class="[grid-area:f6]" text="ἡδει**ῶν**" />
      <Gr class="[grid-area:g6]" text="ἡδέ**ων**" />
      <Gr class="[grid-area:e7]" text="ἡδέ**σι**" />
      <Gr class="[grid-area:f7]" text="ἡδεί**αις**" />
      <Gr class="[grid-area:g7]" text="ἡδέ**σι**" />
      <Gr class="[grid-area:e8]" text="ἡδεῖς" />
      <Gr class="[grid-area:f8]" text="ἡδεί**ᾱς**" />
      <Gr class="[grid-area:g8]" text="ἡδέ**α**" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Gr from './GreekSpan.vue'
import { CASE_SHORTEN_NAME, NUMBER_SHORT_NAME } from '@/components/cases.ts'
import { GREEK_CASES, type GreekCase } from '@/data/greekCase.ts'
import type { TNumber } from '@/types'

type LabelSet = {
  pref: string
  number: TNumber
  cases: readonly GreekCase[]
  class: string
}

const PL_CASES = GREEK_CASES.slice(0, -1)

const LABEL_SETS: LabelSet[] = [
  { pref: 's', number: 'singular', cases: GREEK_CASES, class: '' },
  { pref: 'p', number: 'plural', cases: PL_CASES, class: '' },
  { pref: 's2', number: 'singular', cases: GREEK_CASES, class: 'md:hidden' },
  { pref: 'p2', number: 'plural', cases: PL_CASES, class: 'md:hidden' },
  { pref: 's3', number: 'singular', cases: GREEK_CASES, class: 'md:hidden' },
  { pref: 'p3', number: 'plural', cases: PL_CASES, class: 'md:hidden' },
]

const EUDAIMON_LABELS = LABEL_SETS.filter((set) => set.pref === 's' || set.pref === 'p')
const EUGENES_LABELS = LABEL_SETS.filter((set) => set.pref === 's2' || set.pref === 'p2')
const HEDYS_LABELS = LABEL_SETS.filter((set) => set.pref === 's3' || set.pref === 'p3')
</script>

<style scoped lang="scss">
.third-declension-adjective-stems {
  @media (width >= 48rem) {
    display: grid;
    gap: 0 0.5rem;
    grid-template:
      '.   h1   h1   h2   h2   h3   h3   h3'
      '.   h1s  h1s  h2s  h2s  h3s  h3s  h3s'
      's0  a0   b0   c0   d0   e0   f0   g0'
      's1  a1   .    c1   .    e1   f1   g1'
      's2  a2   .    c2   .    e2   f2   g2'
      's3  a3   b3   c3   d3   e3   f3   g3'
      's4  a4   b4   c4   d4   e4   f4   g4'
      'p0  a5   b5   c5   d5   e5   f5   g5'
      'p1  a6   .    c6   .    e6   f6   g6'
      'p2  a7   .    c7   .    e7   f7   g7'
      'p3  a8   b8   c8   d8   e8   f8   g8';
  }
}

.third-declension-adjective-eudaimon,
.third-declension-adjective-eugenes,
.third-declension-adjective-hedys {
  @media (width >= 48rem) {
    display: contents;
  }
}

.adj-stem-head {
  width: 0;
  min-width: 100%;
}

.third-declension-adjective-eudaimon {
  grid-template:
    'h1   h1   h1'
    'h1s  h1s  h1s'
    's0   a0   b0'
    's1   a1   .'
    's2   a2   .'
    's3   a3   b3'
    's4   a4   b4'
    'p0   a5   b5'
    'p1   a6   .'
    'p2   a7   .'
    'p3   a8   b8';
}

.third-declension-adjective-eugenes {
  grid-template:
    'h2   h2   h2'
    'h2s  h2s  h2s'
    's20  c0   d0'
    's21  c1   .'
    's22  c2   .'
    's23  c3   d3'
    's24  c4   d4'
    'p20  c5   d5'
    'p21  c6   .'
    'p22  c7   .'
    'p23  c8   d8';
}

.third-declension-adjective-hedys {
  grid-template:
    'h3   h3   h3   h3'
    'h3s  h3s  h3s  h3s'
    's30  e0   f0   g0'
    's31  e1   f1   g1'
    's32  e2   f2   g2'
    's33  e3   f3   g3'
    's34  e4   f4   g4'
    'p30  e5   f5   g5'
    'p31  e6   f6   g6'
    'p32  e7   f7   g7'
    'p33  e8   f8   g8';
}
</style>

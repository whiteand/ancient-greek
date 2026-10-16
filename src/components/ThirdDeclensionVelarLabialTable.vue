<template>
  <div
    class="third-declension-velar-labial-grid mx-auto grid grid-cols-[fit-content(100%)_repeat(6,fit-content(20%))] gap-x-2"
  >
    <div class="text-center [grid-area:h1] min-[30em]:text-left">
      а) на задньоязиковий
      <Gr class="whitespace-nowrap text-cyan-600 dark:text-cyan-400" text="-κ, -γ, -χ" />
    </div>
    <div class="text-center [grid-area:h2] min-[30em]:text-left">
      б) на губний
      <Gr class="whitespace-nowrap text-cyan-600 dark:text-cyan-400" text="-π, -β, -φ" />
    </div>

    <template v-for="set in LABEL_SETS" :key="set.pref">
      <div
        v-for="(x, i) in set.cases"
        :key="x"
        :style="{ gridArea: `${set.pref}${i}` }"
        :class="set.class"
      >
        {{ CASE_SHORTEN_NAME[x]
        }}<template v-if="i === 0">&nbsp;{{ NUMBER_SHORT_NAME[set.number] }}</template>
      </div>
    </template>

    <Gr class="text-right [grid-area:i0]" text="ὁ" />
    <Gr class="text-right [grid-area:i4]" text="οἱ" />

    <div class="whitespace-nowrap [grid-area:a0]">
      <Gr text="φύλαξ" /> <Gr class="text-xs" text="&lt; -κ+**ς**" />
    </div>
    <Gr class="[grid-area:a1]" text="φύλακ**ος**" />
    <Gr class="[grid-area:a2]" text="φύλακ**ι**" />
    <Gr class="[grid-area:a3]" text="φύλακ**α**" />
    <Gr class="[grid-area:a4]" text="φύλακ**ες**" />
    <Gr class="[grid-area:a5]" text="φυλάκ**ων**" />
    <Gr class="[grid-area:a6]" text="φύλαξ**ι**" />
    <Gr class="[grid-area:a7]" text="φύλακ**ᾰς**" />

    <Gr class="text-right [grid-area:j0]" text="ἡ" />
    <Gr class="text-right [grid-area:j4]" text="αἱ" />

    <Gr class="[grid-area:b0]" text="αἴξ" />
    <Gr class="[grid-area:b1]" text="αἰγ**ός**" />
    <Gr class="[grid-area:b2]" text="αἰγ**ί**" />
    <Gr class="[grid-area:b3]" text="αἶγ**α**" />
    <Gr class="[grid-area:b4]" text="αἶγ**ες**" />
    <Gr class="[grid-area:b5]" text="αἰγ**ῶν**" />
    <Gr class="[grid-area:b6]" text="αἰξ**ί**" />
    <Gr class="[grid-area:b7]" text="αἶγ**ᾰς**" />

    <Gr class="text-right [grid-area:k0]" text="ὁ" />
    <Gr class="text-right [grid-area:k4]" text="οἱ" />

    <div class="whitespace-nowrap [grid-area:c0]">
      <Gr text="γῡ́ψ" /> <Gr class="text-xs" text="&lt; -π+**ς**" />
    </div>
    <Gr class="[grid-area:c1]" text="γῡπ**ός**" />
    <Gr class="[grid-area:c2]" text="γῡπ**ί**" />
    <Gr class="[grid-area:c3]" text="γῦπ**α**" />
    <Gr class="[grid-area:c4]" text="γῦπ**ες**" />
    <Gr class="[grid-area:c5]" text="γῡπ**ῶν**" />
    <Gr class="[grid-area:c6]" text="γῡψ**ί**" />
    <Gr class="[grid-area:c7]" text="γῦπ**ᾰς**" />
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

const CASES_NO_VOC = GREEK_CASES.slice(0, -1)

const LABEL_SETS: LabelSet[] = [
  { pref: 's', number: 'singular', cases: CASES_NO_VOC, class: '' },
  { pref: 'p', number: 'plural', cases: CASES_NO_VOC, class: '' },
  { pref: 's2', number: 'singular', cases: CASES_NO_VOC, class: 'min-[30em]:hidden' },
  { pref: 'p2', number: 'plural', cases: CASES_NO_VOC, class: 'min-[30em]:hidden' },
  { pref: 's3', number: 'singular', cases: CASES_NO_VOC, class: 'min-[30em]:hidden' },
  { pref: 'p3', number: 'plural', cases: CASES_NO_VOC, class: 'min-[30em]:hidden' },
]
</script>

<style scoped lang="scss">
.third-declension-velar-labial-grid {
  grid-template:
    'h1  h1  h1'
    's0  i0  a0'
    's1  .   a1'
    's2  .   a2'
    's3  .   a3'
    'p0  i4  a4'
    'p1  .   a5'
    'p2  .   a6'
    'p3  .   a7'
    's20 j0  b0'
    's21 .   b1'
    's22 .   b2'
    's23 .   b3'
    'p20 j4  b4'
    'p21 .   b5'
    'p22 .   b6'
    'p23 .   b7'
    'h2  h2  h2'
    's30 k0  c0'
    's31 .   c1'
    's32 .   c2'
    's33 .   c3'
    'p30 k4  c4'
    'p31 .   c5'
    'p32 .   c6'
    'p33 .   c7';

  @media (width >= 30em) {
    grid-template:
      'h1  h1  h1  h1  h1  h2  h2'
      's0  i0  a0  j0  b0  k0  c0'
      's1  .   a1  .   b1  .   c1'
      's2  .   a2  .   b2  .   c2'
      's3  .   a3  .   b3  .   c3'
      'p0  i4  a4  j4  b4  k4  c4'
      'p1  .   a5  .   b5  .   c5'
      'p2  .   a6  .   b6  .   c6'
      'p3  .   a7  .   b7  .   c7';
  }
}
</style>

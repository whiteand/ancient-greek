<template>
  <div
    class="third-declension-endings-grid mx-auto grid max-w-[24em] grid-cols-[fit-content(100%)_fit-content(60%)_fit-content(30%)] gap-x-3 rounded border border-cyan-600 px-2 py-1 min-[26em]:max-w-[28em] dark:border-cyan-400"
  >
    <div class="text-center font-bold italic [grid-area:t]">Закінчення III відміни</div>
    <div class="italic [grid-area:h1]">чол. + жін.</div>
    <div class="italic [grid-area:h2]">сер.</div>

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

    <div class="whitespace-nowrap [grid-area:a0]">
      <Gr text="**-ς**" /> або <Gr text="**-Ø**" />
    </div>
    <Gr class="[grid-area:a1]" text="**-ος**" />
    <Gr class="[grid-area:a2]" text="**-ι**" />
    <div class="[grid-area:a3] min-[24em]:whitespace-nowrap">
      <Gr text="**-α**" /> або <Gr text="**-ν**" /> {{ ' '
      }}<span class="text-xs">(після&nbsp;голосного)</span>
    </div>
    <Gr class="[grid-area:a4]" text="**-ες**" />
    <Gr class="[grid-area:a5]" text="**-ων**" />
    <Gr class="[grid-area:a6]" text="**-σι(ν)**" />
    <div class="[grid-area:a7] min-[24em]:whitespace-nowrap">
      <Gr text="**-ᾰς**" /> або <Gr text="**-(ν)ς**" /> {{ ' '
      }}<span class="text-xs">(після&nbsp;голосного)</span>
    </div>

    <Gr class="[grid-area:b0]" text="**-Ø**" />
    <Gr class="[grid-area:b1]" text="**-ος**" />
    <Gr class="[grid-area:b2]" text="**-ι**" />
    <Gr class="[grid-area:b3]" text="**-Ø**" />
    <Gr class="[grid-area:b4]" text="**-α**" />
    <Gr class="[grid-area:b5]" text="**-ων**" />
    <Gr class="[grid-area:b6]" text="**-σι(ν)**" />
    <Gr class="[grid-area:b7]" text="**-α**" />
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
  { pref: 's2', number: 'singular', cases: CASES_NO_VOC, class: 'min-[26em]:hidden' },
  { pref: 'p2', number: 'plural', cases: CASES_NO_VOC, class: 'min-[26em]:hidden' },
]
</script>

<style scoped lang="scss">
.third-declension-endings-grid {
  grid-template:
    't   t'
    '.   h1'
    's0  a0'
    's1  a1'
    's2  a2'
    's3  a3'
    'p0  a4'
    'p1  a5'
    'p2  a6'
    'p3  a7'
    '.   h2'
    's20 b0'
    's21 b1'
    's22 b2'
    's23 b3'
    'p20 b4'
    'p21 b5'
    'p22 b6'
    'p23 b7';

  @media (width >= 26em) {
    grid-template:
      't   t   t'
      '.   h1  h2'
      's0  a0  b0'
      's1  a1  b1'
      's2  a2  b2'
      's3  a3  b3'
      'p0  a4  b4'
      'p1  a5  b5'
      'p2  a6  b6'
      'p3  a7  b7';
  }
}
</style>

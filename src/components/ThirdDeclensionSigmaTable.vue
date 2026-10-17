<template>
  <div
    class="third-declension-sigma-grid mx-auto grid max-w-[15em] grid-cols-[fit-content(100%)_repeat(5,fit-content(12%))] gap-x-2 min-[30em]:max-w-[28em] md:max-w-[42em]"
  >
    <div class="text-center [grid-area:h1] min-[30em]:text-left min-[30em]:whitespace-nowrap">
      <span class="font-bold italic">е) на сибілянт</span>
      {{ ' ' }}
      <Gr class="text-cyan-600 dark:text-cyan-400" text="-σ" />:
      {{ ' ' }}
      <span class="italic">сер.</span>
    </div>
    <div class="text-center italic [grid-area:h3] min-[30em]:text-left">
      чол. (лише власні імена)
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

    <div class="hidden text-center [grid-area:m0] min-[30em]:block">
      {{ NUMBER_SHORT_NAME.plural }}
    </div>
    <div class="hidden text-center whitespace-nowrap [grid-area:vm] min-[30em]:block">= наз.</div>
    <div class="[grid-area:va] min-[30em]:hidden">= наз.</div>
    <div class="[grid-area:vb] min-[30em]:hidden">= наз.</div>

    <Gr class="[grid-area:a0]" text="γέν**ος**" />
    <Gr class="[grid-area:a1]" text="γέν**ους**" />
    <Gr class="[grid-area:a2]" text="γέν**ει**" />
    <Gr class="[grid-area:a3]" text="γέν**ος**" />

    <Gr class="[grid-area:b0]" text="γέν**η**" />
    <Gr class="[grid-area:b1]" text="γεν**ῶν**" />
    <Gr class="[grid-area:b2]" text="γέν**εσι**" />
    <Gr class="[grid-area:b3]" text="γέν**η**" />

    <Gr class="[grid-area:c0]" text="Σωκράτ**ης**" />
    <Gr class="[grid-area:c1]" text="Σωκράτ**ους**" />
    <Gr class="[grid-area:c2]" text="Σωκράτ**ει**" />
    <Gr class="[grid-area:c3]" text="Σωκράτ**η** **(-ην)**" />
    <Gr class="[grid-area:c4]" text="Σώκρατ**ες**" />

    <Gr class="[grid-area:d0]" text="Περικλ**ῆς**" />
    <Gr class="[grid-area:d1]" text="Περικλ**έους**" />
    <Gr class="[grid-area:d2]" text="Περικλ**εῖ**" />
    <Gr class="[grid-area:d3]" text="Περικλ**έᾱ**" />
    <Gr class="[grid-area:d4]" text="Περίκλ**εις**" />
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

const CASES = GREEK_CASES

const LABEL_SETS: LabelSet[] = [
  { pref: 's', number: 'singular', cases: CASES, class: '' },
  { pref: 'p', number: 'plural', cases: CASES, class: 'min-[30em]:hidden' },
  { pref: 's2', number: 'singular', cases: CASES, class: 'md:hidden' },
  { pref: 's3', number: 'singular', cases: CASES, class: 'min-[30em]:hidden' },
]
</script>

<style scoped lang="scss">
.third-declension-sigma-grid {
  grid-template:
    'h1  h1'
    's0  a0'
    's1  a1'
    's2  a2'
    's3  a3'
    's4  va'
    'p0  b0'
    'p1  b1'
    'p2  b2'
    'p3  b3'
    'p4  vb'
    'h3  h3'
    's20 c0'
    's21 c1'
    's22 c2'
    's23 c3'
    's24 c4'
    's30 d0'
    's31 d1'
    's32 d2'
    's33 d3'
    's34 d4';

  @media (width >= 30em) {
    grid-template:
      'h1  h1  h1  h1'
      's0  a0  m0  b0'
      's1  a1  .   b1'
      's2  a2  .   b2'
      's3  a3  .   b3'
      's4  .   vm  .'
      'h3  h3  h3  h3'
      's20 c0  .   d0'
      's21 c1  .   d1'
      's22 c2  .   d2'
      's23 c3  .   d3'
      's24 c4  .   d4';
  }

  @media (width >= 48rem) {
    grid-template:
      'h1  h1  h1  h1  h3  h3'
      's0  a0  m0  b0  c0  d0'
      's1  a1  .   b1  c1  d1'
      's2  a2  .   b2  c2  d2'
      's3  a3  .   b3  c3  d3'
      's4  .   vm  .   c4  d4';
  }
}
</style>

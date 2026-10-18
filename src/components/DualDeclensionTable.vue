<template>
  <div class="dual-declension-grid mx-auto grid w-fit max-w-full gap-x-2">
    <div class="whitespace-nowrap italic [grid-area:h1] md:text-center">I відміна</div>
    <div class="whitespace-nowrap italic [grid-area:h2] md:text-center">II відміна</div>
    <div class="whitespace-nowrap italic [grid-area:h3] md:text-center">III відміна</div>

    <template v-for="set in LABEL_SETS" :key="set.pref">
      <div
        v-for="(cases, i) in set.cases"
        :key="`${set.pref}${i}`"
        :style="{ gridArea: `${set.pref}${i}` }"
        :class="set.class"
      >
        {{ caseLabel(cases) }}
      </div>
    </template>

    <Gr class="[grid-area:e0]" text="**-ᾱ**" />
    <Gr class="[grid-area:e1]" text="**-αιν**" />
    <Gr class="text-right [grid-area:i0]" text="τὼ" />
    <Gr class="text-right [grid-area:i1]" text="τοῖν" />
    <Gr class="[grid-area:a0]" text="χώρᾱ" />
    <Gr class="[grid-area:a1]" text="χώραιν" />

    <Gr class="[grid-area:f0]" text="**-ω**" />
    <Gr class="[grid-area:f1]" text="**-οιν**" />
    <Gr class="text-right [grid-area:j0]" text="τὼ" />
    <Gr class="text-right [grid-area:j1]" text="τοῖν" />
    <Gr class="[grid-area:b0]" text="θεώ" />
    <Gr class="[grid-area:b1]" text="θεοῖν" />

    <Gr class="[grid-area:g0]" text="**-ε**" />
    <Gr class="[grid-area:g1]" text="**-οιν**" />
    <Gr class="text-right [grid-area:k0]" text="τὼ" />
    <Gr class="text-right [grid-area:k1]" text="τοῖν" />
    <div class="flex flex-col items-start [grid-area:c0] min-[27rem]:block">
      <span><Gr text="φύλακε," /></span>
      {{ ' ' }}
      <Gr text="γένει" />
    </div>
    <div class="flex flex-col items-start [grid-area:c1] min-[27rem]:block">
      <span><Gr text="φυλάκοιν," /></span>
      {{ ' ' }}
      <Gr text="γενοῖν" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Gr from './GreekSpan.vue'
import { CASE_SHORTEN_NAME } from '@/components/cases.ts'
import type { GreekCase } from '@/data/greekCase.ts'

type LabelSet = {
  pref: string
  cases: readonly (readonly GreekCase[])[]
  class: string
}

const CASE_ROWS = [
  ['nominative', 'accusative', 'vocative'],
  ['genitive', 'dative'],
] as const satisfies readonly (readonly GreekCase[])[]

const LABEL_SETS: LabelSet[] = [
  { pref: 's', cases: CASE_ROWS, class: '' },
  { pref: 't', cases: CASE_ROWS, class: 'md:hidden' },
  { pref: 'u', cases: CASE_ROWS, class: 'md:hidden' },
]

const caseLabel = (cases: readonly GreekCase[]) => cases.map((c) => CASE_SHORTEN_NAME[c]).join(', ')
</script>

<style scoped lang="scss">
.dual-declension-grid {
  grid-template:
    '.   .   h1  h1'
    's0  e0  i0  a0'
    's1  e1  i1  a1'
    '.   .   h2  h2'
    't0  f0  j0  b0'
    't1  f1  j1  b1'
    '.   .   h3  h3'
    'u0  g0  k0  c0'
    'u1  g1  k1  c1';

  @media (width >= 48rem) {
    grid-template:
      '.   .   h1  h1  .   h2  h2  .   h3  h3'
      's0  e0  i0  a0  f0  j0  b0  g0  k0  c0'
      's1  e1  i1  a1  f1  j1  b1  g1  k1  c1';
  }
}
</style>

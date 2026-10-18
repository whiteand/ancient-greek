<template>
  <div class="third-declension-nt-adjective-grid mx-auto grid w-fit max-w-full gap-x-2">
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

    <div class="h-4 [grid-area:gap1] min-[30em]:hidden" />
    <div class="h-4 [grid-area:gap2] md:hidden" />

    <Gr class="[grid-area:a0]" text="πᾶς" />
    <Gr class="[grid-area:b0]" text="πᾶν" />
    <Gr class="[grid-area:a1]" text="παντ**ός**" />
    <Gr class="[grid-area:a2]" text="παντ**ί**" />
    <Gr class="[grid-area:a3]" text="πάντ**α**" />
    <Gr class="[grid-area:b3]" text="πᾶν" />
    <Gr class="[grid-area:a4]" text="πάντ**ες**" />
    <Gr class="[grid-area:b4]" text="πάντ**α**" />
    <Gr class="[grid-area:a5]" text="πάντ**ων**" />
    <Gr class="[grid-area:a6]" text="πᾶ**σι**" />
    <Gr class="[grid-area:a7]" text="πάντ**ας**" />
    <Gr class="[grid-area:b7]" text="πάντ**α**" />

    <Gr class="[grid-area:c0]" text="ἑκών" />
    <Gr class="[grid-area:d0]" text="ἑκόν" />
    <Gr class="[grid-area:c1]" text="ἑκόντ**ος**" />
    <Gr class="[grid-area:c2]" text="ἑκόντ**ι**" />
    <Gr class="[grid-area:c3]" text="ἑκόντ**α**" />
    <Gr class="[grid-area:d3]" text="ἑκόν" />
    <Gr class="[grid-area:c4]" text="ἑκόντ**ες**" />
    <Gr class="[grid-area:d4]" text="ἑκόντ**α**" />
    <Gr class="[grid-area:c5]" text="ἑκόντ**ων**" />
    <Gr class="[grid-area:c6]" text="ἑκοῦ**σι**" />
    <Gr class="[grid-area:c7]" text="ἑκόντ**ας**" />
    <Gr class="[grid-area:d7]" text="ἑκόντ**α**" />

    <Gr class="[grid-area:e0]" text="χαρίεις" />
    <Gr class="[grid-area:f0]" text="χαρίεν" />
    <Gr class="[grid-area:e1]" text="χαρίεντ**ος**" />
    <Gr class="[grid-area:e2]" text="χαρίεντ**ι**" />
    <Gr class="[grid-area:e3]" text="χαρίεντ**α**" />
    <Gr class="[grid-area:f3]" text="χαρίεν" />
    <Gr class="[grid-area:e4]" text="χαρίεντ**ες**" />
    <Gr class="[grid-area:f4]" text="χαρίεντ**α**" />
    <Gr class="[grid-area:e5]" text="χαριέντ**ων**" />
    <Gr class="[grid-area:e6]" text="χαρίε**σι**" />
    <Gr class="[grid-area:e7]" text="χαρίεντ**ας**" />
    <Gr class="[grid-area:f7]" text="χαρίεντ**α**" />
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

const CASES = GREEK_CASES.slice(0, -1)

const LABEL_SETS: LabelSet[] = [
  { pref: 's', number: 'singular', cases: CASES, class: '' },
  { pref: 'p', number: 'plural', cases: CASES, class: '' },
  { pref: 's2', number: 'singular', cases: CASES, class: 'min-[30em]:hidden' },
  { pref: 'p2', number: 'plural', cases: CASES, class: 'min-[30em]:hidden' },
  { pref: 's3', number: 'singular', cases: CASES, class: 'md:hidden' },
  { pref: 'p3', number: 'plural', cases: CASES, class: 'md:hidden' },
]
</script>

<style scoped lang="scss">
.third-declension-nt-adjective-grid {
  grid-template:
    's0   a0   b0'
    's1   a1   .'
    's2   a2   .'
    's3   a3   b3'
    'p0   a4   b4'
    'p1   a5   .'
    'p2   a6   .'
    'p3   a7   b7'
    'gap1 gap1 gap1'
    's20  c0   d0'
    's21  c1   .'
    's22  c2   .'
    's23  c3   d3'
    'p20  c4   d4'
    'p21  c5   .'
    'p22  c6   .'
    'p23  c7   d7'
    'gap2 gap2 gap2'
    's30  e0   f0'
    's31  e1   .'
    's32  e2   .'
    's33  e3   f3'
    'p30  e4   f4'
    'p31  e5   .'
    'p32  e6   .'
    'p33  e7   f7';

  @media (width >= 30em) {
    grid-template:
      's0   a0  b0  c0  d0'
      's1   a1  .   c1  .'
      's2   a2  .   c2  .'
      's3   a3  b3  c3  d3'
      'p0   a4  b4  c4  d4'
      'p1   a5  .   c5  .'
      'p2   a6  .   c6  .'
      'p3   a7  b7  c7  d7'
      'gap2 gap2 gap2 gap2 gap2'
      's30  e0  f0  .   .'
      's31  e1  .   .   .'
      's32  e2  .   .   .'
      's33  e3  f3  .   .'
      'p30  e4  f4  .   .'
      'p31  e5  .   .   .'
      'p32  e6  .   .   .'
      'p33  e7  f7  .   .';
  }

  @media (width >= 48rem) {
    grid-template:
      's0  a0  b0  c0  d0  e0  f0'
      's1  a1  .   c1  .   e1  .'
      's2  a2  .   c2  .   e2  .'
      's3  a3  b3  c3  d3  e3  f3'
      'p0  a4  b4  c4  d4  e4  f4'
      'p1  a5  .   c5  .   e5  .'
      'p2  a6  .   c6  .   e6  .'
      'p3  a7  b7  c7  d7  e7  f7';
  }
}
</style>

<template>
  <div
    class="third-declension-dental-grid mx-auto grid max-w-[15em] grid-cols-[fit-content(100%)_repeat(10,fit-content(10%))] gap-x-2 min-[30em]:max-w-[30em] md:max-w-[38em]"
  >
    <div class="text-center [grid-area:h1] min-[30em]:text-left">
      в) на зубний
      <Gr class="whitespace-nowrap text-cyan-600 dark:text-cyan-400" text="-τ, -δ, -θ" />
    </div>
    <div class="text-center [grid-area:h2] min-[30em]:text-left">
      <Gr class="text-cyan-600 dark:text-cyan-400" text="-ντ" />
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
    <Gr class="text-right [grid-area:i5]" text="οἱ" />

    <Gr class="[grid-area:a0]" text="γυμνής" />
    <Gr class="[grid-area:a1]" text="γυμνῆτ**ος**" />
    <Gr class="[grid-area:a2]" text="γυμνῆτ**ι**" />
    <Gr class="[grid-area:a3]" text="γυμνῆτ**α**" />
    <div class="[grid-area:a4]">= наз.</div>
    <Gr class="[grid-area:a5]" text="γυμνῆτ**ες**" />
    <Gr class="[grid-area:a6]" text="γυμνήτ**ων**" />
    <Gr class="[grid-area:a7]" text="γυμνῆ**σι**" />
    <Gr class="[grid-area:a8]" text="γυμνῆτ**ᾰς**" />

    <Gr class="text-right [grid-area:j0]" text="ἡ" />
    <Gr class="text-right [grid-area:j5]" text="αἱ" />

    <Gr class="[grid-area:b0]" text="ἐλπίς" />
    <Gr class="[grid-area:b1]" text="ἐλπίδ**ος**" />
    <Gr class="[grid-area:b2]" text="ἐλπίδ**ι**" />
    <Gr class="[grid-area:b3]" text="ἐλπίδ**α**" />
    <div class="[grid-area:b4]">= наз.</div>
    <Gr class="[grid-area:b5]" text="ἐλπίδ**ες**" />
    <Gr class="[grid-area:b6]" text="ἐλπίδ**ων**" />
    <Gr class="[grid-area:b7]" text="ἐλπί**σι**" />
    <Gr class="[grid-area:b8]" text="ἐλπίδ**ᾰς**" />

    <Gr class="text-right [grid-area:k0]" text="τὸ" />
    <Gr class="text-right [grid-area:k5]" text="τὰ" />

    <Gr class="[grid-area:c0]" text="σῶμα" />
    <Gr class="[grid-area:c1]" text="σώματ**ος**" />
    <Gr class="[grid-area:c2]" text="σώματ**ι**" />
    <Gr class="[grid-area:c3]" text="σῶμα" />
    <div class="[grid-area:c4]">= наз.</div>
    <Gr class="[grid-area:c5]" text="σώματ**α**" />
    <Gr class="[grid-area:c6]" text="σωμάτ**ων**" />
    <Gr class="[grid-area:c7]" text="σώμα**σι**" />
    <Gr class="[grid-area:c8]" text="σώματ**α**" />

    <Gr class="text-right [grid-area:l0]" text="ὁ" />
    <Gr class="text-right [grid-area:l4]" text="ὦ" />
    <Gr class="text-right [grid-area:l5]" text="οἱ" />

    <Gr class="[grid-area:d0]" text="γίγᾱς" />
    <Gr class="[grid-area:d1]" text="γίγαντ**ος**" />
    <Gr class="[grid-area:d2]" text="γίγαντ**ι**" />
    <Gr class="[grid-area:d3]" text="γίγαντ**α**" />
    <Gr class="[grid-area:d4]" text="γίγαν" />
    <Gr class="[grid-area:d5]" text="γίγαντ**ες**" />
    <Gr class="[grid-area:d6]" text="γιγάντ**ων**" />
    <Gr class="[grid-area:d7]" text="γίγᾱ**σι**" />
    <Gr class="[grid-area:d8]" text="γίγαντ**ᾰς**" />

    <Gr class="text-right [grid-area:m0]" text="ὁ" />
    <Gr class="text-right [grid-area:m4]" text="ὦ" />
    <Gr class="text-right [grid-area:m5]" text="οἱ" />

    <Gr class="[grid-area:e0]" text="γέρων" />
    <Gr class="[grid-area:e1]" text="γέροντ**ος**" />
    <Gr class="[grid-area:e2]" text="γέροντ**ι**" />
    <Gr class="[grid-area:e3]" text="γέροντ**α**" />
    <Gr class="[grid-area:e4]" text="γέρον" />
    <Gr class="[grid-area:e5]" text="γέροντ**ες**" />
    <Gr class="[grid-area:e6]" text="γερόντ**ων**" />
    <Gr class="[grid-area:e7]" text="γέρου**σι**" />
    <Gr class="[grid-area:e8]" text="γέροντ**ᾰς**" />
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

const SG_CASES = GREEK_CASES
const PL_CASES = GREEK_CASES.slice(0, -1)

const LABEL_SETS: LabelSet[] = [
  { pref: 's', number: 'singular', cases: SG_CASES, class: '' },
  { pref: 'p', number: 'plural', cases: PL_CASES, class: '' },
  { pref: 's2', number: 'singular', cases: SG_CASES, class: 'md:hidden' },
  { pref: 'p2', number: 'plural', cases: PL_CASES, class: 'md:hidden' },
  { pref: 's3', number: 'singular', cases: SG_CASES, class: 'min-[30em]:hidden' },
  { pref: 'p3', number: 'plural', cases: PL_CASES, class: 'min-[30em]:hidden' },
  { pref: 's4', number: 'singular', cases: SG_CASES, class: 'min-[30em]:hidden' },
  { pref: 'p4', number: 'plural', cases: PL_CASES, class: 'min-[30em]:hidden' },
  { pref: 's5', number: 'singular', cases: SG_CASES, class: 'min-[30em]:hidden' },
  { pref: 'p5', number: 'plural', cases: PL_CASES, class: 'min-[30em]:hidden' },
]
</script>

<style scoped lang="scss">
.third-declension-dental-grid {
  grid-template:
    'h1  h1  h1'
    's0  i0  a0'
    's1  .   a1'
    's2  .   a2'
    's3  .   a3'
    's4  .   a4'
    'p0  i5  a5'
    'p1  .   a6'
    'p2  .   a7'
    'p3  .   a8'
    's30 j0  b0'
    's31 .   b1'
    's32 .   b2'
    's33 .   b3'
    's34 .   b4'
    'p30 j5  b5'
    'p31 .   b6'
    'p32 .   b7'
    'p33 .   b8'
    's40 k0  c0'
    's41 .   c1'
    's42 .   c2'
    's43 .   c3'
    's44 .   c4'
    'p40 k5  c5'
    'p41 .   c6'
    'p42 .   c7'
    'p43 .   c8'
    'h2  h2  h2'
    's20 l0  d0'
    's21 .   d1'
    's22 .   d2'
    's23 .   d3'
    's24 l4  d4'
    'p20 l5  d5'
    'p21 .   d6'
    'p22 .   d7'
    'p23 .   d8'
    's50 m0  e0'
    's51 .   e1'
    's52 .   e2'
    's53 .   e3'
    's54 m4  e4'
    'p50 m5  e5'
    'p51 .   e6'
    'p52 .   e7'
    'p53 .   e8';

  @media (width >= 30em) {
    grid-template:
      '.   h1  h1  h1  h1  h1  h1'
      's0  i0  a0  j0  b0  k0  c0'
      's1  .   a1  .   b1  .   c1'
      's2  .   a2  .   b2  .   c2'
      's3  .   a3  .   b3  .   c3'
      's4  .   a4  .   b4  .   c4'
      'p0  i5  a5  j5  b5  k5  c5'
      'p1  .   a6  .   b6  .   c6'
      'p2  .   a7  .   b7  .   c7'
      'p3  .   a8  .   b8  .   c8'
      '.   h2  h2  h2  h2  .   .'
      's20 l0  d0  m0  e0  .   .'
      's21 .   d1  .   e1  .   .'
      's22 .   d2  .   e2  .   .'
      's23 .   d3  .   e3  .   .'
      's24 l4  d4  m4  e4  .   .'
      'p20 l5  d5  m5  e5  .   .'
      'p21 .   d6  .   e6  .   .'
      'p22 .   d7  .   e7  .   .'
      'p23 .   d8  .   e8  .   .';
  }

  @media (width >= 48rem) {
    grid-template:
      '.   h1  h1  h1  h1  h1  h1  .   h2  h2  h2'
      's0  i0  a0  j0  b0  k0  c0  l0  d0  m0  e0'
      's1  .   a1  .   b1  .   c1  .   d1  .   e1'
      's2  .   a2  .   b2  .   c2  .   d2  .   e2'
      's3  .   a3  .   b3  .   c3  .   d3  .   e3'
      's4  .   a4  .   b4  .   c4  l4  d4  m4  e4'
      'p0  i5  a5  j5  b5  k5  c5  l5  d5  m5  e5'
      'p1  .   a6  .   b6  .   c6  .   d6  .   e6'
      'p2  .   a7  .   b7  .   c7  .   d7  .   e7'
      'p3  .   a8  .   b8  .   c8  .   d8  .   e8';
  }
}
</style>

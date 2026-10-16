<template>
  <div
    class="third-declension-nasal-liquid-grid mx-auto grid max-w-[15em] grid-cols-[fit-content(100%)_repeat(12,fit-content(8%))] gap-x-2 min-[30em]:max-w-[24em] md:max-w-[44em]"
  >
    <div class="text-center [grid-area:h1] min-[30em]:text-left">
      г) на носовий <Gr class="text-cyan-600 dark:text-cyan-400" text="-ν" />
    </div>
    <div class="text-center [grid-area:h2] min-[30em]:text-left">
      д) на плавний
      <Gr class="whitespace-nowrap text-cyan-600 dark:text-cyan-400" text="-λ, -ρ" />
    </div>
    <div class="text-center [grid-area:h3] min-[30em]:text-left">давнє відмінювання</div>

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
    <Gr class="text-right [grid-area:i4]" text="ὦ" />
    <Gr class="text-right [grid-area:i5]" text="οἱ" />

    <Gr class="[grid-area:a0]" text="δαίμων" />
    <Gr class="[grid-area:a1]" text="δαίμον**ος**" />
    <Gr class="[grid-area:a2]" text="δαίμον**ι**" />
    <Gr class="[grid-area:a3]" text="δαίμον**α**" />
    <Gr class="[grid-area:a4]" text="δαῖμον" />
    <Gr class="[grid-area:a5]" text="δαίμον**ες**" />
    <Gr class="[grid-area:a6]" text="δαιμόν**ων**" />
    <Gr class="[grid-area:a7]" text="δαίμο**σι**" />
    <Gr class="[grid-area:a8]" text="δαίμον**ᾰς**" />

    <Gr class="text-right [grid-area:j0]" text="ὁ" />
    <Gr class="text-right [grid-area:j5]" text="οἱ" />

    <Gr class="[grid-area:b0]" text="ἀγών" />
    <Gr class="[grid-area:b1]" text="ἀγῶν**ος**" />
    <Gr class="[grid-area:b2]" text="ἀγῶν**ι**" />
    <Gr class="[grid-area:b3]" text="ἀγῶν**α**" />
    <div class="[grid-area:b4]">= наз.</div>
    <Gr class="[grid-area:b5]" text="ἀγῶν**ες**" />
    <Gr class="[grid-area:b6]" text="ἀγών**ων**" />
    <Gr class="[grid-area:b7]" text="ἀγῶ**σι**" />
    <Gr class="[grid-area:b8]" text="ἀγῶν**ᾰς**" />

    <Gr class="text-right [grid-area:k0]" text="ὁ" />
    <Gr class="text-right [grid-area:k5]" text="οἱ" />

    <Gr class="[grid-area:c0]" text="κρᾱτήρ" />
    <Gr class="[grid-area:c1]" text="κρᾱτῆρ**ος**" />
    <Gr class="[grid-area:c2]" text="κρᾱτῆρ**ι**" />
    <Gr class="[grid-area:c3]" text="κρᾱτῆρ**α**" />
    <div class="[grid-area:c4]">–</div>
    <Gr class="[grid-area:c5]" text="κρᾱτῆρ**ες**" />
    <Gr class="[grid-area:c6]" text="κρᾱτήρ**ων**" />
    <Gr class="[grid-area:c7]" text="κρᾱτῆρ**σι**" />
    <Gr class="[grid-area:c8]" text="κρᾱτῆρ**ᾰς**" />

    <Gr class="text-right [grid-area:l0]" text="ὁ" />
    <Gr class="text-right [grid-area:l5]" text="οἱ" />

    <Gr class="[grid-area:d0]" text="ῥήτωρ" />
    <Gr class="[grid-area:d1]" text="ῥήτορ**ος**" />
    <Gr class="[grid-area:d2]" text="ῥήτορ**ι**" />
    <Gr class="[grid-area:d3]" text="ῥήτορ**α**" />
    <Gr class="[grid-area:d4]" text="ῥῆτορ" />
    <Gr class="[grid-area:d5]" text="ῥήτορ**ες**" />
    <Gr class="[grid-area:d6]" text="ῥητόρ**ων**" />
    <Gr class="[grid-area:d7]" text="ῥήτορ**σι**" />
    <Gr class="[grid-area:d8]" text="ῥήτορ**ᾰς**" />

    <Gr class="text-right [grid-area:m0]" text="ἡ" />
    <Gr class="text-right [grid-area:m5]" text="αἱ" />

    <Gr class="[grid-area:e0]" text="μήτηρ" />
    <Gr class="[grid-area:e1]" text="μητρ**ός**" />
    <Gr class="[grid-area:e2]" text="μητρ**ί**" />
    <Gr class="[grid-area:e3]" text="μητέρ**α**" />
    <Gr class="[grid-area:e4]" text="μῆτερ" />
    <Gr class="[grid-area:e5]" text="μητέρ**ες**" />
    <Gr class="[grid-area:e6]" text="μητέρ**ων**" />
    <Gr class="[grid-area:e7]" text="μητρά**σι**" />
    <Gr class="[grid-area:e8]" text="μητέρ**ᾰς**" />

    <Gr class="text-right [grid-area:n0]" text="ὁ" />
    <Gr class="text-right [grid-area:n5]" text="οἱ" />

    <Gr class="[grid-area:f0]" text="ἀνήρ" />
    <Gr class="[grid-area:f1]" text="ἀνδρ**ός**" />
    <Gr class="[grid-area:f2]" text="ἀνδρ**ί**" />
    <Gr class="[grid-area:f3]" text="ἄνδρ**α**" />
    <Gr class="[grid-area:f4]" text="ἄνερ" />
    <Gr class="[grid-area:f5]" text="ἄνδρ**ες**" />
    <Gr class="[grid-area:f6]" text="ἀνδρ**ῶν**" />
    <Gr class="[grid-area:f7]" text="ἀνδρ**άσι**" />
    <Gr class="[grid-area:f8]" text="ἄνδρ**ᾰς**" />
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
  { pref: 's3', number: 'singular', cases: SG_CASES, class: 'md:hidden' },
  { pref: 'p3', number: 'plural', cases: PL_CASES, class: 'md:hidden' },
  { pref: 's4', number: 'singular', cases: SG_CASES, class: 'min-[30em]:hidden' },
  { pref: 'p4', number: 'plural', cases: PL_CASES, class: 'min-[30em]:hidden' },
  { pref: 's5', number: 'singular', cases: SG_CASES, class: 'min-[30em]:hidden' },
  { pref: 'p5', number: 'plural', cases: PL_CASES, class: 'min-[30em]:hidden' },
  { pref: 's6', number: 'singular', cases: SG_CASES, class: 'min-[30em]:hidden' },
  { pref: 'p6', number: 'plural', cases: PL_CASES, class: 'min-[30em]:hidden' },
]
</script>

<style scoped lang="scss">
.third-declension-nasal-liquid-grid {
  grid-template:
    'h1  h1  h1'
    's0  i0  a0'
    's1  .   a1'
    's2  .   a2'
    's3  .   a3'
    's4  i4  a4'
    'p0  i5  a5'
    'p1  .   a6'
    'p2  .   a7'
    'p3  .   a8'
    's40 j0  b0'
    's41 .   b1'
    's42 .   b2'
    's43 .   b3'
    's44 .   b4'
    'p40 j5  b5'
    'p41 .   b6'
    'p42 .   b7'
    'p43 .   b8'
    'h2  h2  h2'
    's20 k0  c0'
    's21 .   c1'
    's22 .   c2'
    's23 .   c3'
    's24 .   c4'
    'p20 k5  c5'
    'p21 .   c6'
    'p22 .   c7'
    'p23 .   c8'
    's50 l0  d0'
    's51 .   d1'
    's52 .   d2'
    's53 .   d3'
    's54 .   d4'
    'p50 l5  d5'
    'p51 .   d6'
    'p52 .   d7'
    'p53 .   d8'
    'h3  h3  h3'
    's30 m0  e0'
    's31 .   e1'
    's32 .   e2'
    's33 .   e3'
    's34 .   e4'
    'p30 m5  e5'
    'p31 .   e6'
    'p32 .   e7'
    'p33 .   e8'
    's60 n0  f0'
    's61 .   f1'
    's62 .   f2'
    's63 .   f3'
    's64 .   f4'
    'p60 n5  f5'
    'p61 .   f6'
    'p62 .   f7'
    'p63 .   f8';

  @media (width >= 30em) {
    grid-template:
      '.   h1  h1  h1  h1'
      's0  i0  a0  j0  b0'
      's1  .   a1  .   b1'
      's2  .   a2  .   b2'
      's3  .   a3  .   b3'
      's4  i4  a4  .   b4'
      'p0  i5  a5  j5  b5'
      'p1  .   a6  .   b6'
      'p2  .   a7  .   b7'
      'p3  .   a8  .   b8'
      '.   h2  h2  h2  h2'
      's20 k0  c0  l0  d0'
      's21 .   c1  .   d1'
      's22 .   c2  .   d2'
      's23 .   c3  .   d3'
      's24 .   c4  .   d4'
      'p20 k5  c5  l5  d5'
      'p21 .   c6  .   d6'
      'p22 .   c7  .   d7'
      'p23 .   c8  .   d8'
      '.   h3  h3  h3  h3'
      's30 m0  e0  n0  f0'
      's31 .   e1  .   f1'
      's32 .   e2  .   f2'
      's33 .   e3  .   f3'
      's34 .   e4  .   f4'
      'p30 m5  e5  n5  f5'
      'p31 .   e6  .   f6'
      'p32 .   e7  .   f7'
      'p33 .   e8  .   f8';
  }

  @media (width >= 48rem) {
    grid-template:
      '.   h1  h1  h1  h1  h2  h2  h2  h2  h3  h3  h3  h3'
      's0  i0  a0  j0  b0  k0  c0  l0  d0  m0  e0  n0  f0'
      's1  .   a1  .   b1  .   c1  .   d1  .   e1  .   f1'
      's2  .   a2  .   b2  .   c2  .   d2  .   e2  .   f2'
      's3  .   a3  .   b3  .   c3  .   d3  .   e3  .   f3'
      's4  i4  a4  .   b4  .   c4  .   d4  .   e4  .   f4'
      'p0  i5  a5  j5  b5  k5  c5  l5  d5  m5  e5  n5  f5'
      'p1  .   a6  .   b6  .   c6  .   d6  .   e6  .   f6'
      'p2  .   a7  .   b7  .   c7  .   d7  .   e7  .   f7'
      'p3  .   a8  .   b8  .   c8  .   d8  .   e8  .   f8';
  }
}
</style>

<template>
  <div
    class="second-declension-grid mx-auto grid grid-cols-[fit-content(100%)_repeat(11,fit-content(9%))] gap-x-2 md:max-w-[37em]"
  >
    <div class="text-center [grid-area:h1] min-[27rem]:text-left">чол.</div>
    <div class="text-center [grid-area:h2] min-[27rem]:text-left">сер.</div>
    <div class="text-center [grid-area:h3] min-[27rem]:text-left">жін.</div>
    <div class="text-center [grid-area:h4] min-[27rem]:text-left">стягнені іменники</div>

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
    <Gr class="text-right [grid-area:i1]" text="τοῦ" />
    <Gr class="text-right [grid-area:i2]" text="τῷ" />
    <Gr class="text-right [grid-area:i3]" text="τὸν" />
    <Gr class="text-right [grid-area:i4]" text="ὦ" />
    <Gr class="text-right [grid-area:i5]" text="οἱ" />
    <Gr class="text-right [grid-area:i6]" text="τῶν" />
    <Gr class="text-right [grid-area:i7]" text="τοῖς" />
    <Gr class="text-right [grid-area:i8]" text="τοὺς" />

    <Gr class="[grid-area:a0]" text="ἄνθρωπ**ος**" />
    <Gr class="[grid-area:a1]" text="ἀνθρώπ**ου**" />
    <Gr class="[grid-area:a2]" text="ἀνθρώπ**ῳ**" />
    <Gr class="[grid-area:a3]" text="ἄνθρωπ**ον**" />
    <Gr class="[grid-area:a4]" text="ἄνθρωπ**ε**" />
    <Gr class="[grid-area:a5]" text="ἄνθρωπ**οι**" />
    <Gr class="[grid-area:a6]" text="ἀνθρώπ**ων**" />
    <Gr class="[grid-area:a7]" text="ἀνθρώπ**οις**" />
    <Gr class="[grid-area:a8]" text="ἀνθρώπ**ους**" />

    <Gr class="[grid-area:b0]" text="δῆμ**ος**" />
    <Gr class="[grid-area:b1]" text="δήμ**ου**" />
    <Gr class="[grid-area:b2]" text="δήμ**ῳ**" />
    <Gr class="[grid-area:b3]" text="δῆμ**ον**" />
    <Gr class="[grid-area:b4]" text="δῆμ**ε**" />
    <Gr class="[grid-area:b5]" text="δῆμ**οι**" />
    <Gr class="[grid-area:b6]" text="δήμ**ων**" />
    <Gr class="[grid-area:b7]" text="δήμ**οις**" />
    <Gr class="[grid-area:b8]" text="δήμ**ους**" />

    <Gr class="text-right [grid-area:j0]" text="τὸ" />
    <Gr class="text-right [grid-area:j1]" text="τοῦ" />
    <Gr class="text-right [grid-area:j2]" text="τῷ" />
    <Gr class="text-right [grid-area:j3]" text="τὸ" />
    <Gr class="text-right [grid-area:j5]" text="τὰ" />
    <Gr class="text-right [grid-area:j6]" text="τῶν" />
    <Gr class="text-right [grid-area:j7]" text="τοῖς" />
    <Gr class="text-right [grid-area:j8]" text="τὰ" />

    <Gr class="[grid-area:c0]" text="δῶρ**ον**" />
    <Gr class="[grid-area:c1]" text="δώρ**ου**" />
    <Gr class="[grid-area:c2]" text="δώρ**ῳ**" />
    <Gr class="[grid-area:c3]" text="δῶρ**ον**" />
    <Gr class="[grid-area:c5]" text="δῶρ**α**" />
    <Gr class="[grid-area:c6]" text="δώρ**ων**" />
    <Gr class="[grid-area:c7]" text="δώρ**οις**" />
    <Gr class="[grid-area:c8]" text="δῶρ**α**" />

    <Gr class="text-right [grid-area:k0]" text="ἡ" />
    <Gr class="text-right [grid-area:k2]" text="ὦ" />
    <Gr class="text-right [grid-area:k1]" text="αἱ" />

    <Gr class="[grid-area:d0]" text="ὁδ**ός**" />
    <Gr class="[grid-area:d1]" text="ὁδ**οῦ**" />
    <Gr class="[grid-area:d2]" text="ὁδ**ῷ**" />
    <Gr class="[grid-area:d3]" text="ὁδ**όν**" />
    <Gr class="[grid-area:d4]" text="ὁδ**έ**" />
    <Gr class="[grid-area:d5]" text="ὁδ**οί**" />
    <Gr class="[grid-area:d6]" text="ὁδ**ῶν**" />
    <Gr class="[grid-area:d7]" text="ὁδ**οῖς**" />
    <Gr class="[grid-area:d8]" text="ὁδ**ούς**" />

    <Gr class="text-right [grid-area:l0]" text="ὁ" />
    <Gr class="text-right [grid-area:l1]" text="οἱ" />

    <Gr class="[grid-area:e0]" text="νοῦς" />
    <Gr class="[grid-area:e1]" text="νοῦ" />
    <Gr class="[grid-area:e2]" text="νῷ" />
    <Gr class="[grid-area:e3]" text="νοῦν" />
    <Gr class="[grid-area:e5]" text="νοῖ" />
    <Gr class="[grid-area:e6]" text="νῶν" />
    <Gr class="[grid-area:e7]" text="νοῖς" />
    <Gr class="[grid-area:e8]" text="νοῦς" />

    <div class="[grid-area:n1]">= наз.</div>
    <div class="[grid-area:n2] min-[27rem]:hidden">= наз.</div>

    <Gr class="text-right [grid-area:m0]" text="τὸ" />
    <Gr class="text-right [grid-area:m1]" text="τὰ" />

    <Gr class="[grid-area:f0]" text="ὀστοῦν" />
    <Gr class="[grid-area:f1]" text="ὀστοῦ" />
    <Gr class="[grid-area:f2]" text="ὀστῷ" />
    <Gr class="[grid-area:f3]" text="ὀστοῦν" />
    <Gr class="[grid-area:f5]" text="ὀστᾶ" />
    <Gr class="[grid-area:f6]" text="ὀστῶν" />
    <Gr class="[grid-area:f7]" text="ὀστοῖς" />
    <Gr class="[grid-area:f8]" text="ὀστᾶ" />
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
const SG_CASES_NO_VOC = GREEK_CASES.slice(0, -1)
const PL_CASES = GREEK_CASES.slice(0, -1)

const LABEL_SETS: LabelSet[] = [
  { pref: 's', number: 'singular', cases: SG_CASES, class: '' },
  { pref: 'p', number: 'plural', cases: PL_CASES, class: '' },
  { pref: 's2', number: 'singular', cases: SG_CASES, class: 'md:hidden' },
  { pref: 'p2', number: 'plural', cases: PL_CASES, class: 'md:hidden' },
  { pref: 's3', number: 'singular', cases: SG_CASES, class: 'min-[27rem]:hidden' },
  { pref: 'p3', number: 'plural', cases: PL_CASES, class: 'min-[27rem]:hidden' },
  { pref: 's4', number: 'singular', cases: SG_CASES_NO_VOC, class: 'min-[27rem]:hidden' },
  { pref: 'p4', number: 'plural', cases: PL_CASES, class: 'min-[27rem]:hidden' },
  { pref: 's5', number: 'singular', cases: SG_CASES, class: 'min-[27rem]:hidden' },
  { pref: 'p5', number: 'plural', cases: PL_CASES, class: 'min-[27rem]:hidden' },
  { pref: 's6', number: 'singular', cases: SG_CASES, class: 'min-[27rem]:hidden' },
  { pref: 'p6', number: 'plural', cases: PL_CASES, class: 'min-[27rem]:hidden' },
]
</script>

<style scoped lang="scss">
.second-declension-grid {
  grid-template:
    'h1  h1  h1'
    's0  i0  a0'
    's1  i1  a1'
    's2  i2  a2'
    's3  i3  a3'
    's4  i4  a4'
    'p0  i5  a5'
    'p1  i6  a6'
    'p2  i7  a7'
    'p3  i8  a8'
    's30 .   b0'
    's31 .   b1'
    's32 .   b2'
    's33 .   b3'
    's34 .   b4'
    'p30 .   b5'
    'p31 .   b6'
    'p32 .   b7'
    'p33 .   b8'
    'h2  h2  h2'
    's40 j0  c0'
    's41 j1  c1'
    's42 j2  c2'
    's43 j3  c3'
    'p40 j5  c5'
    'p41 j6  c6'
    'p42 j7  c7'
    'p43 j8  c8'
    'h3  h3  h3'
    's20 k0  d0'
    's21 .   d1'
    's22 .   d2'
    's23 .   d3'
    's24 k2  d4'
    'p20 k1  d5'
    'p21 .   d6'
    'p22 .   d7'
    'p23 .   d8'
    'h4  h4  h4'
    's50 l0  e0'
    's51 .   e1'
    's52 .   e2'
    's53 .   e3'
    's54 n1  n1'
    'p50 l1  e5'
    'p51 .   e6'
    'p52 .   e7'
    'p53 .   e8'
    's60 m0  f0'
    's61 .   f1'
    's62 .   f2'
    's63 .   f3'
    's64 n2  n2'
    'p60 m1  f5'
    'p61 .   f6'
    'p62 .   f7'
    'p63 .   f8';

  @media (width >= 27rem) {
    grid-template:
      '.   .   h1  h1  .   h2  .'
      's0  i0  a0  b0  j0  c0  .'
      's1  i1  a1  b1  j1  c1  .'
      's2  i2  a2  b2  j2  c2  .'
      's3  i3  a3  b3  j3  c3  .'
      's4  i4  a4  b4  .   .   .'
      'p0  i5  a5  b5  j5  c5  .'
      'p1  i6  a6  b6  j6  c6  .'
      'p2  i7  a7  b7  j7  c7  .'
      'p3  i8  a8  b8  j8  c8  .'
      '.   h3  h3  h4  h4  h4  h4'
      's20 k0  d0  l0  e0  m0  f0'
      's21 .   d1  .   e1  .   f1'
      's22 .   d2  .   e2  .   f2'
      's23 .   d3  .   e3  .   f3'
      's24 k2  d4  n1  n1  n1  n1'
      'p20 k1  d5  l1  e5  m1  f5'
      'p21 .   d6  .   e6  .   f6'
      'p22 .   d7  .   e7  .   f7'
      'p23 .   d8  .   e8  .   f8';
  }

  @media (width >= 48rem) {
    grid-template:
      '.   .  h1  h1   .   h2  .   h3  .   h4  h4  h4'
      's0  i0  a0  b0  j0  c0  k0  d0  l0  e0  m0  f0'
      's1  i1  a1  b1  j1  c1  .   d1  .   e1  .   f1'
      's2  i2  a2  b2  j2  c2  .   d2  .   e2  .   f2'
      's3  i3  a3  b3  j3  c3  .   d3  .   e3  .   f3'
      's4  i4  a4  b4  .   .   k2  d4  .   n1  n1  n1'
      'p0  i5  a5  b5  j5  c5  k1  d5  l1  e5  m1  f5'
      'p1  i6  a6  b6  j6  c6  .   d6  .   e6  .   f6'
      'p2  i7  a7  b7  j7  c7  .   d7  .   e7  .   f7'
      'p3  i8  a8  b8  j8  c8  .   d8  .   e8  .   f8';
  }
}
</style>

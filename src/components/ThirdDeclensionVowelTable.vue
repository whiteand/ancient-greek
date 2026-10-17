<template>
  <div class="third-declension-vowel-wrap">
    <div class="third-declension-vowel-short">
      <div class="third-declension-vowel-polis">
        <Gr class="text-center text-cyan-600 [grid-area:h1] dark:text-cyan-400" text="-ι" />

        <template v-for="set in POLIS_LABELS" :key="set.pref">
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

        <div class="my-1 h-px bg-stone-600 [grid-area:rule] dark:bg-stone-300" />

        <Gr class="text-right [grid-area:i0]" text="η" />
        <Gr class="[grid-area:a0]" text="πόλ**ις**" />
        <Gr class="[grid-area:a1]" text="πόλ**εως**" />
        <Gr class="[grid-area:a2]" text="πόλ**ει**" />
        <Gr class="[grid-area:a3]" text="πόλ**ιν**" />
        <Gr class="[grid-area:a4]" text="πόλ**ι**" />
        <Gr class="[grid-area:a5]" text="πόλ**εις**" />
        <Gr class="[grid-area:a6]" text="πόλ**εων**" />
        <Gr class="[grid-area:a7]" text="πόλ**εσι**" />
        <Gr class="[grid-area:a8]" text="πόλ**εις**" />
      </div>

      <div class="third-declension-vowel-pukhus">
        <Gr class="text-center text-cyan-600 [grid-area:h2] dark:text-cyan-400" text="-υ" />
        <Gr
          class="text-center text-cyan-600 [grid-area:h2b] min-[30em]:hidden dark:text-cyan-400"
          text="-υ"
        />

        <template v-for="set in PUKHUS_LABELS" :key="set.pref">
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

        <div class="h-4 [grid-area:gapbc] min-[30em]:hidden" />
        <div class="my-1 h-px bg-stone-600 [grid-area:rule2] md:hidden dark:bg-stone-300" />
        <div class="my-1 h-px bg-stone-600 [grid-area:rule3] min-[30em]:hidden dark:bg-stone-300" />

        <Gr class="text-right [grid-area:j0]" text="ὁ" />
        <Gr class="[grid-area:b0]" text="πῆχ**υς**" />
        <Gr class="[grid-area:b1]" text="πήχ**εως**" />
        <Gr class="[grid-area:b2]" text="πήχ**ει**" />
        <Gr class="[grid-area:b3]" text="πῆχ**υν**" />
        <Gr class="[grid-area:b4]" text="πῆχ**υ**" />
        <Gr class="[grid-area:b5]" text="πήχ**εις**" />
        <Gr class="[grid-area:b6]" text="πήχ**εων**" />
        <Gr class="[grid-area:b7]" text="πήχ**εσι**" />
        <Gr class="[grid-area:b8]" text="πήχ**εις**" />

        <Gr class="text-right [grid-area:k0]" text="τὸ" />
        <Gr class="[grid-area:c0]" text="ἄστ**υ**" />
        <Gr class="[grid-area:c1]" text="ἄστ**εως**" />
        <Gr class="[grid-area:c2]" text="ἄστ**ει**" />
        <Gr class="[grid-area:c3]" text="ἄστ**υ**" />
        <Gr class="[grid-area:c4]" text="ἄστ**υ**" />
        <Gr class="[grid-area:c5]" text="ἄστ**η**" />
        <Gr class="[grid-area:c6]" text="ἄστ**εων**" />
        <Gr class="[grid-area:c7]" text="ἄστ**εσι**" />
        <Gr class="[grid-area:c8]" text="ἄστ**η**" />
      </div>
    </div>

    <div class="third-declension-vowel-ikhthus">
      <Gr class="text-center text-cyan-600 [grid-area:h3] dark:text-cyan-400" text="-ῡ" />
      <Gr class="text-center text-cyan-600 [grid-area:h4] dark:text-cyan-400" text="-ευ" />

      <template v-for="set in IKHTHUS_LABELS" :key="set.pref">
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

      <div class="h-4 [grid-area:gapde] min-[30em]:hidden" />
      <div class="my-1 h-px bg-stone-600 [grid-area:rule4] lg:hidden dark:bg-stone-300" />
      <div class="my-1 h-px bg-stone-600 [grid-area:rule5] min-[30em]:hidden dark:bg-stone-300" />

      <Gr class="text-right [grid-area:l0]" text="ὁ" />
      <Gr class="[grid-area:d0]" text="ἰχθῦ**ς**" />
      <Gr class="[grid-area:d1]" text="ἰχθύ**ος**" />
      <Gr class="[grid-area:d2]" text="ἰχθύ**ϊ**" />
      <Gr class="[grid-area:d3]" text="ἰχθῦ**ν**" />
      <Gr class="[grid-area:d4]" text="ἰχθύ" />
      <Gr class="[grid-area:d5]" text="ἰχθύ**ες**" />
      <Gr class="[grid-area:d6]" text="ἰχθύ**ων**" />
      <Gr class="[grid-area:d7]" text="ἰχθύ**σι**" />
      <Gr class="[grid-area:d8]" text="ἰχθῦ**ς**" />

      <Gr class="text-right [grid-area:m0]" text="ὁ" />
      <Gr class="[grid-area:e0]" text="βασιλ**εύς**" />
      <Gr class="[grid-area:e1]" text="βασιλ**έως**" />
      <Gr class="[grid-area:e2]" text="βασιλ**εῖ**" />
      <Gr class="[grid-area:e3]" text="βασιλ**έᾱ**" />
      <Gr class="[grid-area:e4]" text="βασιλ**εῦ**" />
      <Gr class="whitespace-nowrap [grid-area:e5]" text="βασιλ**ῆς**, **-εῖς**" />
      <Gr class="[grid-area:e6]" text="βασιλ**έων**" />
      <Gr class="[grid-area:e7]" text="βασιλ**εῦσι**" />
      <Gr class="whitespace-nowrap [grid-area:e8]" text="βασιλ**έᾱς,-εῖς**" />
    </div>

    <div class="third-declension-vowel-diph">
      <Gr class="text-center text-cyan-600 [grid-area:h5] dark:text-cyan-400" text="-ου" />
      <Gr class="text-center text-cyan-600 [grid-area:h6] dark:text-cyan-400" text="-αυ" />

      <template v-for="set in DIPH_LABELS" :key="set.pref">
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

      <div class="h-4 [grid-area:gapfg] min-[30em]:hidden" />
      <div class="my-1 h-px bg-stone-600 [grid-area:rule6] lg:hidden dark:bg-stone-300" />
      <div class="my-1 h-px bg-stone-600 [grid-area:rule7] min-[30em]:hidden dark:bg-stone-300" />

      <Gr class="text-right [grid-area:n0]" text="ὁ" />
      <Gr class="[grid-area:f0]" text="βοῦς" />
      <Gr class="[grid-area:f1]" text="βοός" />
      <Gr class="[grid-area:f2]" text="βοΐ" />
      <Gr class="[grid-area:f3]" text="βοῦν" />
      <Gr class="[grid-area:f4]" text="(βοῦ)" />
      <Gr class="[grid-area:f5]" text="βόες" />
      <Gr class="[grid-area:f6]" text="βοῶν" />
      <Gr class="[grid-area:f7]" text="βουσί" />
      <Gr class="[grid-area:f8]" text="βοῦς" />

      <Gr class="text-right [grid-area:o0]" text="ἡ" />
      <Gr class="[grid-area:g0]" text="ναῦς" />
      <Gr class="[grid-area:g1]" text="νεώς" />
      <Gr class="[grid-area:g2]" text="νηΐ" />
      <Gr class="[grid-area:g3]" text="ναῦν" />
      <div class="[grid-area:g4]">–</div>
      <Gr class="[grid-area:g5]" text="νῆες" />
      <Gr class="[grid-area:g6]" text="νεῶν" />
      <Gr class="[grid-area:g7]" text="ναυσί" />
      <Gr class="[grid-area:g8]" text="ναῦς" />
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

const SG_CASES = GREEK_CASES
const PL_CASES = GREEK_CASES.slice(0, -1)

const LABEL_SETS: LabelSet[] = [
  { pref: 's', number: 'singular', cases: SG_CASES, class: '' },
  { pref: 'p', number: 'plural', cases: PL_CASES, class: '' },
  { pref: 's2', number: 'singular', cases: SG_CASES, class: 'md:hidden' },
  { pref: 'p2', number: 'plural', cases: PL_CASES, class: 'md:hidden' },
  { pref: 's3', number: 'singular', cases: SG_CASES, class: 'min-[30em]:hidden' },
  { pref: 'p3', number: 'plural', cases: PL_CASES, class: 'min-[30em]:hidden' },
  { pref: 's4', number: 'singular', cases: SG_CASES, class: 'lg:hidden' },
  { pref: 'p4', number: 'plural', cases: PL_CASES, class: 'lg:hidden' },
  { pref: 's5', number: 'singular', cases: SG_CASES, class: 'min-[30em]:hidden' },
  { pref: 'p5', number: 'plural', cases: PL_CASES, class: 'min-[30em]:hidden' },
  { pref: 's6', number: 'singular', cases: SG_CASES, class: 'lg:hidden' },
  { pref: 'p6', number: 'plural', cases: PL_CASES, class: 'lg:hidden' },
  { pref: 's7', number: 'singular', cases: SG_CASES, class: 'min-[30em]:hidden' },
  { pref: 'p7', number: 'plural', cases: PL_CASES, class: 'min-[30em]:hidden' },
]

const POLIS_LABELS = LABEL_SETS.filter((set) => set.pref === 's' || set.pref === 'p')
const PUKHUS_LABELS = LABEL_SETS.filter((set) => ['s2', 'p2', 's3', 'p3'].includes(set.pref))
const IKHTHUS_LABELS = LABEL_SETS.filter((set) => ['s4', 'p4', 's5', 'p5'].includes(set.pref))
const DIPH_LABELS = LABEL_SETS.filter((set) => ['s6', 'p6', 's7', 'p7'].includes(set.pref))
</script>

<style scoped lang="scss">
.third-declension-vowel-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: fit-content;
  max-width: 100%;
  margin-inline: auto;

  @media (width >= 64rem) {
    display: grid;
    gap: 0 0.5rem;
    grid-template:
      '.    .    h1   .    h2   h2   h2   .    h3   .    h4   .    h5   .    h6'
      's0   i0   a0   j0   b0   k0   c0   l0   d0   m0   e0   n0   f0   o0   g0'
      's1   .    a1   .    b1   .    c1   .    d1   .    e1   .    f1   .    g1'
      's2   .    a2   .    b2   .    c2   .    d2   .    e2   .    f2   .    g2'
      's3   .    a3   .    b3   .    c3   .    d3   .    e3   .    f3   .    g3'
      's4   .    a4   .    b4   .    c4   .    d4   .    e4   .    f4   .    g4'
      'rule rule rule rule rule rule rule rule rule rule rule rule rule rule rule'
      'p0   .    a5   .    b5   .    c5   .    d5   .    e5   .    f5   .    g5'
      'p1   .    a6   .    b6   .    c6   .    d6   .    e6   .    f6   .    g6'
      'p2   .    a7   .    b7   .    c7   .    d7   .    e7   .    f7   .    g7'
      'p3   .    a8   .    b8   .    c8   .    d8   .    e8   .    f8   .    g8';
  }
}

.third-declension-vowel-short {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: fit-content;
  max-width: 100%;

  @media (width >= 48rem) {
    display: grid;
    gap: 0 0.5rem;
    grid-template:
      '.    .    h1   .    h2   h2   h2'
      's0   i0   a0   j0   b0   k0   c0'
      's1   .    a1   .    b1   .    c1'
      's2   .    a2   .    b2   .    c2'
      's3   .    a3   .    b3   .    c3'
      's4   .    a4   .    b4   .    c4'
      'rule rule rule rule rule rule rule'
      'p0   .    a5   .    b5   .    c5'
      'p1   .    a6   .    b6   .    c6'
      'p2   .    a7   .    b7   .    c7'
      'p3   .    a8   .    b8   .    c8';
  }

  @media (width >= 64rem) {
    display: contents;
  }
}

.third-declension-vowel-polis,
.third-declension-vowel-pukhus,
.third-declension-vowel-ikhthus,
.third-declension-vowel-diph {
  display: grid;
  width: fit-content;
  max-width: 100%;
  margin-inline: auto;
  gap: 0 0.5rem;
}

.third-declension-vowel-polis {
  grid-template:
    'h1   h1   h1'
    's0   i0   a0'
    's1   .    a1'
    's2   .    a2'
    's3   .    a3'
    's4   .    a4'
    'rule rule rule'
    'p0   .    a5'
    'p1   .    a6'
    'p2   .    a7'
    'p3   .    a8';

  @media (width >= 48rem) {
    display: contents;
  }
}

.third-declension-vowel-pukhus {
  grid-template:
    'h2    h2    h2'
    's20   j0    b0'
    's21   .     b1'
    's22   .     b2'
    's23   .     b3'
    's24   .     b4'
    'rule2 rule2 rule2'
    'p20   .     b5'
    'p21   .     b6'
    'p22   .     b7'
    'p23   .     b8'
    'gapbc gapbc gapbc'
    'h2b   h2b   h2b'
    's30   k0    c0'
    's31   .     c1'
    's32   .     c2'
    's33   .     c3'
    's34   .     c4'
    'rule3 rule3 rule3'
    'p30   .     c5'
    'p31   .     c6'
    'p32   .     c7'
    'p33   .     c8';

  @media (width >= 30em) {
    grid-template:
      '.     .    h2    h2    h2'
      's20   j0   b0    k0    c0'
      's21   .    b1    .     c1'
      's22   .    b2    .     c2'
      's23   .    b3    .     c3'
      's24   .    b4    .     c4'
      'rule2 rule2 rule2 rule2 rule2'
      'p20   .    b5    .     c5'
      'p21   .    b6    .     c6'
      'p22   .    b7    .     c7'
      'p23   .    b8    .     c8';
  }

  @media (width >= 48rem) {
    display: contents;
  }
}

.third-declension-vowel-ikhthus {
  grid-template:
    'h3    h3    h3'
    's40   l0    d0'
    's41   .     d1'
    's42   .     d2'
    's43   .     d3'
    's44   .     d4'
    'rule4 rule4 rule4'
    'p40   .     d5'
    'p41   .     d6'
    'p42   .     d7'
    'p43   .     d8'
    'gapde gapde gapde'
    'h4    h4    h4'
    's50   m0    e0'
    's51   .     e1'
    's52   .     e2'
    's53   .     e3'
    's54   .     e4'
    'rule5 rule5 rule5'
    'p50   .     e5'
    'p51   .     e6'
    'p52   .     e7'
    'p53   .     e8';

  @media (width >= 30em) {
    grid-template:
      '.     .    h3    .    h4'
      's40   l0   d0    m0   e0'
      's41   .    d1    .    e1'
      's42   .    d2    .    e2'
      's43   .    d3    .    e3'
      's44   .    d4    .    e4'
      'rule4 rule4 rule4 rule4 rule4'
      'p40   .    d5    .    e5'
      'p41   .    d6    .    e6'
      'p42   .    d7    .    e7'
      'p43   .    d8    .    e8';
  }

  @media (width >= 64rem) {
    display: contents;
  }
}

.third-declension-vowel-diph {
  grid-template:
    'h5    h5    h5'
    's60   n0    f0'
    's61   .     f1'
    's62   .     f2'
    's63   .     f3'
    's64   .     f4'
    'rule6 rule6 rule6'
    'p60   .     f5'
    'p61   .     f6'
    'p62   .     f7'
    'p63   .     f8'
    'gapfg gapfg gapfg'
    'h6    h6    h6'
    's70   o0    g0'
    's71   .     g1'
    's72   .     g2'
    's73   .     g3'
    's74   .     g4'
    'rule7 rule7 rule7'
    'p70   .     g5'
    'p71   .     g6'
    'p72   .     g7'
    'p73   .     g8';

  @media (width >= 30em) {
    grid-template:
      '.     .    h5    .    h6'
      's60   n0   f0    o0   g0'
      's61   .    f1    .    g1'
      's62   .    f2    .    g2'
      's63   .    f3    .    g3'
      's64   .    f4    .    g4'
      'rule6 rule6 rule6 rule6 rule6'
      'p60   .    f5    .    g5'
      'p61   .    f6    .    g6'
      'p62   .    f7    .    g7'
      'p63   .    f8    .    g8';
  }

  @media (width >= 64rem) {
    display: contents;
  }
}
</style>

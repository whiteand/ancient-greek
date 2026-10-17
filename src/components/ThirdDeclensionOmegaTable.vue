<template>
  <div
    class="third-declension-omega-grid mx-auto grid w-fit max-w-full gap-x-2 rounded border border-cyan-600 px-2 py-1 dark:border-cyan-400"
  >
    <div class="text-center font-bold [grid-area:h] min-[30em]:text-left">
      Основи на
      {{ ' ' }}
      <Gr class="text-cyan-600 dark:text-cyan-400" text="-ω" />
      {{ ' ' }}і
      {{ ' ' }}
      <Gr class="text-cyan-600 dark:text-cyan-400" text="-οι" />
    </div>

    <template v-for="set in LABEL_SETS" :key="set.pref">
      <div
        v-for="(x, i) in set.cases"
        :key="x"
        :style="{ gridArea: `${set.pref}${i}` }"
        :class="set.class"
      >
        {{ CASE_SHORTEN_NAME[x] }}
      </div>
    </template>

    <Gr class="text-right [grid-area:i0]" text="ἡ" />
    <Gr class="[grid-area:a0]" text="πειθ**ώ**" />
    <Gr class="[grid-area:a1]" text="πειθ**οῦς**" />
    <Gr class="[grid-area:a2]" text="πειθ**οῖ**" />
    <div class="[grid-area:a3]">= наз.</div>
    <Gr class="[grid-area:a4]" text="πειθ**οῖ**" />

    <Gr class="text-right [grid-area:j0]" text="ὁ" />
    <Gr class="[grid-area:b0]" text="ἥρω**ς**" />
    <Gr class="[grid-area:b1]" text="ἥρω**ος**" />
    <Gr class="[grid-area:b2]" text="ἥρω**ϊ**" />
    <Gr class="[grid-area:b3]" text="ἥρω**α**" />
    <div class="[grid-area:b4]">= наз.</div>

    <Gr class="text-right [grid-area:k0]" text="οἱ" />
    <Gr class="[grid-area:c0]" text="ἥρω**ες**" />
    <Gr class="[grid-area:c1]" text="ἡρώ**ων**" />
    <Gr class="[grid-area:c2]" text="ἥρω**σι**" />
    <Gr class="[grid-area:c3]" text="ἥρω**ας**" />
    <div class="[grid-area:c4]">= наз.</div>
  </div>
</template>

<script setup lang="ts">
import Gr from './GreekSpan.vue'
import { CASE_SHORTEN_NAME } from '@/components/cases.ts'
import { GREEK_CASES, type GreekCase } from '@/data/greekCase.ts'

type LabelSet = {
  pref: string
  cases: readonly GreekCase[]
  class: string
}

const LABEL_SETS: LabelSet[] = [
  { pref: 's', cases: GREEK_CASES, class: '' },
  { pref: 's2', cases: GREEK_CASES, class: 'min-[30em]:hidden' },
  { pref: 's3', cases: GREEK_CASES, class: 'min-[30em]:hidden' },
]
</script>

<style scoped lang="scss">
.third-declension-omega-grid {
  grid-template:
    'h    h    h'
    's0   i0   a0'
    's1   .    a1'
    's2   .    a2'
    's3   .    a3'
    's4   .    a4'
    's20  j0   b0'
    's21  .    b1'
    's22  .    b2'
    's23  .    b3'
    's24  .    b4'
    's30  k0   c0'
    's31  .    c1'
    's32  .    c2'
    's33  .    c3'
    's34  .    c4';

  @media (width >= 30em) {
    grid-template:
      'h   h   h   h   h   h   h'
      's0  i0  a0  j0  b0  k0  c0'
      's1  .   a1  .   b1  .   c1'
      's2  .   a2  .   b2  .   c2'
      's3  .   a3  .   b3  .   c3'
      's4  .   a4  .   b4  .   c4';
  }
}
</style>

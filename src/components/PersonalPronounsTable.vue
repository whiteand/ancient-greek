<template>
  <div class="personal-pronouns">
    <div class="personal-pronouns-p1">
      <div class="personal-pronouns-a">
        <div class="text-center whitespace-nowrap [grid-area:h1]">1-ша ос.</div>
        <div class="text-center font-bold whitespace-nowrap [grid-area:n1]">незворотні</div>
        <template v-for="set in LABELS_A" :key="set.pref">
          <div
            v-for="(x, i) in set.cases"
            :key="x"
            :style="{ gridArea: `${set.pref}${i}` }"
            :class="['whitespace-nowrap', set.class]"
          >
            {{ CASE_SHORTEN_NAME[x]
            }}<template v-if="i === 0">&nbsp;{{ NUMBER_SHORT_NAME[set.number] }}</template>
          </div>
        </template>
        <div class="[grid-area:a0]">
          <Gr text="ἐγώ" />
          {{ ' ' }}
          <em class="text-cyan-600 not-italic dark:text-cyan-400">я</em>
        </div>
        <Gr class="[grid-area:a1]" text="ἐμοῦ, μου" />
        <Gr class="[grid-area:a2]" text="ἐμοί, μοι" />
        <Gr class="[grid-area:a3]" text="ἐμέ, με" />
        <div class="[grid-area:a4]">
          <Gr text="ἡμεῖς" />
          {{ ' ' }}
          <em class="text-cyan-600 not-italic dark:text-cyan-400">ми</em>
        </div>
        <Gr class="[grid-area:a5]" text="ἡμῶν" />
        <Gr class="[grid-area:a6]" text="ἡμῖν" />
        <Gr class="[grid-area:a7]" text="ἡμᾶς" />
      </div>

      <div class="personal-pronouns-b">
        <div class="text-center font-bold whitespace-nowrap [grid-area:z1]">зворотні</div>
        <template v-for="set in LABELS_B" :key="set.pref">
          <div
            v-for="(x, i) in set.cases"
            :key="x"
            :style="{ gridArea: `${set.pref}${i}` }"
            :class="['whitespace-nowrap', set.class]"
          >
            {{ CASE_SHORTEN_NAME[x]
            }}<template v-if="i === 0">&nbsp;{{ NUMBER_SHORT_NAME[set.number] }}</template>
          </div>
        </template>
        <div class="[grid-area:b0]">–</div>
        <Gr class="[grid-area:b1]" text="ἐμαυτοῦ,-ῆς" />
        <Gr class="[grid-area:b2]" text="ἐμαυτῷ,-ῇ" />
        <Gr class="[grid-area:b3]" text="ἐμαυτόν,-ήν" />
        <div class="[grid-area:b4]">–</div>
        <Gr class="[grid-area:b5]" text="ἡμῶν αὐτῶν" />
        <Gr class="[grid-area:b6]" text="ἡμῖν αὐτοῖς,-αῖς" />
        <Gr class="[grid-area:b7]" text="ἡμᾶς αὐτούς,-ᾱ́ς" />
      </div>
    </div>

    <div class="personal-pronouns-p2">
      <div class="personal-pronouns-c">
        <div class="text-center whitespace-nowrap [grid-area:h2]">2-га ос.</div>
        <div class="text-center font-bold whitespace-nowrap [grid-area:n2]">незворотні</div>
        <template v-for="set in LABELS_C" :key="set.pref">
          <div
            v-for="(x, i) in set.cases"
            :key="x"
            :style="{ gridArea: `${set.pref}${i}` }"
            :class="['whitespace-nowrap', set.class]"
          >
            {{ CASE_SHORTEN_NAME[x]
            }}<template v-if="i === 0">&nbsp;{{ NUMBER_SHORT_NAME[set.number] }}</template>
          </div>
        </template>
        <div class="[grid-area:c0]">
          <Gr text="σύ" />
          {{ ' ' }}
          <em class="text-cyan-600 not-italic dark:text-cyan-400">ти</em>
        </div>
        <Gr class="[grid-area:c1]" text="σοῦ,σου" />
        <Gr class="[grid-area:c2]" text="σοί,σοι" />
        <Gr class="[grid-area:c3]" text="σέ, σε" />
        <div class="[grid-area:c4]">
          <Gr text="ὑμεῖς" />
          {{ ' ' }}
          <em class="text-cyan-600 not-italic dark:text-cyan-400">ви</em>
        </div>
        <Gr class="[grid-area:c5]" text="ὑμῶν" />
        <Gr class="[grid-area:c6]" text="ὑμῖν" />
        <Gr class="[grid-area:c7]" text="ὑμᾶς" />
      </div>

      <div class="personal-pronouns-d">
        <div class="text-center font-bold whitespace-nowrap [grid-area:z2]">зворотні</div>
        <template v-for="set in LABELS_D" :key="set.pref">
          <div
            v-for="(x, i) in set.cases"
            :key="x"
            :style="{ gridArea: `${set.pref}${i}` }"
            :class="['whitespace-nowrap', set.class]"
          >
            {{ CASE_SHORTEN_NAME[x]
            }}<template v-if="i === 0">&nbsp;{{ NUMBER_SHORT_NAME[set.number] }}</template>
          </div>
        </template>
        <div class="[grid-area:d0]">–</div>
        <Gr class="[grid-area:d1]" text="σεαυτοῦ,-ῆς" />
        <Gr class="[grid-area:d2]" text="σεαυτῷ,-ῇ" />
        <Gr class="[grid-area:d3]" text="σεαυτόν,-ήν" />
        <div class="[grid-area:d4]">–</div>
        <Gr class="[grid-area:d5]" text="ὑμῶν αὐτῶν" />
        <Gr class="[grid-area:d6]" text="ὑμῖν αὐτοῖς" />
        <Gr class="[grid-area:d7]" text="ὑμᾶς αὐτούς" />
      </div>
    </div>

    <div class="personal-pronouns-p3">
      <div class="personal-pronouns-e">
        <div class="text-center whitespace-nowrap [grid-area:h3]">3-тя ос.</div>
        <div class="text-center font-bold whitespace-nowrap [grid-area:z3]">зворотні</div>
        <template v-for="set in LABELS_E" :key="set.pref">
          <div
            v-for="(x, i) in set.cases"
            :key="x"
            :style="{ gridArea: `${set.pref}${i}` }"
            :class="['whitespace-nowrap', set.class]"
          >
            {{ CASE_SHORTEN_NAME[x]
            }}<template v-if="i === 0">&nbsp;{{ NUMBER_SHORT_NAME[set.number] }}</template>
          </div>
        </template>
        <div class="[grid-area:e0]">–</div>
        <Gr class="[grid-area:e1]" text="οὗ, οὑ" />
        <Gr class="[grid-area:e2]" text="οἷ, οἱ" />
        <Gr class="[grid-area:e3]" text="ἕ, ἑ" />
        <Gr class="[grid-area:e4]" text="σφεῖς" />
        <Gr class="[grid-area:e5]" text="σφῶν" />
        <Gr class="[grid-area:e6]" text="σφίσι" />
        <Gr class="[grid-area:e7]" text="σφᾶς" />
      </div>

      <div class="personal-pronouns-f">
        <template v-for="set in LABELS_F" :key="set.pref">
          <div
            v-for="(x, i) in set.cases"
            :key="x"
            :style="{ gridArea: `${set.pref}${i}` }"
            :class="['whitespace-nowrap', set.class]"
          >
            {{ CASE_SHORTEN_NAME[x]
            }}<template v-if="i === 0">&nbsp;{{ NUMBER_SHORT_NAME[set.number] }}</template>
          </div>
        </template>
        <div class="[grid-area:f1]">
          <Gr text="ἑαυτοῦ,-ῆς,-οῦ" />
          {{ ' ' }}
          <em class="text-cyan-600 not-italic dark:text-cyan-400">себе</em>
        </div>
        <Gr class="[grid-area:f2]" text="ἑαυτῷ,-ῇ,-ῷ" />
        <Gr class="[grid-area:f3]" text="ἑαυτόν,-ήν,-ό" />
        <div class="[grid-area:f4]">–</div>
        <Gr class="[grid-area:f5]" text="σφῶν αὐτῶν/ἑαυτῶν" />
        <Gr class="[grid-area:f6]" text="σφίσιν αὐτοῖς/ἑαυτοῖς,..." />
        <Gr class="[grid-area:f7]" text="σφᾶς αὐτούς/ἑαυτούς,..." />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Gr from './GreekSpan.vue'
import { CASE_SHORTEN_NAME, NUMBER_SHORT_NAME } from '@/components/cases.ts'
import type { GreekCase } from '@/data/greekCase.ts'
import type { TNumber } from '@/types'

type LabelSet = {
  pref: string
  number: TNumber
  cases: readonly GreekCase[]
  class: string
}

const PRONOUN_CASES = [
  'nominative',
  'genitive',
  'dative',
  'accusative',
] as const satisfies readonly GreekCase[]

const LABEL_SETS: LabelSet[] = [
  { pref: 's', number: 'singular', cases: PRONOUN_CASES, class: '' },
  { pref: 'p', number: 'plural', cases: PRONOUN_CASES, class: '' },
  { pref: 's2', number: 'singular', cases: PRONOUN_CASES, class: 'min-[30em]:hidden' },
  { pref: 'p2', number: 'plural', cases: PRONOUN_CASES, class: 'min-[30em]:hidden' },
  { pref: 's3', number: 'singular', cases: PRONOUN_CASES, class: 'lg:hidden' },
  { pref: 'p3', number: 'plural', cases: PRONOUN_CASES, class: 'lg:hidden' },
  { pref: 's4', number: 'singular', cases: PRONOUN_CASES, class: 'min-[30em]:hidden' },
  { pref: 'p4', number: 'plural', cases: PRONOUN_CASES, class: 'min-[30em]:hidden' },
  { pref: 's5', number: 'singular', cases: PRONOUN_CASES, class: 'lg:hidden' },
  { pref: 'p5', number: 'plural', cases: PRONOUN_CASES, class: 'lg:hidden' },
  { pref: 's6', number: 'singular', cases: PRONOUN_CASES, class: 'min-[30em]:hidden' },
  { pref: 'p6', number: 'plural', cases: PRONOUN_CASES, class: 'min-[30em]:hidden' },
]

const labels = (prefs: readonly string[]) => LABEL_SETS.filter((set) => prefs.includes(set.pref))

const LABELS_A = labels(['s', 'p'])
const LABELS_B = labels(['s2', 'p2'])
const LABELS_C = labels(['s3', 'p3'])
const LABELS_D = labels(['s4', 'p4'])
const LABELS_E = labels(['s5', 'p5'])
const LABELS_F = labels(['s6', 'p6'])
</script>

<style scoped lang="scss">
.personal-pronouns {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  width: fit-content;
  max-width: 100%;
  margin-inline: auto;

  @media (width >= 64rem) {
    display: grid;
    gap: 0 0.5rem;
    align-items: baseline;
    grid-template:
      '.  h1  .   h2  .   h3  .'
      '.  n1  z1  n2  z2  z3  .'
      's0 a0  b0  c0  d0  e0  f0'
      's1 a1  b1  c1  d1  e1  f1'
      's2 a2  b2  c2  d2  e2  f2'
      's3 a3  b3  c3  d3  e3  f3'
      'p0 a4  b4  c4  d4  e4  f4'
      'p1 a5  b5  c5  d5  e5  f5'
      'p2 a6  b6  c6  d6  e6  f6'
      'p3 a7  b7  c7  d7  e7  f7';
  }
}

.personal-pronouns-p1,
.personal-pronouns-p2,
.personal-pronouns-p3 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  width: fit-content;
  max-width: 100%;

  @media (width >= 30em) {
    display: grid;
    gap: 0 0.5rem;
    align-items: baseline;
  }

  @media (width >= 64rem) {
    display: contents;
  }
}

.personal-pronouns-p1 {
  @media (width >= 30em) {
    grid-template:
      '.   h1  .'
      '.   n1  z1'
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

.personal-pronouns-p2 {
  @media (width >= 30em) {
    grid-template:
      '.    h2   .'
      '.    n2   z2'
      's30  c0   d0'
      's31  c1   d1'
      's32  c2   d2'
      's33  c3   d3'
      'p30  c4   d4'
      'p31  c5   d5'
      'p32  c6   d6'
      'p33  c7   d7';
  }
}

.personal-pronouns-p3 {
  @media (width >= 30em) {
    grid-template:
      '.    h3   .'
      '.    z3   .'
      's50  e0   f0'
      's51  e1   f1'
      's52  e2   f2'
      's53  e3   f3'
      'p50  e4   f4'
      'p51  e5   f5'
      'p52  e6   f6'
      'p53  e7   f7';
  }
}

.personal-pronouns-a,
.personal-pronouns-b,
.personal-pronouns-c,
.personal-pronouns-d,
.personal-pronouns-e,
.personal-pronouns-f {
  display: grid;
  width: fit-content;
  max-width: 100%;
  column-gap: 0.5rem;
  align-items: baseline;

  @media (width >= 30em) {
    display: contents;
  }
}

.personal-pronouns-a {
  grid-template:
    'h1  h1'
    'n1  n1'
    's0  a0'
    's1  a1'
    's2  a2'
    's3  a3'
    'p0  a4'
    'p1  a5'
    'p2  a6'
    'p3  a7';
}

.personal-pronouns-b {
  grid-template:
    'z1   z1'
    's20  b0'
    's21  b1'
    's22  b2'
    's23  b3'
    'p20  b4'
    'p21  b5'
    'p22  b6'
    'p23  b7';
}

.personal-pronouns-c {
  grid-template:
    'h2   h2'
    'n2   n2'
    's30  c0'
    's31  c1'
    's32  c2'
    's33  c3'
    'p30  c4'
    'p31  c5'
    'p32  c6'
    'p33  c7';
}

.personal-pronouns-d {
  grid-template:
    'z2   z2'
    's40  d0'
    's41  d1'
    's42  d2'
    's43  d3'
    'p40  d4'
    'p41  d5'
    'p42  d6'
    'p43  d7';
}

.personal-pronouns-e {
  grid-template:
    'h3   h3'
    'z3   z3'
    's50  e0'
    's51  e1'
    's52  e2'
    's53  e3'
    'p50  e4'
    'p51  e5'
    'p52  e6'
    'p53  e7';
}

.personal-pronouns-f {
  grid-template:
    's60  f0'
    's61  f1'
    's62  f2'
    's63  f3'
    'p60  f4'
    'p61  f5'
    'p62  f6'
    'p63  f7';
}
</style>

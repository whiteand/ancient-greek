<template>
  <div
    :style="gridStyle"
    class="first-declension-grid grid grid-cols-[fit-content(100%)_repeat(10,fit-content(9%))] gap-x-2"
  >
    <div class="text-center [grid-area:a]">
      <Gr class="text-cyan-600 dark:text-cyan-300" text="ᾱ-" />основи
    </div>
    <div class="text-center [grid-area:b]">
      <Gr class="text-cyan-600 dark:text-cyan-300" text="ᾰ-" />основи
    </div>
    <div class="text-center [grid-area:c] min-[27rem]:text-left">
      <Gr text="ᾱ" /> чиста (після&nbsp;<Gr text="ε,&nbsp;ι,&nbsp;ρ" />)
    </div>
    <div class="text-center [grid-area:d] min-[27rem]:text-left">
      <Gr text="ᾱ" /> &gt; <Gr text="η" />
    </div>
    <div class="text-center [grid-area:e] min-[27rem]:text-left">чол.</div>
    <div class="text-center [grid-area:f] min-[27rem]:text-left"><Gr text="ᾱ" /> чиста</div>
    <div class="text-center [grid-area:g] min-[27rem]:text-left">
      <Gr text="ᾱ" /> &gt; <Gr text="η" />
    </div>
    <template v-for="[pref, additionalClass] in CASE_COLS_PREFS" :key="pref">
      <div :style="{ gridArea: `${pref}0` }" :class="additionalClass">
        {{ CASE_SHORTEN_NAME.nominative }}&nbsp;{{
          pref.startsWith('p') ? NUMBER_SHORT_NAME.plural : NUMBER_SHORT_NAME.singular
        }}
      </div>
      <template v-for="(x, i) in GREEK_CASES.slice(1, -1)" :key="x">
        <div :style="{ gridArea: `${pref}${i + 1}` }" :class="additionalClass">
          {{ CASE_SHORTEN_NAME[x] }}
        </div>
      </template>
    </template>
    <Gr class="[grid-area:i0]" text="ἡ" />
    <Gr class="[grid-area:i1]" text="τῆς" />
    <Gr class="[grid-area:i2]" text="τῇ" />
    <Gr class="[grid-area:i3]" text="τήν" />
    <Gr class="[grid-area:i4]" text="αἱ" />
    <Gr class="[grid-area:i5]" text="τῶν" />
    <Gr class="[grid-area:i6]" text="ταῖς" />
    <Gr class="[grid-area:i7]" text="τᾱ́ς" />

    <Gr class="[grid-area:a0]" text="χώρ**ᾱ**" />
    <Gr class="[grid-area:a1]" text="χώρ**ᾱς**" />
    <Gr class="[grid-area:a2]" text="χώρ**ᾱͅ**" />
    <Gr class="[grid-area:a3]" text="χώρ**ᾱν**" />
    <Gr class="[grid-area:a4]" text="χῶρ**αι**" />
    <Gr class="[grid-area:a5]" text="χωρ**ῶν**" />
    <Gr class="[grid-area:a6]" text="χώρ**αις**" />
    <Gr class="[grid-area:a7]" text="χώρ**ᾱς**" />

    <Gr class="[grid-area:j]" text="ἡ" />
    <Gr class="[grid-area:b0]" text="τῑμ**ή**" />
    <Gr class="[grid-area:b1]" text="τῑμ**ῆς**" />
    <Gr class="[grid-area:b2]" text="τῑμ**ῇ**" />
    <Gr class="[grid-area:b3]" text="τῑμ**ήν**" />
    <Gr class="[grid-area:b4]" text="τῑμ**αί**" />
    <Gr class="[grid-area:b5]" text="τῑμ**ῶν**" />
    <Gr class="[grid-area:b6]" text="τῑμ**αῖς**" />
    <Gr class="[grid-area:b7]" text="τῑμ**ᾱ́ς**" />

    <Gr class="[grid-area:k0]" text="ὁ" />
    <Gr class="[grid-area:k1]" text="οἱ" />

    <Gr class="[grid-area:c0]" text="ποιητ**ής**" />
    <Gr class="[grid-area:c1]" text="ποιητ**οῦ**" />
    <Gr class="[grid-area:c2]" text="ποιητ**ῇ**" />
    <Gr class="[grid-area:c3]" text="ποιητ**ήν**" />
    <Gr class="[grid-area:c4]" text="ποιητ**αί**" />
    <Gr class="[grid-area:c5]" text="ποιητ**ῶν**" />
    <Gr class="[grid-area:c6]" text="ποιητ**αῖς**" />
    <Gr class="[grid-area:c7]" text="ποιητ**ᾱ́ς**" />

    <Gr class="[grid-area:l]" text="ἡ" />

    <Gr class="[grid-area:d0]" text="σφαῖρ**ᾰ**" />
    <Gr class="[grid-area:d1]" text="σφαίρ**ᾱς**" />
    <Gr class="[grid-area:d2]" text="σφαίρ**ᾱͅ**" />
    <Gr class="[grid-area:d3]" text="σφαῖρ**ᾰν**" />
    <Gr class="[grid-area:d4]" text="σφαῖρ**αι**" />
    <Gr class="[grid-area:d5]" text="σφαιρ**ῶν**" />
    <Gr class="[grid-area:d6]" text="σφαίρ**αις**" />
    <Gr class="[grid-area:d7]" text="σφαίρ**ᾱς**" />

    <Gr class="[grid-area:m]" text="ἡ" />

    <Gr class="[grid-area:e0]" text="θάλαττ**ᾰ**" />
    <Gr class="[grid-area:e1]" text="θαλάττ**ης**" />
    <Gr class="[grid-area:e2]" text="θαλάττ**ῃ**" />
    <Gr class="[grid-area:e3]" text="θάλαττ**ᾰν**" />
    <Gr class="[grid-area:e4]" text="θάλαττ**αι**" />
    <Gr class="[grid-area:e5]" text="θαλαττ**ῶν**" />
    <Gr class="[grid-area:e6]" text="θαλάττ**αις**" />
    <Gr class="[grid-area:e7]" text="θαλάττ**ᾱς**" />
  </div>
</template>

<script setup lang="ts">
import Gr from './GreekSpan.vue'
import { CASE_SHORTEN_NAME, NUMBER_SHORT_NAME } from '@/components/cases.ts'
import { GREEK_CASES } from '@/data/greekCase.ts'
const CASE_COLS_PREFS: Array<[string, string]> = [
  ['f', ''],
  ['p', ''],
  ['f2', 'md:hidden'],
  ['p2', 'md:hidden'],
  ['f3', 'min-[27rem]:hidden'],
  ['p3', 'min-[27rem]:hidden'],
  ['f4', 'min-[27rem]:hidden'],
  ['p4', 'min-[27rem]:hidden'],
  ['f5', 'min-[27rem]:hidden'],
  ['p5', 'min-[27rem]:hidden'],
]
</script>

<style scoped lang="scss">
.first-declension-grid {
  grid-template:
    'a   a   a'
    'c   c   c'
    'f0  i0  a0'
    'f1  i1  a1'
    'f2  i2  a2'
    'f3  i3  a3'
    'p0  i4  a4'
    'p1  i5  a5'
    'p2  i6  a6'
    'p3  i7  a7'
    'd   d   d'
    'f30 j   b0'
    'f31 .   b1'
    'f32 .   b2'
    'f33 .   b3'
    'p30 .   b4'
    'p31 .   b5'
    'p32 .   b6'
    'p33 .   b7'
    'e   e   e'
    'f40 k0  c0'
    'f41 .   c1'
    'f42 .   c2'
    'f43 .   c3'
    'p40 k1  c4'
    'p41 .   c5'
    'p42 .   c6'
    'p43 .   c7'
    'b   b   b'
    'f   f  f '
    'f20 l  d0'
    'f21 .  d1'
    'f22 .  d2'
    'f23 .  d3'
    'p20 .  d4'
    'p21 .  d5'
    'p22 .  d6'
    'p23 .  d7'
    'g g  g'
    'f50 m  e0'
    'f51 .  e1'
    'f52 .  e2'
    'f53 .  e3'
    'p50 .  e4'
    'p51 .  e5'
    'p52 .  e6'
    'p53 .  e7';
  @media (width >= 27rem) {
    grid-template:
      'a   a   a   a  a   a   a '
      'c   c   c   .  d   .   e '
      'f0  i0  a0  j  b0  k0  c0'
      'f1  i1  a1  .  b1  .   c1'
      'f2  i2  a2  .  b2  .   c2'
      'f3  i3  a3  .  b3  .   c3'
      'p0  i4  a4  .  b4  k1  c4'
      'p1  i5  a5  .  b5  .   c5'
      'p2  i6  a6  .  b6  .   c6'
      'p3  i7  a7  .  b7  .   c7'
      '.   b  b   b  b . .'
      '.   .  f   .  g . .'
      'f20 l  d0  m  e0 . .'
      'f21 .  d1  .  e1 . .'
      'f22 .  d2  .  e2 . .'
      'f23 .  d3  .  e3 . .'
      'p20 .  d4  .  e4 . .'
      'p21 .  d5  .  e5 . .'
      'p22 .  d6  .  e6 . .'
      'p23 .  d7  .  e7 . .';
  }

  @media (width >= 48rem) {
    grid-template:
      'a   a   a   a  a   a   a   b  b   b  b'
      'c   c   c   .  d   .   e   .  f   .  g'
      'f0  i0  a0  j  b0  k0  c0  l  d0  m  e0'
      'f1  i1  a1  .  b1  .   c1  .  d1  .  e1'
      'f2  i2  a2  .  b2  .   c2  .  d2  .  e2'
      'f3  i3  a3  .  b3  .   c3  .  d3  .  e3'
      'p0  i4  a4  .  b4  k1  c4  .  d4  .  e4'
      'p1  i5  a5  .  b5  .   c5  .  d5  .  e5'
      'p2  i6  a6  .  b6  .   c6  .  d6  .  e6'
      'p3  i7  a7  .  b7  .   c7  .  d7  .  e7';
  }
}
</style>

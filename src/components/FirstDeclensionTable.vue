<template>
  <div :style="gridStyle">
    <div class="[grid-area:a]"><Gr class="text-cyan-600 dark:text-cyan-300" text="ᾱ-" />основи</div>
    <div class="[grid-area:b]"><Gr class="text-cyan-600 dark:text-cyan-300" text="ᾰ-" />основи</div>
    <div class="[grid-area:c]"><Gr text="ᾱ" /> чиста (якщо перед нею <Gr text="ε, ι, ρ" />)</div>
    <div class="[grid-area:d]"><Gr text="ᾱ" /> &gt; <Gr text="η" /></div>
    <div class="[grid-area:e]">чол.</div>
    <div class="[grid-area:f]"><Gr text="ᾱ" /> чиста</div>
    <div class="[grid-area:g]"><Gr text="ᾱ" /> &gt; <Gr text="η" /></div>
    <div v-for="(x, i) in GREEK_CASES.slice(0, -1)" :key="x" :style="{ gridArea: `f${i}` }">
      {{ CASE_FULL_NAME[x] }}
    </div>
    <div v-for="(x, i) in GREEK_CASES.slice(0, -1)" :key="x" :style="{ gridArea: `p${i}` }">
      {{ CASE_SHORT_NAME[x] }}
    </div>
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
import { type StyleValue } from 'vue'
import Gr from './GreekSpan.vue'
import { CASE_FULL_NAME, CASE_SHORT_NAME } from '@/components/cases.ts'
import { GREEK_CASES } from '@/data/greekCase.ts'

const gridStyle: StyleValue = {
  display: 'grid',
  gridTemplate: `
"a   a   a   a  a   a   a   b  b   b  b"
"c   c   c   .  d   .   e   .  f   .  g"
"f0  i0  a0  j  b0  k0  c0  l  d0  m  e0"
"f1  i1  a1  .  b1  .   c1  .  d1  .  e1"
"f2  i2  a2  .  b2  .   c2  .  d2  .  e2"
"f3  i3  a3  .  b3  .   c3  .  d3  .  e3"
"p0  i4  a4  .  b4  k1  c4  .  d4  .  e4"
"p1  i5  a5  .  b5  .   c5  .  d5  .  e5"
"p2  i6  a6  .  b6  .   c6  .  d6  .  e6"
"p3  i7  a7  .  b7  .   c7  .  d7  .  e7"

`.trim(),
  gridTemplateColumns: 'fit-content(100%) repeat(10, fit-content(9%))',
  columnGap: '0.5em',
}
</script>

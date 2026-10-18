<template>
  <div
    class="suppletive-adjective-comparison mx-auto grid w-fit max-w-full items-baseline gap-x-2 gap-y-1"
  >
    <div class="h-3 [grid-area:z0] lg:hidden" />
    <div class="h-3 [grid-area:z1] lg:hidden" />
    <div class="hidden w-4 [grid-area:m] lg:block" />

    <Gr class="whitespace-nowrap [grid-area:p0]" text="ἀγαθός" />
    <Gr class="whitespace-nowrap [grid-area:c0]" text="ἀμείνων, ἄμεινον" />
    <em class="[grid-area:g0]">здібніший</em>
    <Gr class="whitespace-nowrap [grid-area:s0]" text="ἄριστος" />
    <Gr class="whitespace-nowrap [grid-area:d0]" text="βελτῑ́ων, βέλτῑον" />
    <em class="[grid-area:h0]">кращий</em>
    <Gr class="whitespace-nowrap [grid-area:r0]" text="βέλτιστος" />

    <Gr class="whitespace-nowrap [grid-area:c1]" text="κρείττων, κρεῖττον" />
    <em class="[grid-area:g1]">сильніший</em>
    <Gr class="whitespace-nowrap [grid-area:s1]" text="κράτιστος" />
    <Gr class="whitespace-nowrap [grid-area:d1]" text="λῷων, λῷον" />
    <em class="[grid-area:h1]">корисніший</em>
    <Gr class="whitespace-nowrap [grid-area:r1]" text="λῷστος" />

    <Gr class="whitespace-nowrap [grid-area:p2]" text="κακός" />
    <Gr class="whitespace-nowrap [grid-area:c2]" text="χείρων, χεῖρον" />
    <em class="[grid-area:g2]">гірший</em>
    <Gr class="whitespace-nowrap [grid-area:s2]" text="χείριστος" />
    <Gr class="whitespace-nowrap [grid-area:d2]" text="ἥττων, ἧττον" />
    <em class="[grid-area:h2]">слабший</em>
    <div class="whitespace-nowrap [grid-area:r2]"><Gr text="ἥκιστα" /> (присл.)</div>

    <Gr class="whitespace-nowrap [grid-area:c3]" text="κακῑ́ων, κάκῑον" />
    <em class="[grid-area:g3]">гірший</em>
    <Gr class="whitespace-nowrap [grid-area:s3]" text="κάκιστος" />

    <Gr class="whitespace-nowrap [grid-area:p4]" text="μῑκρός" />
    <Gr class="whitespace-nowrap [grid-area:c4]" text="ἐλᾱ́ττων, ἔλᾱττον" />
    <em class="[grid-area:g4]">менший</em>
    <Gr class="whitespace-nowrap [grid-area:s4]" text="ἐλάχιστος" />
    <Gr class="whitespace-nowrap [grid-area:d4]" text="μείων, μεῖον" />
    <em class="[grid-area:h4]">кількісно слабший</em>

    <Gr class="whitespace-nowrap [grid-area:c5]" text="μῑκρότερος,-ᾱ, -ον" />
    <em class="[grid-area:g5]">менший</em>
    <Gr class="whitespace-nowrap [grid-area:s5]" text="μῑκρότατος" />
  </div>
</template>

<script setup lang="ts">
import Gr from './GreekSpan.vue'
</script>

<style scoped lang="scss">
.suppletive-adjective-comparison {
  grid-template:
    'p0'
    'c0'
    'g0'
    's0'
    'c1'
    'g1'
    's1'
    'd0'
    'h0'
    'r0'
    'd1'
    'h1'
    'r1'
    'z0'
    'p2'
    'c2'
    'g2'
    's2'
    'c3'
    'g3'
    's3'
    'd2'
    'h2'
    'r2'
    'z1'
    'p4'
    'c4'
    'g4'
    's4'
    'c5'
    'g5'
    's5'
    'd4'
    'h4';

  @media (width >= 30em) {
    grid-template:
      'p0 p0'
      'c0 s0'
      'g0 g0'
      'c1 s1'
      'g1 g1'
      'd0 r0'
      'h0 h0'
      'd1 r1'
      'h1 h1'
      'z0 z0'
      'p2 p2'
      'c2 s2'
      'g2 g2'
      'c3 s3'
      'g3 g3'
      'd2 r2'
      'h2 h2'
      'z1 z1'
      'p4 p4'
      'c4 s4'
      'g4 g4'
      'c5 s5'
      'g5 g5'
      'd4 d4'
      'h4 h4';
  }

  @media (width >= 48rem) {
    grid-template:
      'p0 c0 g0 s0'
      '.  c1 g1 s1'
      '.  d0 h0 r0'
      '.  d1 h1 r1'
      'z0 z0 z0 z0'
      'p2 c2 g2 s2'
      '.  c3 g3 s3'
      '.  d2 h2 r2'
      'z1 z1 z1 z1'
      'p4 c4 g4 s4'
      '.  c5 g5 s5'
      '.  d4 h4 .';
  }

  @media (width >= 64rem) {
    grid-template:
      'p0 c0 g0 s0 m d0 h0 r0'
      '.  c1 g1 s1 m d1 h1 r1'
      'p2 c2 g2 s2 m d2 h2 r2'
      '.  c3 g3 s3 m .  .  .'
      'p4 c4 g4 s4 m d4 h4 .'
      '.  c5 g5 s5 m .  .  .';
  }
}
</style>

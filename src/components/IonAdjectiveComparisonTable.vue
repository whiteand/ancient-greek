<template>
  <div
    class="ion-adjective-comparison mx-auto grid w-fit max-w-full items-baseline gap-x-2 gap-y-1"
  >
    <div class="h-2 [grid-area:z0] min-[30em]:hidden" />
    <div class="h-2 [grid-area:z1] min-[30em]:hidden" />
    <div class="h-2 [grid-area:z2] min-[30em]:hidden" />
    <div class="h-2 [grid-area:y0] min-[30em]:hidden" />
    <div class="h-2 [grid-area:y1] min-[30em]:hidden" />
    <div class="h-2 [grid-area:y2] min-[30em]:hidden" />
    <div class="h-3 [grid-area:k] lg:hidden" />
    <div class="hidden w-4 [grid-area:m] lg:block" />

    <Gr class="whitespace-nowrap [grid-area:a0]" text="ἐχθρός" />
    <em class="[grid-area:g0]">ворожий</em>
    <div class="[grid-area:t0]">~</div>
    <Gr class="whitespace-nowrap [grid-area:c0]" text="ἐχθῑ́ων, ἔχθῑον" />
    <div class="[grid-area:u0]">~</div>
    <Gr class="whitespace-nowrap [grid-area:s0]" text="ἔχθιστος" />

    <Gr class="whitespace-nowrap [grid-area:a1]" text="ταχύς" />
    <em class="[grid-area:g1]">швидкий</em>
    <div class="[grid-area:t1]">~</div>
    <Gr class="whitespace-nowrap [grid-area:c1]" text="θᾱ́ττων, θᾶττον" />
    <div class="[grid-area:u1]">~</div>
    <Gr class="whitespace-nowrap [grid-area:s1]" text="τάχιστος;" />

    <Gr class="whitespace-nowrap [grid-area:a2]" text="καλός" />
    <em class="[grid-area:g2]">красивий</em>
    <div class="[grid-area:t2]">~</div>
    <Gr class="whitespace-nowrap [grid-area:c2]" text="καλλῑ́ων, κάλλῑον" />
    <div class="[grid-area:u2]">~</div>
    <Gr class="whitespace-nowrap [grid-area:s2]" text="κάλλιστος" />

    <Gr class="whitespace-nowrap [grid-area:a3]" text="αἰσχρός" />
    <em class="[grid-area:g3]">потворний</em>
    <div class="[grid-area:t3]">~</div>
    <Gr class="whitespace-nowrap [grid-area:c3]" text="αἰσχῑ́ων, αἴσχῑον" />
    <div class="[grid-area:u3]">~</div>
    <Gr class="whitespace-nowrap [grid-area:s3]" text="αἴσχιστος" />

    <Gr class="whitespace-nowrap [grid-area:b0]" text="ῥᾴδιος" />
    <em class="[grid-area:h0]">легкий</em>
    <div class="[grid-area:v0]">~</div>
    <Gr class="whitespace-nowrap [grid-area:d0]" text="ῥᾴων, ῥᾷον" />
    <div class="[grid-area:w0]">~</div>
    <Gr class="whitespace-nowrap [grid-area:r0]" text="ῥᾷστος" />

    <Gr class="whitespace-nowrap [grid-area:b1]" text="μέγας" />
    <em class="[grid-area:h1]">великий</em>
    <div class="[grid-area:v1]">~</div>
    <Gr class="whitespace-nowrap [grid-area:d1]" text="μείζων, μεῖζον" />
    <div class="[grid-area:w1]">~</div>
    <Gr class="whitespace-nowrap [grid-area:r1]" text="μέγιστος" />

    <Gr class="whitespace-nowrap [grid-area:b2]" text="πολύς" />
    <em class="[grid-area:h2]">многий</em>
    <div class="[grid-area:v2]">~</div>
    <Gr class="whitespace-nowrap [grid-area:d2]" text="πλείων, πλέον" />
    <div class="[grid-area:w2]">~</div>
    <Gr class="whitespace-nowrap [grid-area:r2]" text="πλεῖστος" />

    <Gr class="whitespace-nowrap [grid-area:b3]" text="ἡδύς" />
    <em class="[grid-area:h3]">приємний</em>
    <div class="[grid-area:v3]">~</div>
    <Gr class="whitespace-nowrap [grid-area:d3]" text="ἡδῑ́ων, ἥδῑον" />
    <div class="[grid-area:w3]">~</div>
    <Gr class="whitespace-nowrap [grid-area:r3]" text="ἥδιστος" />
  </div>
</template>

<script setup lang="ts">
import Gr from './GreekSpan.vue'
</script>

<style scoped lang="scss">
.ion-adjective-comparison {
  grid-template:
    'a0 g0'
    't0 c0'
    'u0 s0'
    'z0 z0'
    'a1 g1'
    't1 c1'
    'u1 s1'
    'z1 z1'
    'a2 g2'
    't2 c2'
    'u2 s2'
    'z2 z2'
    'a3 g3'
    't3 c3'
    'u3 s3'
    'k  k'
    'b0 h0'
    'v0 d0'
    'w0 r0'
    'y0 y0'
    'b1 h1'
    'v1 d1'
    'w1 r1'
    'y1 y1'
    'b2 h2'
    'v2 d2'
    'w2 r2'
    'y2 y2'
    'b3 h3'
    'v3 d3'
    'w3 r3';

  @media (width >= 30em) {
    grid-template:
      'a0 g0 t0 c0'
      'u0 s0 .  .'
      'a1 g1 t1 c1'
      'u1 s1 .  .'
      'a2 g2 t2 c2'
      'u2 s2 .  .'
      'a3 g3 t3 c3'
      'u3 s3 .  .'
      'k  k  k  k'
      'b0 h0 v0 d0'
      'w0 r0 .  .'
      'b1 h1 v1 d1'
      'w1 r1 .  .'
      'b2 h2 v2 d2'
      'w2 r2 .  .'
      'b3 h3 v3 d3'
      'w3 r3 .  .';
  }

  @media (width >= 48rem) {
    grid-template:
      'a0 g0 t0 c0 u0 s0'
      'a1 g1 t1 c1 u1 s1'
      'a2 g2 t2 c2 u2 s2'
      'a3 g3 t3 c3 u3 s3'
      'k  k  k  k  k  k'
      'b0 h0 v0 d0 w0 r0'
      'b1 h1 v1 d1 w1 r1'
      'b2 h2 v2 d2 w2 r2'
      'b3 h3 v3 d3 w3 r3';
  }

  @media (width >= 64rem) {
    grid-template:
      'a0 g0 t0 c0 u0 s0 m b0 h0 v0 d0 w0 r0'
      'a1 g1 t1 c1 u1 s1 m b1 h1 v1 d1 w1 r1'
      'a2 g2 t2 c2 u2 s2 m b2 h2 v2 d2 w2 r2'
      'a3 g3 t3 c3 u3 s3 m b3 h3 v3 d3 w3 r3';
  }
}
</style>

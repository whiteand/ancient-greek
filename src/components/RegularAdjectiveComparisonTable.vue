<template>
  <div
    class="regular-adjective-comparison mx-auto grid w-fit max-w-full items-baseline gap-x-2 gap-y-1"
  >
    <div class="h-2 [grid-area:z0] md:hidden" />
    <div class="h-2 [grid-area:z1] md:hidden" />
    <div class="h-2 [grid-area:z2] md:hidden" />

    <Gr class="whitespace-nowrap [grid-area:a0]" text="δίκαιος" />
    <em class="[grid-area:g0]">справедливий</em>
    <Gr class="whitespace-nowrap [grid-area:s0]" text="δικαιο-" />
    <Gr class="whitespace-nowrap [grid-area:c0]" text="δικαιότερος" />
    <Gr class="whitespace-nowrap [grid-area:u0]" text="δικαιότατος" />

    <Gr class="whitespace-nowrap [grid-area:a1]" text="μέλᾱς" />
    <em class="[grid-area:g1]">чорний</em>
    <Gr class="whitespace-nowrap [grid-area:s1]" text="μελαν-" />
    <Gr class="whitespace-nowrap [grid-area:c1]" text="μελάντερος" />
    <Gr class="whitespace-nowrap [grid-area:u1]" text="μελάντατος" />

    <Gr class="whitespace-nowrap [grid-area:a2]" text="σαφής" />
    <em class="[grid-area:g2]">ясний</em>
    <Gr class="whitespace-nowrap [grid-area:s2]" text="σαφεσ-" />
    <Gr class="whitespace-nowrap [grid-area:c2]" text="σαφέστερος" />
    <Gr class="whitespace-nowrap [grid-area:u2]" text="σαφέστατος" />

    <Gr class="whitespace-nowrap [grid-area:a3]" text="βραχύς" />
    <em class="[grid-area:g3]">короткий</em>
    <Gr class="whitespace-nowrap [grid-area:s3]" text="βραχυ-" />
    <Gr class="whitespace-nowrap [grid-area:c3]" text="βραχύτερος" />
    <Gr class="whitespace-nowrap [grid-area:u3]" text="βραχύτατος" />
  </div>
</template>

<script setup lang="ts">
import Gr from './GreekSpan.vue'
</script>

<style scoped lang="scss">
.regular-adjective-comparison {
  grid-template:
    'a0 g0'
    's0 s0'
    'c0 c0'
    'u0 u0'
    'z0 z0'
    'a1 g1'
    's1 s1'
    'c1 c1'
    'u1 u1'
    'z1 z1'
    'a2 g2'
    's2 s2'
    'c2 c2'
    'u2 u2'
    'z2 z2'
    'a3 g3'
    's3 s3'
    'c3 c3'
    'u3 u3';

  @media (width >= 30em) {
    grid-template:
      'a0 g0 .'
      's0 c0 u0'
      'z0 z0 z0'
      'a1 g1 .'
      's1 c1 u1'
      'z1 z1 z1'
      'a2 g2 .'
      's2 c2 u2'
      'z2 z2 z2'
      'a3 g3 .'
      's3 c3 u3';
  }

  @media (width >= 48rem) {
    grid-template:
      'a0 g0 s0 c0 u0'
      'a1 g1 s1 c1 u1'
      'a2 g2 s2 c2 u2'
      'a3 g3 s3 c3 u3';
  }
}
</style>

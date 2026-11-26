<template>
  <div class="adverb-degree-formation grid w-full max-w-full items-baseline gap-x-2 gap-y-1">
    <div class="whitespace-nowrap [grid-area:c0]">вищий ступінь</div>
    <div class="[grid-area:e0]">=</div>
    <div class="min-w-0 [grid-area:d0]">
      зн. одн. сер. вищого ступеня прикметника (закінчення {{ ' ' }}<Gr text="**-ον**" />):
      {{ ' ' }}
      <span class="whitespace-nowrap">
        <Gr class="whitespace-nowrap" text="δικαιότερ**ον**," /> {{ ' ' }}
        <Gr class="whitespace-nowrap" text="ἥδῑ**ον**" />
      </span>
    </div>
    <div class="whitespace-nowrap [grid-area:c1]">найвищий ступінь</div>
    <div class="[grid-area:e1]">=</div>
    <div class="min-w-0 [grid-area:d1]">
      зн. мн. сер. найвищого ступеня прикметника (закінчення {{ ' ' }}<Gr text="**-τα**" />):
      {{ ' ' }}
      <span class="whitespace-nowrap">
        <Gr class="whitespace-nowrap" text="δικαιότα**τα**," /> {{ ' ' }}
        <Gr class="whitespace-nowrap" text="ἥδισ**τα**" />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import Gr from './GreekSpan.vue'
</script>

<style scoped lang="scss">
.adverb-degree-formation {
  grid-template:
    'c0 e0'
    'd0 d0'
    'c1 e1'
    'd1 d1';
  grid-template-columns: auto minmax(0, 1fr);

  @media (width >= 30em) {
    grid-template:
      'c0 e0 d0'
      'c1 e1 d1';
    grid-template-columns: auto auto minmax(0, 1fr);
  }
}
</style>

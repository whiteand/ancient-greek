<template>
  <div
    class="adverb-formation-examples grid w-full max-w-full items-baseline gap-x-6 gap-y-1 lg:w-fit"
  >
    <Gr class="whitespace-nowrap [grid-area:a0]" text="δικαί**ως**" />
    <div class="min-w-0 [grid-area:b0]">
      прикм. {{ ' ' }}<Gr text="δίκαιος" />{{ ' ' }}(род. мн. {{ ' ' }}<Gr text="δικαίων" />)
    </div>
    <div class="hidden [grid-area:g] lg:block" />
    <Gr class="whitespace-nowrap [grid-area:a1]" text="ἡδέ**ως**" />
    <div class="min-w-0 [grid-area:b1]">
      прикм. {{ ' ' }}<Gr text="ἡδύς" />{{ ' ' }}(род. мн. {{ ' ' }}<Gr text="ἡδέων" />)
    </div>
  </div>
</template>

<script setup lang="ts">
import Gr from './GreekSpan.vue'
</script>

<style scoped lang="scss">
.adverb-formation-examples {
  grid-template:
    'a0'
    'b0'
    'a1'
    'b1' / minmax(0, 1fr);

  @media (width >= 25rem) {
    grid-template:
      'a0 b0'
      'a1 b1' / auto minmax(0, 1fr);
  }

  @media (width >= 64rem) {
    grid-template: 'a0 b0 g a1 b1' / auto auto 3rem auto auto;
  }
}
</style>

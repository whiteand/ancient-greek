<template>
  <p>
    Прислівники, утворені від прикметників, закінчуються на {{ ' ' }}
    <Gr text="**-ως**" />
    {{ ' ' }}і формою (крім останнього приголосного) та наголосом відповідають род. мн. чол.
    відповідного прикметника:
  </p>
  <AdverbFormationExamples />
  <SectionSubheader id="adverbs-comparison">Ступенювання прислівників</SectionSubheader>
  <AdverbDegreeFormation />
</template>

<script setup lang="ts">
import Gr from './GreekSpan.vue'
import SectionSubheader from './SectionSubheader.vue'
import AdverbFormationExamples from './AdverbFormationExamples.vue'
import AdverbDegreeFormation from './AdverbDegreeFormation.vue'
</script>

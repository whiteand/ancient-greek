<template>
  <p>
    Прислівники, утворені від прикметників, закінчуються на {{ ' ' }}
    <Gr text="**-ως**" />
    {{ ' ' }}і формою (крім останнього приголосного) та наголосом відповідають род. мн. чол.
    вихідного прикметника:
  </p>
  <AdverbFormationExamples />
  <p>
    Так утворюються прислівники способу дії. Деякі прислівники від прикметників мають іншу форму:
    <Gr text="εὖ" /> {{ ' ' }}<em>добре</em> (від <Gr text="ἀγαθός" />), <Gr text="πολύ" /> {{ ' '
    }}<em>багато</em> (зн. одн. сер.).
  </p>
  <SectionSubheader id="adverbs-comparison">Ступенювання прислівників</SectionSubheader>
  <AdverbDegreeFormation />
  <p>
    Винятки: прислівники місця на <Gr text="-ω" /> зберігають <Gr text="-ω" /> і у ступенях (<Gr
      text="ἄνω"
    />
    {{ ' ' }}<em>вгорі</em>, <Gr text="ἀνωτέρω" />, <Gr text="ἀνωτάτω" />); зрідка вищий ступінь має
    <Gr text="-ως" /> (<Gr text="ἀσφαλεστέρως" /> поряд з <Gr text="ἀσφαλέστερον" /> {{ ' '
    }}<em>надійніше</em>).
  </p>
</template>

<script setup lang="ts">
import Gr from './GreekSpan.vue'
import SectionSubheader from './SectionSubheader.vue'
import AdverbFormationExamples from './AdverbFormationExamples.vue'
import AdverbDegreeFormation from './AdverbDegreeFormation.vue'
</script>

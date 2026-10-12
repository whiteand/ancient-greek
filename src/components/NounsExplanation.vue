<template>
  <p>
    Кл. = наз. (якщо не зазначено інакше); кольором позначено закінчення, а не історичні суфікси.
  </p>
  <SectionSubheader id="first-declension">
    I відміна (так звані <Gr text="**ᾱ-**" highlight-class="text-cyan-600 dark:text-cyan-400" />/
    <Gr text="**ᾰ-**" highlight-class="text-cyan-600 dark:text-cyan-400" />основи)
  </SectionSubheader>
  <FirstDeclensionTable />

  <p>
    Крім іменників жін. роду, до <Gr text="ᾱ" />-основ I відміни належать і іменники чол. роду: вони
    мають у наз. одн. закінчення -<Gr text="ᾱς" /> /-<Gr text="ης" />; у род. одн. -<Gr text="ου" />
    а в кл. одн. -<Gr text="ᾱ" /> (у іменниках на -<Gr text="ᾱς" />), -<Gr text="η" /> (у іменниках
    на -<Gr text="ης" />) та -<Gr text="ᾰ" /> (у іменниках на -<Gr text="της" />:
    <Gr text="ὦ ποιητά" />); інші відмінки збігаються з відповідними зразками жін. роду.
  </p>

  <p>Стягнені іменники: <Gr text="ἡ Ἀθηνᾶ, Ἀθηνᾶς, Ἀθηνᾷ, Ἀθηνᾶν; ἡ γῆ, γῆς, γῇ, γῆν." /></p>
</template>

<script setup lang="ts">
import Gr from './GreekSpan.vue'
import SectionSubheader from './SectionSubheader.vue'
import FirstDeclensionTable from './FirstDeclensionTable.vue'
</script>

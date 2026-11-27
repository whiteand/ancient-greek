<template>
  <SectionSubheader id="pronouns-personal">Особові займенники</SectionSubheader>
  <PersonalPronounsTable />
  <ul class="list-disc pl-5">
    <li>
      Форми <strong>3-ї ос.</strong> є <strong>зворотними</strong>; замість незворотних займенників
      уживається неемфатичний займенник {{ ' ' }}
      <Gr text="αὐτός, -ή, -όν" />
      {{ ' ' }}і емфатичний {{ ' ' }}
      <Gr text="ἐκεῖνος, -η, -ο" />
      {{ ' ' }}чи {{ ' ' }}
      <Gr text="οὗτος, αὕτη, τοῦτο" />
      {{ ' ' }}(див. вказівні займенники).
    </li>
    <li>
      Замість форм {{ ' ' }}
      <Gr text="σεαυτόν, ἑαυτόν" />
      {{ ' ' }}тощо вживаються також форми {{ ' ' }}
      <Gr text="σαυτόν, αὑτόν" />
      {{ ' ' }}тощо.
    </li>
    <li>
      Приклад: {{ ' ' }}
      <Gr text="λέγω περὶ σοῦ" />
      {{ ' ' }}
      <em>кажу про тебе</em>, але {{ ' ' }}
      <Gr text="λέγεις περὶ σαυτοῦ" />
      {{ ' ' }}
      <em>кажеш про себе</em>. Форми з наголосом непрямих відмінків в одн. ставляться після
      прийменників і при підкресленні.
    </li>
  </ul>
</template>

<script setup lang="ts">
import Gr from './GreekSpan.vue'
import SectionSubheader from './SectionSubheader.vue'
import PersonalPronounsTable from './PersonalPronounsTable.vue'
</script>

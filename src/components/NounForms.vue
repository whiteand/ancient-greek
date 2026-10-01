<script setup lang="ts">
import { CASE_SHORT_NAME, CASE_TEXT_CLASS } from '@/components/cases.ts'
import { useTitle } from '@/composables/useTitle.js'
import { GREEK_CASES, type GreekCase, type NounForm, type NounFormTable } from '@/data/content.js'
import type { TDeclension, TGender, TNumber } from '@/types'
import { toRef } from 'vue'
import TextWithHighlights from './TextWithHighlights.vue'

const props = defineProps<{
  w: number
  h: number
  table: NounFormTable
}>()

const DECLENSION_NAME: Record<TDeclension, string> = {
  1: 'I відміна',
  2: 'II відміна',
  3: 'III відміна',
}

const GENDER_NAME: Record<TGender, string> = {
  masculine: 'чоловічий рід',
  feminine: 'жіночий рід',
  neuter: 'середній рід',
}

const NUMBER_NAME: Record<TNumber, string> = {
  singular: 'Однина',
  plural: 'Множина',
}

function getForm(greekCase: GreekCase, number: TNumber): NounForm {
  return props.table.forms.find((p) => p.case === greekCase && p.number === number)!
}

const title = useTitle({
  w: toRef(props, 'w'),
  titles: toRef(props.table, 'titles'),
})
</script>

<template>
  <div>
    <h3 class="px-2">{{ title }}</h3>
    <div class="px-2 text-xs">
      {{ DECLENSION_NAME[table.declension] }}, {{ GENDER_NAME[table.gender] }}
    </div>
    <table class="w-full">
      <thead>
        <tr>
          <th></th>
          <th>
            <em>{{ NUMBER_NAME.singular }}</em>
          </th>
          <th>
            <em>{{ NUMBER_NAME.plural }}</em>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="greekCase in GREEK_CASES" :key="greekCase">
          <td>
            <span :class="CASE_TEXT_CLASS[greekCase]">{{ CASE_SHORT_NAME[greekCase] }}</span>
          </td>
          <td>
            <TextWithHighlights
              :highlights="getForm(greekCase, 'singular').highlights"
              :text="getForm(greekCase, 'singular').text"
              :highlight-class="CASE_TEXT_CLASS[greekCase]"
            />
          </td>
          <td>
            <TextWithHighlights
              :highlights="getForm(greekCase, 'plural').highlights"
              :text="getForm(greekCase, 'plural').text"
              :highlight-class="CASE_TEXT_CLASS[greekCase]"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="css" scoped>
em {
  color: #333;
}

@media (prefers-color-scheme: dark) {
  em {
    color: #aaa;
  }
}

td,
th {
  padding: 0 10px;
  text-align: left;
  font-weight: normal;
}

table {
  width: 100%;
}
</style>

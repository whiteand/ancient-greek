<script setup lang="ts">
import { CASE_SHORT_NAME, CASE_TEXT_CLASS, GENDER_SHORT_NAME } from '@/components/cases.ts'
import { useTitle } from '@/composables/useTitle.js'
import { GREEK_CASES, type GreekCase, type PronounForm, type PronounFormTable } from '@/data/content.js'
import type { TGender, TNumber } from '@/types'
import { computed, toRef } from 'vue'
import TextWithHighlights from './TextWithHighlights.vue'

const props = defineProps<{
  w: number
  h: number
  table: PronounFormTable
}>()

const NUMBER_NAME: Record<TNumber, string> = {
  singular: 'Однина',
  plural: 'Множина',
}

const GENDERS = ['masculine', 'feminine', 'neuter'] as const satisfies TGender[]

function getForm(greekCase: GreekCase, number: TNumber, gender?: TGender): PronounForm {
  return props.table.forms.find(
    (p) =>
      p.case === greekCase &&
      p.number === number &&
      (gender === undefined ? p.gender === undefined : p.gender === gender),
  )!
}

const cases = computed(() =>
  GREEK_CASES.filter((greekCase) => props.table.forms.some((form) => form.case === greekCase)),
)

const gendered = computed(() => props.table.gendered)

const title = useTitle({
  w: toRef(props, 'w'),
  titles: toRef(props.table, 'titles'),
})
</script>

<template>
  <div>
    <h3 class="px-2">{{ title }}</h3>
    <div class="px-2 text-xs">{{ table.label }}</div>
    <table v-if="!gendered" class="w-full">
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
        <tr v-for="greekCase in cases" :key="greekCase">
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
    <table v-else class="w-full">
      <thead>
        <tr>
          <th></th>
          <th colspan="3">
            <em>{{ NUMBER_NAME.singular }}</em>
          </th>
          <th colspan="3">
            <em>{{ NUMBER_NAME.plural }}</em>
          </th>
        </tr>
        <tr>
          <th></th>
          <th v-for="gender in GENDERS" :key="`sg-${gender}`">
            <em>{{ GENDER_SHORT_NAME[gender] }}</em>
          </th>
          <th v-for="gender in GENDERS" :key="`pl-${gender}`">
            <em>{{ GENDER_SHORT_NAME[gender] }}</em>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="greekCase in cases" :key="greekCase">
          <td>
            <span :class="CASE_TEXT_CLASS[greekCase]">{{ CASE_SHORT_NAME[greekCase] }}</span>
          </td>
          <td v-for="gender in GENDERS" :key="`sg-${greekCase}-${gender}`">
            <TextWithHighlights
              :highlights="getForm(greekCase, 'singular', gender).highlights"
              :text="getForm(greekCase, 'singular', gender).text"
              :highlight-class="CASE_TEXT_CLASS[greekCase]"
            />
          </td>
          <td v-for="gender in GENDERS" :key="`pl-${greekCase}-${gender}`">
            <TextWithHighlights
              :highlights="getForm(greekCase, 'plural', gender).highlights"
              :text="getForm(greekCase, 'plural', gender).text"
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
  padding: 0 6px;
  text-align: left;
  font-weight: normal;
}

table {
  width: 100%;
}
</style>

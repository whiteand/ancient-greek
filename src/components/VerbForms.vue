<script setup lang="ts">
import { usePanelHeight, usePanelWidth } from '@/composables/usePanelSize.ts'
import { type VerbForm, type VerbFormLayout, type VerbFormTable } from '@/data/verbs.ts'
import type { TNumber, TPerson } from '@/types'
import { computed } from 'vue'
import TextWithHighlights from './TextWithHighlights.vue'

const props = defineProps<{
  w: number
  h: number
  table: VerbFormTable
}>()

function getForm(person: TPerson, number: TNumber): VerbForm {
  return props.table.forms.find((p) => p.person === person && p.number === number)!
}

const LAYOUT_1_X_6 = (
  [
    ['Я', 1, 'singular'],
    ['Ти', 2, 'singular'],
    ['Він', 3, 'singular'],
    ['Ми', 1, 'plural'],
    ['Ви', 2, 'plural'],
    ['Вони', 3, 'plural'],
  ] as [string, TPerson, TNumber][]
).map(([label, person, num]) => ({
  label,
  cell: getForm(person, num),
}))
const LAYOUT_2_X_3 = (
  [
    [
      ['Я', 1, 'singular'],
      ['Ми', 1, 'plural'],
    ],
    [
      ['Ти', 2, 'singular'],
      ['Ви', 2, 'plural'],
    ],
    [
      ['Він', 3, 'singular'],
      ['Вони', 3, 'plural'],
    ],
  ] as [[string, TPerson, TNumber], [string, TPerson, TNumber]][]
).map((r) =>
  r.map(([label, person, num]) => ({
    label,
    cell: getForm(person, num),
  })),
)
const LAYOUT_3_X_2 = (
  [
    [
      ['Я', 1, 'singular'],
      ['Ти', 2, 'singular'],
      ['Він', 3, 'singular'],
    ],
    [
      ['Ми', 1, 'plural'],
      ['Ви', 2, 'plural'],
      ['Вони', 3, 'plural'],
    ],
  ] as [string, TPerson, TNumber][][]
).map((r) =>
  r.map(([label, person, num]) => ({
    label,
    cell: getForm(person, num),
  })),
)

const availableWidth = usePanelWidth(() => props.w)
const availableHeight = usePanelHeight(() => props.h)

const layout = computed((): VerbFormLayout => {
  const applicable = props.table.layoutRules.filter(
    (x) => availableWidth.value >= x.width && availableHeight.value >= x.height,
  )

  const smallest = [...props.table.layoutRules].sort((a, b) => a.width - b.width)[0]

  const closestToRatio = applicable.sort((a, b) => b.width - a.width)[0]

  return (closestToRatio ?? smallest)!.layout
})
const title = computed(() => {
  const maxTitleChars = 7 * props.w
  const minTitle = props.table.titles.reduce((a, b) => (a.length < b.length ? a : b))
  return props.table.titles
    .filter((t) => t.length <= maxTitleChars)
    .reduce((a, b) => (a.length > b.length ? a : b), minTitle)
})
</script>

<template>
  <h2>{{ title }}</h2>
  <table v-if="layout === '1x6'">
    <tr v-for="item in LAYOUT_1_X_6" :key="item.label">
      <td>
        <em>{{ item.label }}</em>
      </td>
      <td v-if="item.cell">
        <TextWithHighlights :highlights="item.cell.highlights" :text="item.cell.text" />
      </td>
    </tr>
  </table>
  <table v-if="layout === '2x3'">
    <tr v-for="item in LAYOUT_2_X_3" :key="item[0]!.label">
      <template v-for="subItem in item" :key="subItem.label">
        <td>
          <em>{{ subItem.label }} </em>
        </td>
        <td v-if="subItem.cell">
          <TextWithHighlights :highlights="subItem.cell.highlights" :text="subItem.cell.text" />
        </td>
      </template>
    </tr>
  </table>
  <table v-if="layout === '3x2'">
    <tr v-for="item in LAYOUT_3_X_2" :key="item[0]!.label">
      <template v-for="subItem in item" :key="subItem.label">
        <td>
          <em>{{ subItem.label }} </em>
        </td>
        <td v-if="subItem.cell">
          <TextWithHighlights :highlights="subItem.cell.highlights" :text="subItem.cell.text" />
        </td>
      </template>
    </tr>
  </table>
</template>

<style lang="css" scoped>
h2 {
  padding: 0 10px;
}
em {
  color: #333;
}
@media (prefers-color-scheme: dark) {
  em {
    color: #aaa;
  }
}
td {
  padding: 0 10px;
}
</style>

<script setup lang="ts">
import { useTitle } from '@/composables/useTitle.js'
import type { PrepositionCase } from '@/data/content'
import { toRef } from 'vue'
import CasePill from './CasePill.vue'
import { CASE_TEXT_CLASS, CASE_FULL_NAME } from '@/components/cases.ts'

const props = defineProps<{
  w: number
  h: number
  cases: PrepositionCase[]
  preposition: string
  titles: string[]
}>()

// const availableWidth = usePanelWidth(() => props.w)
// const availableHeight = usePanelHeight(() => props.h)

const title = useTitle({
  w: toRef(props, 'w'),
  titles: toRef(props, 'titles'),
})
</script>

<template>
  <div class="flex flex-col items-stretch gap-4">
    <div class="flex flex-row items-center gap-2">
      <div>{{ title }}</div>
      <div class="flex flex-row flex-wrap items-stretch gap-2">
        <CasePill v-for="i in cases" :key="i.case" :case="i.case" />
      </div>
    </div>
    <div class="flex flex-col items-stretch gap-2">
      <div v-for="i in cases" :key="i.case" class="flex flex-col items-stretch">
        <div class="flex flex-row items-start justify-start gap-2">
          <div :class="['text-xs', CASE_TEXT_CLASS[i.case]]">
            {{ '+' + CASE_FULL_NAME[i.case] }}
          </div>
          <div class="text-xs">{{ i.meaning }}</div>
        </div>
      </div>
    </div>
  </div>
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

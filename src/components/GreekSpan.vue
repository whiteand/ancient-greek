<template>
  <span :class="['font-greek font-medium tracking-wide', $props.class]">
    <TextWithHighlights
      :text="groups.text"
      :highlights="groups.highlights"
      :highlight-class="props.highlightClass ?? 'font-medium text-pink-500 dark:text-pink-400'"
    />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TextWithHighlights from '@/components/TextWithHighlights.vue'
import { parseHighlightedTextFromMarkdown } from '@/data/parse/parseHighlightedText'

const props = defineProps<{
  text: string
  highlightClass?: string
  class?: string
}>()

const groups = computed(() => parseHighlightedTextFromMarkdown(props.text))
</script>

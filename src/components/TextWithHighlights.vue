<script setup lang="ts">
import { highlightLetters } from '@/data/getHighlightedGroups'
import { computed } from 'vue'

const props = defineProps<{
  highlights: [number, number][]
  text: string
  highlightClass?: string
}>()

const groups = computed(() => highlightLetters(props.text, props.highlights).toArray())
</script>

<template>
  <span v-for="(group, i) in groups" :key="i">
    <strong v-if="group.isHighlighted" :class="highlightClass ?? 'highlighted'">{{ group.text }}</strong>
    <template v-else>{{ group.text }}</template>
  </span>
</template>

<style lang="css" scoped>
.highlighted {
  color: var(--highlighted);
}
</style>

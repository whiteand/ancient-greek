<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{ highlights: [number, number][]; text: string }>()

const groups = computed((): { text: string; isHighlighted: boolean }[] => {
  const text = props.text

  const res: { text: string; isHighlighted: boolean }[] = []
  for (let i = 0; i < text.length; i++) {
    const ch = text.at(i)
    if (!ch) break
    const isHighlighted = props.highlights.some((h) => h[0] <= i && h[1] > i)
    const last = res.at(-1)
    if (!last) {
      res.push({
        text: ch,
        isHighlighted,
      })
      continue
    }
    if (last.isHighlighted !== isHighlighted) {
      res.push({
        text: ch,
        isHighlighted,
      })
    } else {
      last.text += ch
    }
  }

  return res
})
</script>

<template>
  <span v-for="(group, i) in groups" :key="i">
    <strong v-if="group.isHighlighted">{{ group.text }}</strong>
    <template v-else>{{ group.text }}</template>
  </span>
</template>

<style lang="css" scoped>
strong {
  color: var(--highlighted);
}
</style>

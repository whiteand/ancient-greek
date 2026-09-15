<script setup lang="ts">
import { CASE_BG_CLASS, CASE_FULL_NAME } from '@/components/cases'
import type { GreekCase } from '@/data/content'

defineProps<{
  case: GreekCase
}>()
</script>

<template>
  <div :class="['rounded px-2 py-1 text-center text-xs', CASE_BG_CLASS[$props.case]]">
    {{ CASE_FULL_NAME[$props.case] }}
  </div>
</template>

<template>
  <span :class="['font-greek font-medium tracking-wide', $props.class]">
    <slot />
  </span>
</template>

<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

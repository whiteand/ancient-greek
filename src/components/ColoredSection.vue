<template>
  <h2 :class="['-mx-2 px-2', $props.class]">
    <slot />
  </h2>
</template>

<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

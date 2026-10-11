<template>
  <section :class="['-mx-2 px-2', $props.class]">
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

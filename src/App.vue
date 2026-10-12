<script setup lang="ts">
import AlphabetGrid from '@/components/AlphabetGrid.vue'
import ColoredSection from '@/components/ColoredSection.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import PhoneticsExplanation from '@/components/PhoneticsExplanation.vue'
import AccentExplanation from '@/components/AccentExplanation.vue'

const paths = Array.from(
  { length: 43 },
  (_, i) => `/temp/${(i + 1).toString().padStart(2, '0')}.png`,
).slice(3)
</script>

<template>
  <main class="container mx-auto px-2">
    <h1>Коротка граматика давньогрецької</h1>
    <section>
      <a href="#writing-and-pronunciation">Письмо і вимова</a>
    </section>
    <SectionHeader id="writing-and-pronunciation">Письмо і вимова</SectionHeader>
    <ColoredSection class="bg-sky-100 dark:bg-sky-900">
      <AlphabetGrid />
      <PhoneticsExplanation />
    </ColoredSection>
    <SectionHeader id="accent">Наголос</SectionHeader>
    <ColoredSection class="bg-pink-50 dark:bg-pink-900">
      <AccentExplanation />
    </ColoredSection>

    <div class="flex-col gap-2">
      <img v-for="path in paths" :src="path" :key="path" />
    </div>
  </main>
</template>

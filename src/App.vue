<script setup lang="ts">
import AlphabetGrid from '@/components/AlphabetGrid.vue'
import ColoredSection from '@/components/ColoredSection.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import PhoneticsExplanation from '@/components/PhoneticsExplanation.vue'
import AccentExplanation from '@/components/AccentExplanation.vue'
import ArticleExplanation from '@/components/ArticleExplanation.vue'
import NounsExplanation from '@/components/NounsExplanation.vue'
import OldApp from './OldApp.vue'

const resolvePublic = (path: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const target = path.replace(/^\//, '')
  return `${base}/${target}`
}

const paths = Array.from({ length: 43 }, (_, i) =>
  resolvePublic(`/foreign/${(i + 1).toString().padStart(2, '0')}.png`),
).slice(5)
</script>

<template>
  <main class="container mx-auto px-2">
    <h1>Коротка граматика давньогрецької</h1>
    <section>
      <ul>
        <li>
          <a class="text-blue-900 dark:text-blue-50" href="#writing-and-pronunciation">
            Письмо і вимова
          </a>
        </li>
        <li><a class="text-blue-900 dark:text-blue-50" href="#accent">Наголос</a></li>
        <li><a class="text-blue-900 dark:text-blue-50" href="#morphology">Морфологія</a></li>
        <li><a class="text-blue-900 dark:text-blue-50" href="#article">Артикль</a></li>
        <li><a class="text-blue-900 dark:text-blue-50" href="#nouns">Іменники</a></li>
      </ul>
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
    <SectionHeader class="bg-black text-white" id="morphology">Морфологія</SectionHeader>
    <SectionHeader id="article">Артикль</SectionHeader>
    <ColoredSection class="bg-lime-50 dark:bg-lime-900">
      <ArticleExplanation />
    </ColoredSection>
    <SectionHeader id="article">Іменники</SectionHeader>
    <ColoredSection class="bg-yellow-100 dark:bg-amber-950">
      <NounsExplanation />
    </ColoredSection>
    <OldApp />
    <div class="flex-col gap-2">
      <img v-for="path in paths" :src="path" :key="path" />
    </div>
  </main>
</template>

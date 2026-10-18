<template>
  <section>
    <ul>
      <li v-for="item in ITEMS" :key="item.id">
        <a class="text-blue-900 dark:text-blue-50" :href="`#${item.id}`">{{ item.title }}</a>
        <ul v-if="item.children" class="ml-6">
          <li v-for="child in item.children" :key="child.id">
            <a class="text-blue-900 dark:text-blue-50" :href="`#${child.id}`">{{ child.title }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
type TocItem = {
  id: string
  title: string
  children?: TocItem[]
}

const ITEMS: TocItem[] = [
  { id: 'writing-and-pronunciation', title: 'Письмо і вимова' },
  { id: 'accent', title: 'Наголос' },
  { id: 'morphology', title: 'Морфологія' },
  { id: 'article', title: 'Артикль' },
  {
    id: 'nouns',
    title: 'Іменники',
    children: [
      { id: 'first-declension', title: 'I відміна' },
      { id: 'second-declension', title: 'II відміна' },
      { id: 'third-declension', title: 'III відміна' },
      { id: 'third-declension-vowel-stems', title: 'Голосні основи' },
      { id: 'dual', title: 'Двоїна' },
    ],
  },
  {
    id: 'adjectives',
    title: 'Прикметники',
    children: [
      { id: 'adjectives-ii-i', title: 'Прикметники II та I відміни' },
      { id: 'adjectives-iii', title: 'Прикметники III відміни' },
      { id: 'adjectives-comparison', title: 'Ступені порівняння' },
    ],
  },
  { id: 'prepositions', title: 'Прийменники' },
]
</script>

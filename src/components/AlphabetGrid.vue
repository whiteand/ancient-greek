<script setup lang="ts">
type Letter = {
  number: number
  variants: string[]
  sound: string
  name: string
}

const letters: Letter[] = [
  {
    variants: ['Α', 'α'],
    sound: 'а',
    name: 'альфа',
  },
  {
    variants: ['Β', 'β'],
    sound: 'б',
    name: 'бета',
  },
  {
    variants: ['Γ', 'γ'],
    sound: 'ґ',
    name: 'гамма',
  },
  {
    variants: ['Δ', 'δ'],
    sound: 'д',
    name: 'дельта',
  },
  {
    variants: ['Ε', 'ε'],
    sound: 'e',
    name: 'епсилон',
  },
  {
    variants: ['Ζ', 'ζ'],
    sound: 'дз',
    name: 'зета',
  },
  {
    variants: ['Η', 'η'],
    sound: 'е',
    name: 'ета',
  },
  {
    variants: ['Θ', 'θ', 'ϑ'],
    sound: 'тх',
    name: 'тета',
  },
  {
    variants: ['Ι', 'ι'],
    sound: 'і',
    name: 'йота',
  },
  {
    variants: ['Κ', 'κ', 'ϰ'],
    sound: 'к',
    name: 'каппа',
  },
  {
    variants: ['Λ', 'λ'],
    sound: 'л',
    name: 'ламбда',
  },
  {
    variants: ['Μ', 'μ'],
    sound: 'м',
    name: 'мю',
  },
  {
    variants: ['Ν', 'ν'],
    sound: 'н',
    name: 'ню',
  },
  {
    variants: ['Ξ', 'ξ'],
    sound: 'кс',
    name: 'кси',
  },
  {
    variants: ['Ο', 'ο'],
    sound: 'о',
    name: 'омікрон',
  },
  {
    variants: ['Π', 'π'],
    sound: 'п',
    name: 'пі',
  },
  {
    variants: ['Ρ', 'ρ'],
    sound: 'р',
    name: 'ро',
  },
  {
    variants: ['Σ', 'σ', 'ς'],
    sound: 'с',
    name: 'сигма',
  },
  {
    variants: ['Τ', 'τ'],
    sound: 'т',
    name: 'тау',
  },
  {
    variants: ['Υ', 'υ'],
    sound: 'ü',
    name: 'ипсилон',
  },
  {
    variants: ['Φ', 'φ'],
    sound: 'ф',
    name: 'фі',
  },
  {
    variants: ['Χ', 'χ'],
    sound: 'х',
    name: 'хі',
  },
  {
    variants: ['Ψ', 'ψ'],
    sound: 'пс',
    name: 'псі',
  },
  {
    variants: ['Ω', 'ω'],
    sound: 'о',
    name: 'омега',
  },
].map((letter, ind) => ({
  ...letter,
  number: ind + 1,
}))
const cols = [letters.slice(0, 8), letters.slice(8, 16), letters.slice(16, 24)]
</script>

<template>
  <div class="grid grid-cols-1 gap-x-4 sm:grid-cols-3">
    <template v-for="(col, ind) in cols" :key="ind">
      <div class="grid grid-cols-[repeat(4,fit-content(40px))] gap-x-2">
        <template v-for="letter in col" :key="letter.name">
          <div>{{ letter.number + '.' }}</div>
          <div class="flex flex-nowrap items-baseline justify-start gap-2 text-pink-500">
            <div v-for="variant in letter.variants" :key="variant">
              {{ variant }}
            </div>
          </div>
          <div>{{ letter.sound }}</div>
          <div class="text-sky-600 dark:text-sky-300">{{ letter.name }}</div>
        </template>
      </div>
    </template>
  </div>
</template>

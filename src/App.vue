<script setup lang="ts">
import { ARTICLES, NOUNS, PREPOSITIONS, VERBS } from '@/data/content.js'
import { GridItem, GridLayout } from 'grid-layout-plus'
import { markRaw, reactive } from 'vue'
import NounForms from './components/NounForms.vue'
import PrepositionBlock from './components/PrepositionBlock.vue'
import VerbForms from './components/VerbForms.vue'

const articlesLayout = reactive(
  ARTICLES.map((x) => ({
    ...x.layoutItem,
    component: markRaw(NounForms),
    props: {
      table: x,
    },
  })),
)

const nounsLayout = reactive(
  NOUNS.map((x) => ({
    ...x.layoutItem,
    component: markRaw(NounForms),
    props: {
      table: x,
    },
  })),
)

const verbsLayout = reactive(
  VERBS.map((x) => ({
    ...x.layoutItem,
    component: markRaw(VerbForms),
    props: {
      table: x,
    },
  })),
)

const prepositionsLayout = reactive(
  PREPOSITIONS.map((x) => ({
    ...x.layoutItem,
    component: markRaw(PrepositionBlock),
    props: {
      titles: x.titles,
      cases: x.cases,
      preposition: x.preposition,
    },
  })),
)
</script>

<template>
  <h2 class="px-4">Артиклі</h2>
  <GridLayout v-model:layout="articlesLayout" :row-height="30">
    <GridItem
      v-for="item in articlesLayout"
      :key="item.i"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :min-w="item.minW"
      :max-h="item.maxH"
      :min-h="item.minH"
      :max-w="item.maxW"
      :h="item.h"
      :i="item.i"
    >
      <component :is="item.component" v-bind="{ ...item.props, w: item.w, h: item.h }" />
    </GridItem>
  </GridLayout>
  <h2 class="px-4">Іменники</h2>
  <GridLayout v-model:layout="nounsLayout" :row-height="30">
    <GridItem
      v-for="item in nounsLayout"
      :key="item.i"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :min-w="item.minW"
      :max-h="item.maxH"
      :min-h="item.minH"
      :max-w="item.maxW"
      :h="item.h"
      :i="item.i"
    >
      <component :is="item.component" v-bind="{ ...item.props, w: item.w, h: item.h }" />
    </GridItem>
  </GridLayout>
  <h2 class="px-4">Дієслова</h2>
  <GridLayout v-model:layout="verbsLayout" :row-height="30">
    <GridItem
      v-for="item in verbsLayout"
      :key="item.i"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :min-w="item.minW"
      :max-h="item.maxH"
      :min-h="item.minH"
      :max-w="item.maxW"
      :h="item.h"
      :i="item.i"
    >
      <component :is="item.component" v-bind="{ ...item.props, w: item.w, h: item.h }" />
    </GridItem>
  </GridLayout>
  <h2 class="px-4">Прийменники</h2>
  <GridLayout v-model:layout="prepositionsLayout" :row-height="30">
    <GridItem
      v-for="item in prepositionsLayout"
      :key="item.i"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :min-w="item.minW"
      :max-h="item.maxH"
      :min-h="item.minH"
      :max-w="item.maxW"
      :h="item.h"
      :i="item.i"
    >
      <component :is="item.component" v-bind="{ ...item.props, w: item.w, h: item.h }" />
    </GridItem>
  </GridLayout>
</template>

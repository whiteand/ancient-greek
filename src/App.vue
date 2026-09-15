<script setup lang="ts">
import { ALL } from '@/data/content.js'
import { GridItem, GridLayout } from 'grid-layout-plus'
import { markRaw, reactive } from 'vue'
import VerbForms from './components/VerbForms.vue'
import PrepositionBlock from './components/PrepositionBlock.vue'

const layout = reactive(
  ALL.map((x) => {
    switch (x.type) {
      case 'verb': return ({
        ...x.layoutItem,
        component: markRaw(VerbForms),
        props: {
          table: x,
        },
      })
      case 'preposition': return ({
        ...x.layoutItem,
        component: markRaw(PrepositionBlock),
        props: {
          titles: x.titles,
          cases: x.cases,
          preposition: x.preposition,
        },
      })
    }
  }),
)
</script>

<template>
  <GridLayout v-model:layout="layout" :row-height="30">
    <GridItem v-for="item in layout" :key="item.i" :x="item.x" :y="item.y" :w="item.w" :min-w="item.minW"
      :max-h="item.maxH" :min-h="item.minH" :max-w="item.maxW" :h="item.h" :i="item.i">
      <component :is="item.component" v-bind="{ ...item.props, w: item.w, h: item.h }" />
    </GridItem>
  </GridLayout>
</template>

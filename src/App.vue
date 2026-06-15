<script setup lang="ts">
import { ALL } from '@/data/verbs.ts'
import { GridItem, GridLayout } from 'grid-layout-plus'
import { markRaw, reactive } from 'vue'
import VerbForms from './components/VerbForms.vue'

const layout = reactive(
  ALL.map((x) => ({
    ...x.layoutItem,
    component: markRaw(VerbForms),
    props: {
      table: x,
    },
  })),
)
</script>

<template>
  <GridLayout v-model:layout="layout" :row-height="30">
    <GridItem
      v-for="item in layout"
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

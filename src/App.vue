<script setup lang="ts">
import {
  PRESENT_ACTIVE_INDICATIVE_VERB_FORMS_WITH_ALPHA,
  PRESENT_ACTIVE_INDICATIVE_VERB_FORMS_WITH_EPSILON,
  PRESENT_ACTIVE_INDICATIVE_VERB_FORMS_WITH_OMICRON,
  PRESENT_MEDIO_PASIVUM_INDICATIVE_VERB_FORMS_WITH_ALPHA,
  PRESENT_MEDIO_PASIVUM_INDICATIVE_VERB_FORMS_WITH_ELIPSON,
  PRESENT_MEDIO_PASIVUM_INDICATIVE_VERB_FORMS_WITH_OMICRON,
} from '@/data/verbs.ts'
import { GridItem, GridLayout } from 'grid-layout-plus'
import { markRaw, reactive } from 'vue'
import VerbForms from './components/VerbForms.vue'

const layout = reactive([
  {
    ...PRESENT_ACTIVE_INDICATIVE_VERB_FORMS_WITH_EPSILON.layoutItem,
    component: markRaw(VerbForms),
    props: {
      table: PRESENT_ACTIVE_INDICATIVE_VERB_FORMS_WITH_EPSILON,
    },
    static: false,
  },
  {
    ...PRESENT_ACTIVE_INDICATIVE_VERB_FORMS_WITH_OMICRON.layoutItem,
    component: markRaw(VerbForms),
    props: {
      table: PRESENT_ACTIVE_INDICATIVE_VERB_FORMS_WITH_OMICRON,
    },
    static: false,
  },
  {
    ...PRESENT_ACTIVE_INDICATIVE_VERB_FORMS_WITH_ALPHA.layoutItem,
    component: markRaw(VerbForms),
    props: {
      table: PRESENT_ACTIVE_INDICATIVE_VERB_FORMS_WITH_ALPHA,
    },
    static: false,
  },
  {
    ...PRESENT_MEDIO_PASIVUM_INDICATIVE_VERB_FORMS_WITH_ELIPSON.layoutItem,
    component: markRaw(VerbForms),
    props: {
      table: PRESENT_MEDIO_PASIVUM_INDICATIVE_VERB_FORMS_WITH_ELIPSON,
    },
    static: false,
  },
  {
    ...PRESENT_MEDIO_PASIVUM_INDICATIVE_VERB_FORMS_WITH_OMICRON.layoutItem,
    component: markRaw(VerbForms),
    props: {
      table: PRESENT_MEDIO_PASIVUM_INDICATIVE_VERB_FORMS_WITH_OMICRON,
    },
    static: false,
  },
  {
    ...PRESENT_MEDIO_PASIVUM_INDICATIVE_VERB_FORMS_WITH_ALPHA.layoutItem,
    component: markRaw(VerbForms),
    props: {
      table: PRESENT_MEDIO_PASIVUM_INDICATIVE_VERB_FORMS_WITH_ALPHA,
    },
    static: false,
  },

  // {
  //   ...PRESENT_ACTIVE_INDICATIVE_VERB_FORMS_WITH_EPSILON.layoutItem,
  //   i: 'test',
  //   component: markRaw(PresentActiveIndicative),
  //   props: {
  //     table: PRESENT_ACTIVE_INDICATIVE_VERB_FORMS_WITH_EPSILON,
  //   },
  //   static: false,
  // },
  // {
  //   ...PRESENT_ACTIVE_INDICATIVE_VERB_FORMS_WITH_EPSILON.layoutItem,
  //   i: 'test-2',
  //   component: markRaw(PresentActiveIndicative),
  //   props: {
  //     table: PRESENT_ACTIVE_INDICATIVE_VERB_FORMS_WITH_EPSILON,
  //   },
  //   static: false,
  // },
  // { x: 2, y: 0, w: 2, h: 4, i: '1', static: true },
  // { x: 4, y: 0, w: 2, h: 5, i: '2', static: false },
  // { x: 6, y: 0, w: 2, h: 3, i: '3', static: false },
  // { x: 8, y: 0, w: 2, h: 3, i: '4', static: false },
  // { x: 10, y: 0, w: 2, h: 3, i: '5', static: false },
  // { x: 0, y: 5, w: 2, h: 5, i: '6', static: false },
  // { x: 2, y: 5, w: 2, h: 5, i: '7', static: false },
  // { x: 4, y: 5, w: 2, h: 5, i: '8', static: false },
  // { x: 6, y: 3, w: 2, h: 4, i: '9', static: true },
  // { x: 8, y: 4, w: 2, h: 4, i: '10', static: false },
  // { x: 10, y: 4, w: 2, h: 4, i: '11', static: false },
  // { x: 0, y: 10, w: 2, h: 5, i: '12', static: false },
  // { x: 2, y: 10, w: 2, h: 5, i: '13', static: false },
  // { x: 4, y: 8, w: 2, h: 4, i: '14', static: false },
  // { x: 6, y: 8, w: 2, h: 4, i: '15', static: false },
  // { x: 8, y: 10, w: 2, h: 5, i: '16', static: false },
  // { x: 10, y: 4, w: 2, h: 2, i: '17', static: false },
  // { x: 0, y: 9, w: 2, h: 3, i: '18', static: false },
  // { x: 2, y: 6, w: 2, h: 2, i: '19', static: false },
])
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

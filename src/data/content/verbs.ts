import * as presentActiveIndicativeWithBaseOnA from '@/content/verbs/present-active-indicative-with-base-on-a.md'
import * as presentActiveIndicativeWithBaseOnE from '@/content/verbs/present-active-indicative-with-base-on-e.md'
import * as presentActiveIndicativeWithBaseOnO from '@/content/verbs/present-active-indicative-with-base-on-o.md'
import * as presentMedPassiveIndicativeWithoutBase from '@/content/verbs/present-active-indicative-without-ending.md'
import * as presentMedPassiveIndicativeWithBaseOnA from '@/content/verbs/present-med-passive-indicative-with-base-on-a.md'
import * as presentMedPassiveIndicativeWithBaseOnE from '@/content/verbs/present-med-passive-indicative-with-base-on-e.md'
import * as presentMedPassiveIndicativeWithBaseOnO from '@/content/verbs/present-med-passive-indicative-with-base-on-o.md'
import { parseHighlightedText } from '@/data/parse/parseHighlightedText.js'
import type { TNumber, TPerson } from '@/types'
import type { LayoutItem } from 'grid-layout-plus'
import * as v from 'valibot'
import { layoutAt } from './layoutAt.js'
import { layoutItemSchema, type MarkdownDocument, numberTextSchema, titlesSchema } from './schemas.js'
import { takeText } from '@/data/parse/takeText.js'

export type VerbForm = {
  person: TPerson
  text: string
  number: TNumber
  highlights: [number, number][]
}

export type VerbFormLayout = '1x6' | '2x3' | '3x2'

export type TLayoutRule = { width: number; height: number; layout: VerbFormLayout }

export interface VerbFormTable {
  type: 'verb'
  titles: string[]
  forms: VerbForm[]
  layoutItem: LayoutItem
  layoutRules: TLayoutRule[]
}

const tableLayoutRules = v.array(
  v.object({
    layout: v.union([v.literal('1x6'), v.literal('2x3'), v.literal('3x2')]),
    width: v.number(),
    height: v.number(),
  }),
)

const verbFormTableAttributesSchema = v.object({
  titles: titlesSchema,
  layoutRules: tableLayoutRules,
  layoutItem: layoutItemSchema,
})

const personTextSchema = v.pipe(
  v.string(),
  v.toNumber(),
  v.union([v.literal(1), v.literal(2), v.literal(3)]),
)

function parseVerbForms(html: string): VerbForm[] {
  const parent = document.createElement('div')
  parent.innerHTML = html

  console.assert(takeText(parent, 'table thead tr:first-child th:nth-child(1)') === 'person')
  console.assert(takeText(parent, 'table thead tr:first-child th:nth-child(2)') === 'number')
  console.assert(takeText(parent, 'table thead tr:first-child th:nth-child(3)') === 'form')
  const trs = parent.querySelectorAll('tbody > tr')
  console.assert(trs.length === 6, 'expected 6 forms')
  const res = [] as VerbForm[]
  for (const tr of trs) {
    console.assert(tr.children.length === 3)
    const person = v.parse(personTextSchema, takeText(tr, 'td:nth-child(1)'))
    const number = v.parse(numberTextSchema, takeText(tr, 'td:nth-child(2)'))
    const formNode = tr.querySelector('td:nth-child(3)')

    if (!formNode) throw new Error()

    const { text, highlights } = parseHighlightedText(formNode)

    res.push({
      highlights,
      number,
      person,
      text,
    })
  }

  return res
}

function parseVerbFormTable({ attributes, html }: MarkdownDocument): VerbFormTable {
  const x = v.parse(verbFormTableAttributesSchema, attributes)
  return {
    type: 'verb',
    titles: x.titles,
    layoutRules: x.layoutRules,
    layoutItem: x.layoutItem,
    forms: parseVerbForms(html),
  }
}

export const VERBS = layoutAt(0, 0, [
  parseVerbFormTable(presentActiveIndicativeWithBaseOnE),
  parseVerbFormTable(presentActiveIndicativeWithBaseOnO),
  parseVerbFormTable(presentActiveIndicativeWithBaseOnA),
  parseVerbFormTable(presentMedPassiveIndicativeWithoutBase),
  parseVerbFormTable(presentMedPassiveIndicativeWithBaseOnE),
  parseVerbFormTable(presentMedPassiveIndicativeWithBaseOnO),
  parseVerbFormTable(presentMedPassiveIndicativeWithBaseOnA),
]).toArray()

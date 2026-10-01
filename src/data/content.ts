import * as nounHodos from '@/content/nouns/hodos.md'
import * as nounLogos from '@/content/nouns/logos.md'
import * as nounProbaton from '@/content/nouns/probaton.md'
import * as nounProphetes from '@/content/nouns/prophetes.md'
import * as nounTime from '@/content/nouns/time.md'
import * as prepositionAmphi from '@/content/prepositions/amphi.md'
import * as prepositionAna from '@/content/prepositions/ana.md'
import * as prepositionAnti from '@/content/prepositions/anti.md'
import * as prepositionApo from '@/content/prepositions/apo.md'
import * as prepositionDia from '@/content/prepositions/dia.md'
import * as prepositionEis from '@/content/prepositions/eis.md'
import * as prepositionEk from '@/content/prepositions/ek.md'
import * as prepositionEn from '@/content/prepositions/en.md'
import * as prepositionEpi from '@/content/prepositions/epi.md'
import * as prepositionHyper from '@/content/prepositions/hyper.md'
import * as prepositionHypo from '@/content/prepositions/hypo.md'
import * as prepositionKata from '@/content/prepositions/kata.md'
import * as prepositionMeta from '@/content/prepositions/meta.md'
import * as prepositionPara from '@/content/prepositions/para.md'
import * as prepositionPeri from '@/content/prepositions/peri.md'
import * as prepositionPro from '@/content/prepositions/pro.md'
import * as prepositionPros from '@/content/prepositions/pros.md'
import * as prepositionSyn from '@/content/prepositions/syn.md'
import * as presentActiveIndicativeWithBaseOnA from '@/content/verbs/present-active-indicative-with-base-on-a.md'
import * as presentActiveIndicativeWithBaseOnE from '@/content/verbs/present-active-indicative-with-base-on-e.md'
import * as presentActiveIndicativeWithBaseOnO from '@/content/verbs/present-active-indicative-with-base-on-o.md'
import * as presentMedPassiveIndicativeWithoutBase from '@/content/verbs/present-active-indicative-without-ending.md'
import * as presentMedPassiveIndicativeWithBaseOnA from '@/content/verbs/present-med-passive-indicative-with-base-on-a.md'
import * as presentMedPassiveIndicativeWithBaseOnE from '@/content/verbs/present-med-passive-indicative-with-base-on-e.md'
import * as presentMedPassiveIndicativeWithBaseOnO from '@/content/verbs/present-med-passive-indicative-with-base-on-o.md'
import type { LayoutItem } from 'grid-layout-plus'
import * as v from 'valibot'
import type { TDeclension, TGender, TNumber, TPerson } from '../types/index.js'
import { parseHighlightedText } from '@/data/parse/parseHighlightedText.js'
import { parseTable } from '@/data/parse/parseTable.js'
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

const titles = v.array(v.string())

const layoutItem = v.object({
  i: v.pipe(v.string(), v.minLength(1)),
  x: v.optional(v.pipe(v.number(), v.integer(), v.minValue(0), v.maxValue(11)), 0),
  y: v.optional(v.pipe(v.number(), v.integer(), v.minValue(0)), 0),
  w: v.optional(v.pipe(v.number(), v.integer(), v.minValue(0), v.maxValue(12)), 2),
  minW: v.optional(v.pipe(v.number(), v.integer(), v.minValue(0), v.maxValue(12))),
  maxW: v.optional(v.pipe(v.number(), v.integer(), v.minValue(0), v.maxValue(12))),
  h: v.optional(v.pipe(v.number(), v.integer(), v.minValue(0)), 2),
  minH: v.optional(v.pipe(v.number(), v.integer(), v.minValue(0))),
  maxH: v.optional(v.pipe(v.number(), v.integer(), v.minValue(0))),
  static: v.optional(v.boolean(), false),
})

const verbFormTableAttributesSchema = v.object({
  titles: titles,
  layoutRules: tableLayoutRules,
  layoutItem: layoutItem,
})

const personTextSchema = v.pipe(
  v.string(),
  v.toNumber(),
  v.union([v.literal(1), v.literal(2), v.literal(3)]),
)
const numberTextSchema = v.union([v.literal('singular'), v.literal('plural')])

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

function parseVerbFormTable({
  attributes,
  html,
}: {
  attributes: Record<string, unknown>
  html: string
}): VerbFormTable {
  const x = v.parse(verbFormTableAttributesSchema, attributes)
  return {
    type: 'verb',
    titles: x.titles,
    layoutRules: x.layoutRules,
    layoutItem: x.layoutItem,
    forms: parseVerbForms(html),
  }
}

const prepositionAttributes = v.object({
  titles: titles,
  layoutItem: layoutItem,
  preposition: v.pipe(v.string(), v.minLength(1)),
})

export const GREEK_CASES = ['nominative', 'genitive', 'dative', 'accusative', 'vocative'] as const
export type GreekCase = (typeof GREEK_CASES)[number]

export type PrepositionCase = {
  case: GreekCase
  meaning: string
}

type PrepositionBlock = {
  type: 'preposition'
  titles: string[]
  layoutItem: LayoutItem
  preposition: string
  cases: PrepositionCase[]
}

const caseSchema = v.pipe(v.string(), v.union(GREEK_CASES.map((c) => v.literal(c))))
const meaningSchema = v.pipe(v.string(), v.minLength(1))

function parsePrepositionCases(html: string): PrepositionCase[] {
  const parent = document.createElement('div')
  parent.innerHTML = html

  const rows = parseTable(
    {
      cols: [
        {
          name: 'case',
          parseValue: (text) => v.parse(caseSchema, text),
        },
        {
          name: 'meaning',
          parseValue: (text) => v.parse(meaningSchema, text),
        },
      ],
    },
    parent,
  )

  rows.sort((a, b) => GREEK_CASES.indexOf(a.case) - GREEK_CASES.indexOf(b.case))

  return rows
}

function parsePrepositionTable({
  attributes,
  html,
}: {
  attributes: Record<string, unknown>
  html: string
}): PrepositionBlock {
  const x = v.parse(prepositionAttributes, attributes)
  return {
    type: 'preposition',
    titles: x.titles,
    layoutItem: x.layoutItem,
    preposition: x.preposition,
    cases: parsePrepositionCases(html),
  }
}

function* layoutAt<T extends { layoutItem: LayoutItem }>(
  startX: number,
  startY: number,
  items: readonly T[],
): Generator<T, void, unknown> {
  let currentRowMaxHeight = 0

  let y = startY
  let x = startX
  const totalCols = 12
  for (const item of items) {
    const { layoutItem } = item
    const { w, h } = layoutItem

    if (w + x > totalCols) {
      y += currentRowMaxHeight
      x = 0
      currentRowMaxHeight = h
    }

    yield {
      ...item,
      layoutItem: {
        ...layoutItem,
        x,
        y,
      },
    }

    if (w + x >= totalCols) {
      x = 0
      y += Math.max(currentRowMaxHeight, h)
      currentRowMaxHeight = 0
      continue
    }
    x += w
    currentRowMaxHeight = Math.max(currentRowMaxHeight, h)
  }
}

export type NounForm = {
  case: GreekCase
  number: TNumber
  text: string
  highlights: [number, number][]
}

export interface NounFormTable {
  type: 'noun'
  titles: string[]
  noun: string
  declension: TDeclension
  gender: TGender
  forms: NounForm[]
  layoutItem: LayoutItem
}

const nounFormTableAttributesSchema = v.object({
  titles: titles,
  layoutItem: layoutItem,
  noun: v.pipe(v.string(), v.minLength(1)),
  declension: v.union([v.literal(1), v.literal(2), v.literal(3)]),
  gender: v.union([v.literal('masculine'), v.literal('feminine'), v.literal('neuter')]),
})

function parseNounForms(html: string): NounForm[] {
  const parent = document.createElement('div')
  parent.innerHTML = html

  const rows = parseTable(
    {
      cols: [
        {
          name: 'case',
          parseValue: (text) => v.parse(caseSchema, text),
        },
        {
          name: 'number',
          parseValue: (text) => v.parse(numberTextSchema, text),
        },
        {
          name: 'form',
          parseValue: (_text, td) => parseHighlightedText(td),
        },
      ],
    },
    parent,
  )

  console.assert(rows.length === 10, 'expected 10 noun forms')

  rows.sort(
    (a, b) =>
      GREEK_CASES.indexOf(a.case) - GREEK_CASES.indexOf(b.case) ||
      (a.number === b.number ? 0 : a.number === 'singular' ? -1 : 1),
  )

  return rows.map((row) => ({
    case: row.case,
    number: row.number,
    text: row.form.text,
    highlights: row.form.highlights,
  }))
}

function parseNounFormTable({
  attributes,
  html,
}: {
  attributes: Record<string, unknown>
  html: string
}): NounFormTable {
  const x = v.parse(nounFormTableAttributesSchema, attributes)
  return {
    type: 'noun',
    titles: x.titles,
    noun: x.noun,
    declension: x.declension,
    gender: x.gender,
    layoutItem: x.layoutItem,
    forms: parseNounForms(html),
  }
}

export const NOUNS = layoutAt(0, 0, [
  parseNounFormTable(nounTime),
  parseNounFormTable(nounProphetes),
  parseNounFormTable(nounLogos),
  parseNounFormTable(nounHodos),
  parseNounFormTable(nounProbaton),
]).toArray()

export const VERBS = layoutAt(0, 0, [
  parseVerbFormTable(presentActiveIndicativeWithBaseOnE),
  parseVerbFormTable(presentActiveIndicativeWithBaseOnO),
  parseVerbFormTable(presentActiveIndicativeWithBaseOnA),
  parseVerbFormTable(presentMedPassiveIndicativeWithoutBase),
  parseVerbFormTable(presentMedPassiveIndicativeWithBaseOnE),
  parseVerbFormTable(presentMedPassiveIndicativeWithBaseOnO),
  parseVerbFormTable(presentMedPassiveIndicativeWithBaseOnA),
]).toArray()

export const PREPOSITIONS = layoutAt(
  0,
  0,
  [
    parsePrepositionTable(prepositionAmphi),
    parsePrepositionTable(prepositionAna),
    parsePrepositionTable(prepositionAnti),
    parsePrepositionTable(prepositionApo),
    parsePrepositionTable(prepositionDia),
    parsePrepositionTable(prepositionEis),
    parsePrepositionTable(prepositionEk),
    parsePrepositionTable(prepositionEn),
    parsePrepositionTable(prepositionEpi),
    parsePrepositionTable(prepositionKata),
    parsePrepositionTable(prepositionMeta),
    parsePrepositionTable(prepositionPara),
    parsePrepositionTable(prepositionPeri),
    parsePrepositionTable(prepositionPro),
    parsePrepositionTable(prepositionPros),
    parsePrepositionTable(prepositionSyn),
    parsePrepositionTable(prepositionHyper),
    parsePrepositionTable(prepositionHypo),
  ].toSorted((a, b) => a.preposition.localeCompare(b.preposition)),
).toArray()

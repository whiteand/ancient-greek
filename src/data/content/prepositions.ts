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
import { parseTable } from '@/data/parse/parseTable.js'
import type { LayoutItem } from 'grid-layout-plus'
import * as v from 'valibot'
import { layoutAt } from './layoutAt.js'
import {
  caseSchema,
  GREEK_CASES,
  type GreekCase,
  layoutItemSchema,
  type MarkdownDocument,
  titlesSchema,
} from './schemas.js'

export type PrepositionCase = {
  case: GreekCase
  meaning: string
}

export type PrepositionBlock = {
  type: 'preposition'
  titles: string[]
  layoutItem: LayoutItem
  preposition: string
  cases: PrepositionCase[]
}

const prepositionAttributes = v.object({
  titles: titlesSchema,
  layoutItem: layoutItemSchema,
  preposition: v.pipe(v.string(), v.minLength(1)),
})

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

function parsePrepositionTable({ attributes, html }: MarkdownDocument): PrepositionBlock {
  const x = v.parse(prepositionAttributes, attributes)
  return {
    type: 'preposition',
    titles: x.titles,
    layoutItem: x.layoutItem,
    preposition: x.preposition,
    cases: parsePrepositionCases(html),
  }
}

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

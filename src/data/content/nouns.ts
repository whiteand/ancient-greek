import * as nounHodos from '@/content/nouns/hodos.md'
import * as nounLogos from '@/content/nouns/logos.md'
import * as nounProbaton from '@/content/nouns/probaton.md'
import * as nounProphetes from '@/content/nouns/prophetes.md'
import * as nounTime from '@/content/nouns/time.md'
import type { TDeclension, TGender } from '@/types'
import type { LayoutItem } from 'grid-layout-plus'
import * as v from 'valibot'
import { layoutAt } from './layoutAt.js'
import { type CaseNumberForm, parseCaseNumberForms } from './parseCaseNumberForms.js'
import { genderTextSchema, layoutItemSchema, type MarkdownDocument, titlesSchema } from './schemas.js'

export type NounForm = CaseNumberForm

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
  titles: titlesSchema,
  layoutItem: layoutItemSchema,
  noun: v.pipe(v.string(), v.minLength(1)),
  declension: v.union([v.literal(1), v.literal(2), v.literal(3)]),
  gender: genderTextSchema,
})

function parseNounFormTable({ attributes, html }: MarkdownDocument): NounFormTable {
  const x = v.parse(nounFormTableAttributesSchema, attributes)
  return {
    type: 'noun',
    titles: x.titles,
    noun: x.noun,
    declension: x.declension,
    gender: x.gender,
    layoutItem: x.layoutItem,
    forms: parseCaseNumberForms(html, 10),
  }
}

export const NOUNS = layoutAt(0, 0, [
  parseNounFormTable(nounTime),
  parseNounFormTable(nounProphetes),
  parseNounFormTable(nounLogos),
  parseNounFormTable(nounHodos),
  parseNounFormTable(nounProbaton),
]).toArray()

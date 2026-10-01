import { parseHighlightedText } from '@/data/parse/parseHighlightedText.js'
import { parseTable } from '@/data/parse/parseTable.js'
import type { TNumber } from '@/types'
import * as v from 'valibot'
import { caseSchema, GREEK_CASES, type GreekCase, numberTextSchema } from './schemas.js'

export type CaseNumberForm = {
  case: GreekCase
  number: TNumber
  text: string
  highlights: [number, number][]
}

export function parseCaseNumberForms(html: string, expectedLength: number): CaseNumberForm[] {
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

  console.assert(rows.length === expectedLength, `expected ${expectedLength} forms`)

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

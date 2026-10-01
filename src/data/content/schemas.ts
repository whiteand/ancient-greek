import * as v from 'valibot'

export const GREEK_CASES = ['nominative', 'genitive', 'dative', 'accusative', 'vocative'] as const
export type GreekCase = (typeof GREEK_CASES)[number]

export const titlesSchema = v.array(v.string())

export const layoutItemSchema = v.object({
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

export const numberTextSchema = v.union([v.literal('singular'), v.literal('plural')])

export const caseSchema = v.pipe(v.string(), v.union(GREEK_CASES.map((c) => v.literal(c))))

export const genderTextSchema = v.union([
  v.literal('masculine'),
  v.literal('feminine'),
  v.literal('neuter'),
])

export type MarkdownDocument = {
  attributes: Record<string, unknown>
  html: string
}

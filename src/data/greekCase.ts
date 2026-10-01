import * as v from "valibot";

export const GREEK_CASES = ["nominative", "genitive", "dative", "accusative", "vocative"] as const;
export type GreekCase = (typeof GREEK_CASES)[number];

export const caseSchema = v.pipe(v.string(), v.union(GREEK_CASES.map((c) => v.literal(c))));

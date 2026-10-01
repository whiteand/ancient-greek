import type { LayoutItem } from "grid-layout-plus";
import * as v from "valibot";

export type MarkdownSource = {
  attributes: Record<string, unknown>;
  html: string;
};

export const titles = v.array(v.string());

export const layoutItem = v.object({
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
});

export type { LayoutItem };

export const numberTextSchema = v.union([v.literal("singular"), v.literal("plural")]);

export const genderTextSchema = v.union([
  v.literal("masculine"),
  v.literal("feminine"),
  v.literal("neuter"),
]);

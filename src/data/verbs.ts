import type { LayoutItem } from "grid-layout-plus";
import type { TNumber, TPerson } from "../types/index.ts";
import * as v from "valibot";
import * as presentActiveIndicativeWithBaseOnA from "@/content/verbs/present-active-indicative-with-base-on-a.md";
import * as presentActiveIndicativeWithBaseOnO from "@/content/verbs/present-active-indicative-with-base-on-o.md";
import * as presentActiveIndicativeWithBaseOnE from "@/content/verbs/present-active-indicative-with-base-on-e.md";
import * as presentMedPassiveIndicativeWithBaseOnA from "@/content/verbs/present-med-passive-indicative-with-base-on-a.md";
import * as presentMedPassiveIndicativeWithBaseOnO from "@/content/verbs/present-med-passive-indicative-with-base-on-o.md";
import * as presentMedPassiveIndicativeWithBaseOnE from "@/content/verbs/present-med-passive-indicative-with-base-on-e.md";

export type VerbForm = {
  person: TPerson;
  text: string;
  number: TNumber;
  highlights: [number, number][];
};

export type VerbFormLayout = "1x6" | "2x3" | "3x2";

export type TLayoutRule = { width: number; height: number; layout: VerbFormLayout };

export interface VerbFormTable {
  titles: string[];
  forms: VerbForm[];
  layoutItem: LayoutItem;
  layoutRules: TLayoutRule[];
}

const verbFormTableAttributesSchema = v.object({
  titles: v.array(v.string()),
  layoutRules: v.array(
    v.object({
      layout: v.union([v.literal("1x6"), v.literal("2x3"), v.literal("3x2")]),
      width: v.number(),
      height: v.number(),
    }),
  ),
  layoutItem: v.object({
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
  }),
});

function takeText(dom: Element, selector: string): string {
  const res = dom.querySelectorAll(selector);
  if (res.length > 1) {
    throw new Error(`Not unique results: ` + selector);
  }
  if (res.length == 0) {
    throw new Error(`No results: ` + selector);
  }
  return res[0]?.textContent ?? "";
}

const personTextSchema = v.pipe(
  v.string(),
  v.toNumber(),
  v.union([v.literal(1), v.literal(2), v.literal(3)]),
);
const numberTextSchema = v.union([v.literal("singular"), v.literal("plural")]);

function parseVerbForms(html: string): VerbForm[] {
  const parent = document.createElement("div");
  parent.innerHTML = html;

  console.assert(takeText(parent, "table thead tr:first-child th:nth-child(1)") === "person");
  console.assert(takeText(parent, "table thead tr:first-child th:nth-child(2)") === "number");
  console.assert(takeText(parent, "table thead tr:first-child th:nth-child(3)") === "form");
  const trs = parent.querySelectorAll("tbody > tr");
  console.assert(trs.length === 6, "expected 6 forms");
  const res = [] as VerbForm[];
  for (const tr of trs) {
    console.assert(tr.children.length === 3);
    const person = v.parse(personTextSchema, takeText(tr, "td:nth-child(1)"));
    const number = v.parse(numberTextSchema, takeText(tr, "td:nth-child(2)"));
    const formNode = tr.querySelector("td:nth-child(3)");

    if (!formNode) throw new Error();

    let text = "";
    const highlights = [] as [number, number][];
    for (let p = formNode.firstChild; p != null; p = p.nextSibling) {
      if (p.nodeType === document.TEXT_NODE) {
        text += p.textContent;
        continue;
      }
      if (p.nodeType === document.ELEMENT_NODE && p.nodeName === "STRONG") {
        const start = text.length;
        text += p.textContent;
        const end = text.length;
        highlights.push([start, end]);
        continue;
      }
      throw new Error("not implemented");
    }

    res.push({
      highlights,
      number,
      person,
      text,
    });
  }

  return res;
}

function parseVerbFormTable({
  attributes,
  html,
}: {
  attributes: Record<string, unknown>;
  html: string;
}): VerbFormTable {
  const x = v.parse(verbFormTableAttributesSchema, attributes);
  return {
    titles: x.titles,
    layoutRules: x.layoutRules,
    layoutItem: x.layoutItem,
    forms: parseVerbForms(html),
  };
}

export const ALL = [
  parseVerbFormTable(presentActiveIndicativeWithBaseOnE),
  parseVerbFormTable(presentActiveIndicativeWithBaseOnO),
  parseVerbFormTable(presentActiveIndicativeWithBaseOnA),
  parseVerbFormTable(presentMedPassiveIndicativeWithBaseOnE),
  parseVerbFormTable(presentMedPassiveIndicativeWithBaseOnO),
  parseVerbFormTable(presentMedPassiveIndicativeWithBaseOnA),
];

import type { LayoutItem } from "grid-layout-plus";
import type { TNumber, TPerson } from "../types/index.ts";

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
const LAYOUT_RULES: TLayoutRule[] = [
  {
    width: 452,
    height: 45,
    layout: "3x2",
  },
  {
    width: 333,
    height: 66,
    layout: "2x3",
  },
  {
    width: 202,
    height: 190,
    layout: "1x6",
  },
];

export const PRESENT_ACTIVE_INDICATIVE_VERB_FORMS_WITH_EPSILON: VerbFormTable = {
  layoutRules: LAYOUT_RULES,
  layoutItem: {
    x: 0,
    y: 0,
    w: 2,
    h: 6,
    minW: 2,
    maxW: 6,
    maxH: 6,
    minH: 3,
    i: "present-active-indicative-epsilon",
    static: false,
  },
  titles: ["Тепер. індикатив акт. на -ε"],
  forms: [
    {
      person: 1,
      number: "singular",
      text: "φιλῶ < φιλέω",
      highlights: [
        [3, 4],
        [10, 12],
      ],
    },
    {
      person: 2,
      number: "singular",
      text: "φιλεῖς",
      highlights: [[3, 6]],
    },
    {
      person: 3,
      number: "singular",
      text: "φιλεῖ",
      highlights: [[3, 5]],
    },
    {
      person: 1,
      number: "plural",
      text: "φιλοῦμεν",
      highlights: [[3, 8]],
    },
    {
      person: 2,
      number: "plural",
      text: "φιλεῖτε",
      highlights: [[3, 7]],
    },
    {
      person: 3,
      number: "plural",
      text: "φιλοῦσι(ν)",
      highlights: [[3, 10]],
    },
  ],
};
export const PRESENT_ACTIVE_INDICATIVE_VERB_FORMS_WITH_OMICRON: VerbFormTable = {
  layoutRules: LAYOUT_RULES,
  layoutItem: {
    x: 2,
    y: 0,
    w: 2,
    h: 6,
    minW: 2,
    maxW: 6,
    maxH: 6,
    minH: 3,
    i: "present-active-indicative-omikron",
    static: false,
  },
  titles: ["Тепер. індикатив акт. на -o"],
  forms: [
    {
      person: 1,
      number: "singular",
      text: "δηλῶ < δηλόω",
      highlights: [
        [3, 4],
        [10, 12],
      ],
    },
    {
      person: 2,
      number: "singular",
      text: "δηλοῖς",
      highlights: [[3, 6]],
    },
    {
      person: 3,
      number: "singular",
      text: "δηλοῖ",
      highlights: [[3, 5]],
    },
    {
      person: 1,
      number: "plural",
      text: "δηλοῦμεν",
      highlights: [[3, 8]],
    },
    {
      person: 2,
      number: "plural",
      text: "δηλοῦτε",
      highlights: [[3, 7]],
    },
    {
      person: 3,
      number: "plural",
      text: "δηλοῦσι(ν)",
      highlights: [[3, 10]],
    },
  ],
};
export const PRESENT_ACTIVE_INDICATIVE_VERB_FORMS_WITH_ALPHA: VerbFormTable = {
  layoutRules: LAYOUT_RULES,
  layoutItem: {
    x: 4,
    y: 0,
    w: 2,
    h: 6,
    minW: 2,
    maxW: 6,
    maxH: 6,
    minH: 3,
    i: "present-active-indicative-alpha",
    static: false,
  },
  titles: ["Тепер. індикатив акт. на -α"],
  forms: [
    {
      person: 1,
      number: "singular",
      text: "τιμῶ < τιμάω",
      highlights: [
        [3, 4],
        [10, 12],
      ],
    },
    {
      person: 2,
      number: "singular",
      text: "τιμᾷς",
      highlights: [[3, 6]],
    },
    {
      person: 3,
      number: "singular",
      text: "τιμᾷ",
      highlights: [[3, 5]],
    },
    {
      person: 1,
      number: "plural",
      text: "τιμῶμεν",
      highlights: [[3, 8]],
    },
    {
      person: 2,
      number: "plural",
      text: "τιμᾶτε",
      highlights: [[3, 7]],
    },
    {
      person: 3,
      number: "plural",
      text: "τιμῶσι(ν)",
      highlights: [[3, 10]],
    },
  ],
};
export const PRESENT_MEDIO_PASIVUM_INDICATIVE_VERB_FORMS_WITH_ELIPSON: VerbFormTable = {
  layoutRules: LAYOUT_RULES,
  layoutItem: {
    x: 6,
    y: 0,
    w: 2,
    h: 6,
    minW: 2,
    maxW: 6,
    maxH: 6,
    minH: 3,
    i: "present-med-pas-indicative-epsilon",
    static: false,
  },
  titles: ["Тепер. медіо-пасив на -ε"],
  forms: [
    {
      person: 1,
      number: "singular",
      text: "φιλοῦμαι",
      highlights: [[3, 8]],
    },
    {
      person: 2,
      number: "singular",
      text: "φιλῆ/-εῖ",
      highlights: [
        [3, 4],
        [5, 8],
      ],
    },
    {
      person: 3,
      number: "singular",
      text: "φιλεῖται",
      highlights: [[3, 8]],
    },
    {
      person: 1,
      number: "plural",
      text: "φιλούμεθα",
      highlights: [[3, 9]],
    },
    {
      person: 2,
      number: "plural",
      text: "φιλεῖσθε",
      highlights: [[3, 8]],
    },
    {
      person: 3,
      number: "plural",
      text: "φιλοῦνται",
      highlights: [[3, 9]],
    },
  ],
};
export const PRESENT_MEDIO_PASIVUM_INDICATIVE_VERB_FORMS_WITH_OMICRON: VerbFormTable = {
  layoutRules: LAYOUT_RULES,
  layoutItem: {
    x: 8,
    y: 0,
    w: 2,
    h: 6,
    minW: 2,
    maxW: 6,
    maxH: 6,
    minH: 3,
    i: "present-med-pas-indicative-omikron",
    static: false,
  },
  titles: ["Тепер. медіо-пасив на -ο"],
  forms: [
    {
      person: 1,
      number: "singular",
      text: "δηλοῦμαι",
      highlights: [[3, 8]],
    },
    {
      person: 2,
      number: "singular",
      text: "δηλοῖ",
      highlights: [[3, 5]],
    },
    {
      person: 3,
      number: "singular",
      text: "δηλοῦται",
      highlights: [[3, 8]],
    },
    {
      person: 1,
      number: "plural",
      text: "δηλούμεθα",
      highlights: [[3, 9]],
    },
    {
      person: 2,
      number: "plural",
      text: "δηλοῦσθε",
      highlights: [[3, 8]],
    },
    {
      person: 3,
      number: "plural",
      text: "δελοῦνται",
      highlights: [[3, 9]],
    },
  ],
};
export const PRESENT_MEDIO_PASIVUM_INDICATIVE_VERB_FORMS_WITH_ALPHA: VerbFormTable = {
  layoutRules: LAYOUT_RULES,
  layoutItem: {
    x: 10,
    y: 0,
    w: 2,
    h: 6,
    minW: 2,
    maxW: 6,
    maxH: 6,
    minH: 3,
    i: "present-med-pas-indicative-alpha",
    static: false,
  },
  titles: ["Тепер. медіо-пасив на -α"],
  forms: [
    {
      person: 1,
      number: "singular",
      text: "τιμῶμαι",
      highlights: [[3, 7]],
    },
    {
      person: 2,
      number: "singular",
      text: "τιμᾷ",
      highlights: [[3, 4]],
    },
    {
      person: 3,
      number: "singular",
      text: "τιμᾶται",
      highlights: [[3, 8]],
    },
    {
      person: 1,
      number: "plural",
      text: "τιμώμεθα",
      highlights: [[3, 9]],
    },
    {
      person: 2,
      number: "plural",
      text: "τιμᾶσθε",
      highlights: [[3, 8]],
    },
    {
      person: 3,
      number: "plural",
      text: "τιμῶνται",
      highlights: [[3, 9]],
    },
  ],
};

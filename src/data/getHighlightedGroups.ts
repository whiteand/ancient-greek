import { groupByPredicate } from "./iter.ts";

export function highlightLetters(
  text: string,
  highlights: [number, number][],
): IteratorObject<
  {
    text: string;
    isHighlighted: boolean;
  },
  void,
  unknown
> {
  return groupByPredicate((_, i) => highlights.some((h) => h[0] <= i && h[1] > i), text).flatMap(
    (x) =>
      groupByPredicate((c) => /^\s+$/.test(c), x.value).map((y) => ({
        text: y.value.join(""),
        isHighlighted: !y.predicateValue && x.predicateValue,
      })),
  );
}

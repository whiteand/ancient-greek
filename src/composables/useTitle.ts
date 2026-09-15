import { computed, type MaybeRefOrGetter, toValue } from "vue";

export function useTitle({
  w,
  titles: titlesRef,
}: {
  w: MaybeRefOrGetter<number>;
  titles: MaybeRefOrGetter<readonly string[]>;
}) {
  return computed(() => {
    const maxTitleChars = 7 * toValue(w);
    const titles = toValue(titlesRef);
    const minTitle = titles.reduce((a, b) => (a.length < b.length ? a : b));
    return titles
      .filter((t) => t.length <= maxTitleChars)
      .reduce((a, b) => (a.length > b.length ? a : b), minTitle);
  });
}

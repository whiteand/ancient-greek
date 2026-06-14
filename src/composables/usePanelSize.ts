import { useWindowSize } from "@vueuse/core";
import { computed, type MaybeRefOrGetter, toValue } from "vue";

export function usePanelWidth(gridColsSize: MaybeRefOrGetter<number>) {
  const { width } = useWindowSize();
  return computed(() => {
    const COLS = 12;
    const GAPS = COLS - 1;
    const PADDINGS = 2;

    const GAP_SIZE = 10;
    const PADDING_SIZE = 10;

    // w = COLS * collSize + GAP_SIZE * GAPS + PADDINGS * PADDING_SIZE
    const collSize = (width.value - GAP_SIZE * GAPS - PADDING_SIZE * PADDINGS) / COLS;
    console.log(collSize);
    const widths = toValue(gridColsSize);
    return collSize * widths + (widths - 1) * GAP_SIZE;
  });
}

export function usePanelHeight(gridRowsSize: MaybeRefOrGetter<number>) {
  const GAP_SIZE = 10;
  const ROW_HEIGHT = 30;
  return computed(
    () => toValue(gridRowsSize) * ROW_HEIGHT + GAP_SIZE * (toValue(gridRowsSize) - 1),
  );
}

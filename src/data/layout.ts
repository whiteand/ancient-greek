import type { LayoutItem } from "grid-layout-plus";

export function* layoutAt<T extends { layoutItem: LayoutItem }>(
  startX: number,
  startY: number,
  items: readonly T[],
): Generator<T, void, unknown> {
  let currentRowMaxHeight = 0;

  let y = startY;
  let x = startX;
  const totalCols = 12;
  for (const item of items) {
    const { layoutItem } = item;
    const { w, h } = layoutItem;

    if (w + x > totalCols) {
      y += currentRowMaxHeight;
      x = 0;
      currentRowMaxHeight = h;
    }

    yield {
      ...item,
      layoutItem: {
        ...layoutItem,
        x,
        y,
      },
    };

    if (w + x >= totalCols) {
      x = 0;
      y += Math.max(currentRowMaxHeight, h);
      currentRowMaxHeight = 0;
      continue;
    }
    x += w;
    currentRowMaxHeight = Math.max(currentRowMaxHeight, h);
  }
}

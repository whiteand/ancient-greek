export function queryUnique<E extends Element>(dom: Element, selector: string): E {
  const res = dom.querySelectorAll<E>(selector);
  if (res.length > 1) {
    throw new Error(`Not unique results: ` + selector);
  }
  if (res.length == 0) {
    throw new Error(`No results: ` + selector);
  }
  return res[0]!;
}

export function takeText(dom: Element, selector: string): string {
  const node = queryUnique(dom, selector);
  return node?.textContent ?? "";
}

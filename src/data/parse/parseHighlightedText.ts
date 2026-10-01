export function parseHighlightedText(node: Node): {
  text: string;
  highlights: [number, number][];
} {
  let text = "";
  const highlights = [] as [number, number][];
  for (let p = node.firstChild; p != null; p = p.nextSibling) {
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
  return { text, highlights };
}

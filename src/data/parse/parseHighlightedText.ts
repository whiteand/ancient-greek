export function parseHighlightedTextFromMarkdown(text: string): {
  text: string
  highlights: [number, number][]
} {
  let output = ''
  const highlights = [] as [number, number][]
  const allMatches = text.matchAll(/\*\*(.*?)\*\*/g).toArray()
  let offset = 0

  if (allMatches.length === 0) return { text, highlights: [] }

  for (const match of allMatches) {
    const rawText = match[1]!
    const ind = match.index
    if (ind > offset) {
      output += text.slice(offset, ind)
      offset = ind
    }
    highlights.push([output.length, output.length + rawText.length])
    output += rawText
    offset += match[0].length
  }
  if (offset < text.length) output += text.slice(offset)
  return {
    text: output,
    highlights: highlights,
  }
}
export function parseHighlightedText(node: Node): {
  text: string
  highlights: [number, number][]
} {
  let text = ''
  const highlights = [] as [number, number][]
  for (let p = node.firstChild; p != null; p = p.nextSibling) {
    if (p.nodeType === document.TEXT_NODE) {
      text += p.textContent
      continue
    }
    if (p.nodeType === document.ELEMENT_NODE && p.nodeName === 'STRONG') {
      const start = text.length
      text += p.textContent
      const end = text.length
      highlights.push([start, end])
      continue
    }
    throw new Error('not implemented')
  }
  return { text, highlights }
}

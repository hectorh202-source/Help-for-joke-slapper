import { useMemo } from "react";

/** Parse markdown body and extract h2/h3 headings for TOC */
export function useTableOfContents(body: string) {
  return useMemo(() => {
    const lines = body.split("\n");
    const headings: { id: string; text: string; level: 2 | 3 }[] = [];
    for (const line of lines) {
      const match = line.match(/^(#{2,3})\s+(.+)$/);
      if (match) {
        const level = match[1].length as 2 | 3;
        const text = match[2].trim();
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
        headings.push({ id, text, level });
      }
    }
    return headings;
  }, [body]);
}

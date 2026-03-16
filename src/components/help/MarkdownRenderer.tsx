import React from "react";

/** Simple markdown to JSX renderer for help articles */
export function MarkdownRenderer({ content }: { content: string }) {
  const elements = parseMarkdown(content);
  return <div className="help-prose">{elements}</div>;
}

function parseMarkdown(md: string): React.ReactNode[] {
  const lines = md.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let listItems: { text: string; ordered: boolean }[] = [];
  let listOrdered = false;

  const flushList = () => {
    if (listItems.length === 0) return;
    const Tag = listOrdered ? "ol" : "ul";
    elements.push(
      <Tag key={`list-${elements.length}`}>
        {listItems.map((item, idx) => (
          <li key={idx}>{renderInline(item.text)}</li>
        ))}
      </Tag>
    );
    listItems = [];
  };

  while (i < lines.length) {
    const line = lines[i];

    // Empty line
    if (line.trim() === "") {
      flushList();
      i++;
      continue;
    }

    // YouTube Video Auto-embed (lone URL on a line)
    const ytMatch = line.trim().match(/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})(?:\S+)?$/);
    if (ytMatch) {
      flushList();
      const videoId = ytMatch[1];
      elements.push(
        <div key={`yt-${elements.length}`} className="relative w-[100%] pt-[56.25%] mb-4 rounded-xl overflow-hidden help-card-shadow border border-border">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
      i++;
      continue;
    }

    // Headings
    const headingMatch = line.match(/^(#{1,3})\s+(.+)$/);
    if (headingMatch) {
      flushList();
      const level = headingMatch[1].length;
      const text = headingMatch[2];
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      const Tag = `h${level}` as keyof JSX.IntrinsicElements;
      elements.push(<Tag key={`h-${elements.length}`} id={id}>{renderInline(text)}</Tag>);
      i++;
      continue;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      flushList();
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        quoteLines.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <blockquote key={`bq-${elements.length}`}>
          {quoteLines.map((ql, idx) => (
            <p key={idx}>{renderInline(ql)}</p>
          ))}
        </blockquote>
      );
      continue;
    }

    // Unordered list
    const ulMatch = line.match(/^- (.+)$/);
    if (ulMatch) {
      if (listItems.length > 0 && listOrdered) flushList();
      listOrdered = false;
      listItems.push({ text: ulMatch[1], ordered: false });
      i++;
      continue;
    }

    // Ordered list
    const olMatch = line.match(/^\d+\.\s+(.+)$/);
    if (olMatch) {
      if (listItems.length > 0 && !listOrdered) flushList();
      listOrdered = true;
      listItems.push({ text: olMatch[1], ordered: true });
      i++;
      continue;
    }

    // Paragraph
    flushList();
    elements.push(<p key={`p-${elements.length}`}>{renderInline(line)}</p>);
    i++;
  }

  flushList();
  return elements;
}

function renderInline(text: string): React.ReactNode {
  // Bold, links, inline code
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*(.+?)\*\*)|(\[(.+?)\]\((.+?)\))|(`(.+?)`)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[1]) {
      parts.push(<strong key={key++}>{match[2]}</strong>);
    } else if (match[3]) {
      parts.push(<a key={key++} href={match[5]}>{match[4]}</a>);
    } else if (match[6]) {
      parts.push(
        <code key={key++} className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">
          {match[7]}
        </code>
      );
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length === 1 ? parts[0] : <>{parts}</>;
}

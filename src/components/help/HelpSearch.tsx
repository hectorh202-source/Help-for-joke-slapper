import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useHelp } from "@/contexts/HelpContext";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface HelpSearchProps {
  variant?: "hero" | "compact";
}

export function HelpSearch({ variant = "compact" }: HelpSearchProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const { searchArticles, getSectionPath } = useHelp();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const results = query.length >= 2 ? searchArticles(query).slice(0, 8) : [];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (slug: string) => {
    navigate(`/help/article/${slug}`);
    setQuery("");
    setOpen(false);
  };

  const isHero = variant === "hero";

  return (
    <div ref={containerRef} className="relative w-full">
      <div className={`relative flex items-center ${isHero ? "max-w-2xl mx-auto" : ""}`}>
        <Search className={`absolute left-4 text-muted-foreground ${isHero ? "h-5 w-5" : "h-4 w-4"}`} />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          placeholder="Search help articles..."
          className={`w-full bg-background border border-border rounded-xl pl-11 pr-20 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-200 ${
            isHero ? "h-14 text-base" : "h-10 text-sm"
          }`}
        />
        <div className="absolute right-3 flex items-center gap-1.5">
          {query && (
            <button onClick={() => { setQuery(""); inputRef.current?.focus(); }} className="p-1 rounded hover:bg-muted">
              <X className="h-3.5 w-3.5 text-muted-foreground" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex h-5 items-center gap-0.5 rounded border bg-muted px-1.5 text-[10px] font-medium text-muted-foreground">
            ⌘K
          </kbd>
        </div>
      </div>

      <AnimatePresence>
        {open && query.length >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className={`absolute z-50 mt-2 w-full bg-background rounded-xl border help-search-overlay ${isHero ? "max-w-2xl left-1/2 -translate-x-1/2" : ""}`}
          >
            {results.length === 0 ? (
              <div className="p-6 text-center text-muted-foreground text-sm">
                No results found for "{query}"
              </div>
            ) : (
              <div className="py-2 max-h-[400px] overflow-y-auto">
                {results.map((article) => {
                  const path = getSectionPath(article.sectionId);
                  return (
                    <button
                      key={article.id}
                      onClick={() => handleSelect(article.slug)}
                      className="w-full text-left px-4 py-3 hover:bg-muted/50 transition-colors duration-150"
                    >
                      <div className="text-sm font-medium text-foreground">{article.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {path.map(s => s.title).join(" → ")}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

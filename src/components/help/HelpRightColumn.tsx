import { useTableOfContents } from "@/hooks/useTableOfContents";
import { Link2, Flag, MessageCircle } from "lucide-react";
import { toast } from "sonner";

interface HelpRightColumnProps {
  body: string;
  articleId: string;
  articleSlug: string;
}

export function HelpRightColumn({ body, articleId, articleSlug }: HelpRightColumnProps) {
  const headings = useTableOfContents(body);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.origin + `/help/article/${articleSlug}`);
    toast.success("Link copied!");
  };

  return (
    <aside className="w-[240px] shrink-0 sticky top-16 h-fit hidden xl:block">
      {headings.length > 0 && (
        <div className="mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">On this page</h4>
          <nav className="space-y-1">
            {headings.map(h => (
              <a
                key={h.id}
                href={`#${h.id}`}
                className={`block text-sm transition-colors duration-150 hover:text-foreground ${
                  h.level === 3 ? "pl-3 text-muted-foreground" : "text-muted-foreground font-medium"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {h.text}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Quick actions */}
      <div className="space-y-1">
        <button onClick={copyLink} className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors">
          <Link2 className="h-3.5 w-3.5" /> Copy link
        </button>
        <button onClick={() => toast.info("Report submitted")} className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors">
          <Flag className="h-3.5 w-3.5" /> Report issue
        </button>
        <button onClick={() => toast.info("Opening support...")} className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors">
          <MessageCircle className="h-3.5 w-3.5" /> Contact support
        </button>
      </div>
    </aside>
  );
}

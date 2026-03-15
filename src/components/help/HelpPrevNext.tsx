import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PrevNextProps {
  prev?: { title: string; slug: string } | null;
  next?: { title: string; slug: string } | null;
}

export function HelpPrevNext({ prev, next }: PrevNextProps) {
  return (
    <div className="flex justify-between items-center mt-12 pt-6 border-t border-border">
      {prev ? (
        <Link to={`/help/article/${prev.slug}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ChevronLeft className="h-4 w-4" />
          <div>
            <div className="text-xs text-muted-foreground">Previous</div>
            <div className="font-medium text-foreground">{prev.title}</div>
          </div>
        </Link>
      ) : <div />}
      {next ? (
        <Link to={`/help/article/${next.slug}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors text-right">
          <div>
            <div className="text-xs text-muted-foreground">Next</div>
            <div className="font-medium text-foreground">{next.title}</div>
          </div>
          <ChevronRight className="h-4 w-4" />
        </Link>
      ) : <div />}
    </div>
  );
}

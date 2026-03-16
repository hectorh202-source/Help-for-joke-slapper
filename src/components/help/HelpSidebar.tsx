import { useHelp } from "@/contexts/HelpContext";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { HelpSection } from "@/types/help";
import { motion, AnimatePresence } from "framer-motion";
import { HelpSearch } from "./HelpSearch";
import * as Icons from "lucide-react";

function getIcon(name: string) {
  const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name];
  return Icon || Icons.FileText;
}

interface SidebarItemProps {
  section: HelpSection;
  depth: number;
  activeSlug?: string;
}

function SidebarItem({ section, depth, activeSlug }: SidebarItemProps) {
  const { getChildSections, getArticlesForSection } = useHelp();
  const navigate = useNavigate();

  if (section.slug === "introduction") {
    const isIntroActive = activeSlug === "what-is-joke-slapper";
    const Icon = getIcon(section.icon);
    return (
      <div className="mb-2">
        <button
          onClick={() => navigate("/help/article/what-is-joke-slapper")}
          className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
            isIntroActive
              ? "bg-help-sidebar-active text-help-sidebar-active-text font-medium border-l-2 border-primary"
              : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
          }`}
        >
          <Icon className="h-4 w-4 shrink-0" />
          <span className="truncate flex-1 text-left">{section.title}</span>
        </button>
      </div>
    );
  }

  const children = getChildSections(section.id);
  const articles = getArticlesForSection(section.id);
  const hasChildren = children.length > 0 || articles.length > 0;
  const isActive = activeSlug === section.slug;
  const isArticleActive = articles.some(a => a.slug === activeSlug);
  const isChildActive = children.some(c => c.slug === activeSlug) || isArticleActive;
  const [expanded, setExpanded] = useState(isActive || isChildActive);

  useEffect(() => {
    if (isActive || isChildActive) {
      setExpanded(true);
    }
  }, [activeSlug, isActive, isChildActive]);

  const Icon = getIcon(section.icon);

  return (
    <div>
      <button
        onClick={() => {
          if (hasChildren) setExpanded(!expanded);
          navigate(`/help/${section.slug}`);
        }}
        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
          isActive
            ? "bg-help-sidebar-active text-help-sidebar-active-text font-medium border-l-2 border-primary"
            : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
        } ${depth > 0 ? "pl-8" : ""}`}
      >
        <Icon className="h-4 w-4 shrink-0" />
        <span className="truncate flex-1 text-left">{section.title}</span>
        {hasChildren && (
          <ChevronRight className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${expanded ? "rotate-90" : ""}`} />
        )}
      </button>

      <AnimatePresence initial={false}>
        {expanded && hasChildren && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {children.map(child => (
              <SidebarItem key={child.id} section={child} depth={depth + 1} activeSlug={activeSlug} />
            ))}
            {articles.map(article => (
              <button
                key={article.id}
                onClick={() => navigate(`/help/article/${article.slug}`)}
                className={`w-full text-left px-3 py-1.5 pl-12 text-sm rounded-lg transition-all duration-200 ${
                  activeSlug === article.slug
                    ? "bg-help-sidebar-active text-help-sidebar-active-text font-medium"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                }`}
              >
                {article.title}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function HelpSidebar({ activeSlug }: { activeSlug?: string }) {
  const { getChildSections } = useHelp();
  const topSections = getChildSections(null);

  return (
    <nav className="w-[280px] shrink-0 sticky top-0 h-screen overflow-y-auto bg-help-sidebar border-r border-border flex flex-col lg:flex hidden lg:block">
      <div className="p-4 flex-1">
        <div className="mb-4 space-y-4">
          <button
            onClick={() => window.location.href = "/help"}
            className="text-lg font-semibold text-foreground tracking-tight"
          >
            Joke Slapper Help
          </button>
          <HelpSearch variant="compact" />
        </div>
        <div className="space-y-0.5">
          {topSections.map(section => (
            <SidebarItem key={section.id} section={section} depth={0} activeSlug={activeSlug} />
          ))}
        </div>
      </div>
      <div className="p-4 border-t border-border mt-auto">
        <Link to="/admin/help" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Admin Dashboard
        </Link>
      </div>
    </nav>
  );
}

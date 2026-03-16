import { ReactNode } from "react";
import { HelpSidebar } from "./HelpSidebar";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface HelpLayoutProps {
  children: ReactNode;
  activeSlug?: string;
}

export function HelpLayout({ children, activeSlug }: HelpLayoutProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-[1440px] mx-auto px-6 h-14 flex items-center gap-4 relative">
          <button className="lg:hidden p-2 rounded-lg hover:bg-muted z-10" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
            {mobileNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link to="/help" className="text-base font-semibold text-foreground whitespace-nowrap z-10">
            Joke Slapper Help
          </Link>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto flex">
        {/* Mobile sidebar overlay */}
        {mobileNavOpen && (
          <div className="fixed inset-0 z-30 lg:hidden">
            <div className="absolute inset-0 bg-foreground/20" onClick={() => setMobileNavOpen(false)} />
            <div className="relative w-[280px] h-full bg-background shadow-xl overflow-y-auto">
              <HelpSidebar activeSlug={activeSlug} />
            </div>
          </div>
        )}

        {/* Desktop sidebar */}
        <HelpSidebar activeSlug={activeSlug} />

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {children}
        </div>
      </div>
    </div>
  );
}

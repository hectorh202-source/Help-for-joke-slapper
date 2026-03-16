import { ReactNode } from "react";
import { HelpSidebar } from "./HelpSidebar";
import { Link } from "react-router-dom";
import { Menu, X, Loader2 } from "lucide-react";
import { useState } from "react";
import { useHelp } from "@/contexts/HelpContext";

interface HelpLayoutProps {
  children: ReactNode;
  activeSlug?: string;
}

export function HelpLayout({ children, activeSlug }: HelpLayoutProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { isLoading } = useHelp();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <Loader2 className="h-8 w-8 text-primary animate-spin mb-4" />
        <p className="text-muted-foreground font-medium animate-pulse">Loading help center...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative">
      <button 
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border help-card-shadow" 
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        {mobileNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

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
        <div className="hidden lg:block">
          <HelpSidebar activeSlug={activeSlug} />
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0 pt-16 lg:pt-0">
          {children}
        </div>
      </div>
    </div>
  );
}

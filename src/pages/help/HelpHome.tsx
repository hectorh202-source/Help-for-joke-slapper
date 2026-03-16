import { HelpSearch } from "@/components/help/HelpSearch";
import { useHelp } from "@/contexts/HelpContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";

function getIcon(name: string) {
  const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name];
  return Icon || Icons.FileText;
}

const sectionDescriptions: Record<string, string> = {
  "getting-started": "New here? Learn the basics and start creating jokes in minutes.",
  "writing-jokes": "Techniques for writing better prompts and getting funnier results.",
  "the-builder": "Develop raw ideas into polished, performance-ready material.",
  "managing-material": "Save, organize, and find your jokes with folders and tags.",
  "voice-profiles": "Customize the tone and style of your generated jokes.",
  "account-billing": "Manage your account, subscription, and payment details.",
  "settings": "Customize how Joke Slapper looks and works for you.",
  "troubleshooting": "Quick fixes for common issues and questions.",
};

const HelpHome = () => {
  const { getChildSections, articles } = useHelp();
  const topSections = getChildSections(null).filter(s => s.slug !== "introduction");
  const popularArticles = articles.filter(a => a.isPopular && a.isPublished).slice(0, 6);
  const gettingStartedArticles = articles.filter(a => a.sectionId === "getting-started" && a.isPublished).slice(0, 4);
  const troubleshootingArticles = articles.filter(a => a.sectionId === "troubleshooting" && a.isPublished).slice(0, 4);

  return (
    <div className="min-h-screen bg-background relative">
      <Link 
        to="/admin/help" 
        className="absolute top-4 right-4 z-50 text-sm text-muted-foreground hover:text-foreground transition-colors hidden lg:block"
      >
        Admin
      </Link>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
        className="bg-help-sidebar py-20 border-b border-border"
      >
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground mb-3" style={{ letterSpacing: "-0.03em" }}>
            👋Joke Slapper Help Center
          </h1>
          <p className="text-muted-foreground mb-8 text-lg max-w-xl mx-auto">
            Search our knowledge base or browse topics below to find answers quickly.
          </p>
          <HelpSearch variant="hero" />
        </div>
      </motion.section>

      <div className="max-w-[1440px] mx-auto px-6 py-12">

        {/* Categories grid */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-foreground mb-6">Browse by topic</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topSections.map((section, i) => {
              const Icon = getIcon(section.icon);
              const desc = sectionDescriptions[section.id] || "";
              const articleCount = articles.filter(a => a.sectionId === section.id && a.isPublished).length;
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04, ease: [0.2, 0, 0, 1] }}
                >
                  <Link
                    to={`/help/${section.slug}`}
                    className="block p-5 rounded-xl border help-card-shadow hover:shadow-md transition-all duration-200 group h-full"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors mb-1">{section.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    <span className="text-xs text-muted-foreground mt-2 inline-block">{articleCount} articles</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Two-column: Getting Started + Troubleshooting */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Getting Started */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">Getting Started</h2>
              <Link to="/help/getting-started" className="text-sm text-primary hover:underline flex items-center gap-1">
                View all <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="space-y-1">
              {gettingStartedArticles.map(article => (
                <Link
                  key={article.id}
                  to={`/help/article/${article.slug}`}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-150 group"
                >
                  <Icons.FileText className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{article.title}</div>
                    <div className="text-xs text-muted-foreground truncate">{article.summary}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Troubleshooting */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">Troubleshooting</h2>
              <Link to="/help/troubleshooting" className="text-sm text-primary hover:underline flex items-center gap-1">
                View all <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="space-y-1">
              {troubleshootingArticles.map(article => (
                <Link
                  key={article.id}
                  to={`/help/article/${article.slug}`}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-150 group"
                >
                  <Icons.FileText className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{article.title}</div>
                    <div className="text-xs text-muted-foreground truncate">{article.summary}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Popular articles */}
        {popularArticles.length > 0 && (
          <section className="mb-16">
            <h2 className="text-lg font-semibold text-foreground mb-4">Popular articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularArticles.map(article => (
                <Link
                  key={article.id}
                  to={`/help/article/${article.slug}`}
                  className="block p-5 rounded-xl border help-card-shadow hover:shadow-md transition-all duration-200 group"
                >
                  <h3 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{article.summary}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
        <section className="text-center py-10 border-t border-border">
          <p className="text-muted-foreground mb-2">Can't find what you're looking for?</p>
          <a href="mailto:support@jokeslapper.com" className="text-primary hover:underline text-sm font-medium">
            Contact our support team
          </a>
        </section>
      </div>
    </div>
  );
};

export default HelpHome;

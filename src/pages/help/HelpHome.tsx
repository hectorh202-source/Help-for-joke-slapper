import { HelpSearch } from "@/components/help/HelpSearch";
import { useHelp } from "@/contexts/HelpContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

function getIcon(name: string) {
  const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name];
  return Icon || Icons.FileText;
}

const HelpHome = () => {
  const { getChildSections, articles } = useHelp();
  const topSections = getChildSections(null);
  const featuredArticles = articles.filter(a => a.isFeatured && a.isPublished);
  const popularArticles = articles.filter(a => a.isPopular && a.isPublished);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-[1440px] mx-auto px-6 h-14 flex items-center">
          <Link to="/help" className="text-base font-semibold text-foreground">Help Center</Link>
        </div>
      </header>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
        className="bg-help-sidebar py-20 border-b border-border"
      >
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground mb-3" style={{ letterSpacing: "-0.03em" }}>
            How can we help you today?
          </h1>
          <p className="text-muted-foreground mb-8 text-lg">Search our help center or browse categories below</p>
          <HelpSearch variant="hero" />
        </div>
      </motion.section>

      <div className="max-w-[1440px] mx-auto px-6 py-12">
        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-foreground mb-6">Browse by category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topSections.map((section, i) => {
              const Icon = getIcon(section.icon);
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05, ease: [0.2, 0, 0, 1] }}
                >
                  <Link
                    to={`/help/${section.slug}`}
                    className="block p-5 rounded-xl border help-card-shadow hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">{section.title}</h3>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Featured */}
        {featuredArticles.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xl font-semibold text-foreground mb-6">Getting started</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredArticles.map(article => (
                <Link
                  key={article.id}
                  to={`/help/article/${article.slug}`}
                  className="block p-5 rounded-xl border help-card-shadow hover:shadow-md transition-all duration-200"
                >
                  <h3 className="font-medium text-foreground mb-1">{article.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{article.summary}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Popular */}
        {popularArticles.length > 0 && (
          <section className="mb-16">
            <h2 className="text-xl font-semibold text-foreground mb-6">Popular articles</h2>
            <div className="space-y-2">
              {popularArticles.map(article => (
                <Link
                  key={article.id}
                  to={`/help/article/${article.slug}`}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-150"
                >
                  <Icons.FileText className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-foreground">{article.title}</div>
                    <div className="text-xs text-muted-foreground">{article.summary}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default HelpHome;

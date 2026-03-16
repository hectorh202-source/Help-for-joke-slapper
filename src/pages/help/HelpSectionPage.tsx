import { useParams, Link } from "react-router-dom";
import { useHelp } from "@/contexts/HelpContext";
import { HelpLayout } from "@/components/help/HelpLayout";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import * as Icons from "lucide-react";

function getIcon(name: string) {
  const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name];
  return Icon || Icons.FileText;
}

const HelpSectionPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getSection, getChildSections, getArticlesForSection, sections } = useHelp();
  const section = getSection(slug || "");

  if (!section) {
    return (
      <HelpLayout>
        <div className="py-16 px-12 text-center">
          <h1 className="text-2xl font-semibold text-foreground mb-2">Section not found</h1>
          <Link to="/help" className="text-primary hover:underline">Back to Help Center</Link>
        </div>
      </HelpLayout>
    );
  }

  const childSections = getChildSections(section.id);
  const sectionArticles = getArticlesForSection(section.id);

  // Also get articles from child sections
  const childArticles = childSections.flatMap(cs => getArticlesForSection(cs.id));

  return (
    <HelpLayout activeSlug={section.slug}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
        className="py-10 px-6 lg:px-12 max-w-[900px]"
      >
        <h1 className="text-4xl font-semibold tracking-tight text-foreground mb-2" style={{ letterSpacing: "-0.03em" }}>
          {section.title}
        </h1>
        <p className="text-muted-foreground mb-10">Browse articles in this section</p>

        {/* Subsections */}
        {childSections.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {childSections.map(cs => {
              const Icon = getIcon(cs.icon);
              const articleCount = getArticlesForSection(cs.id).length;
              return (
                <Link
                  key={cs.id}
                  to={`/help/${cs.slug}`}
                  className="p-5 rounded-xl border help-card-shadow hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="h-5 w-5 text-primary" />
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">{cs.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{articleCount} article{articleCount !== 1 ? "s" : ""}</p>
                </Link>
              );
            })}
          </div>
        )}

        {/* Direct articles */}
        {sectionArticles.length > 0 && (
          <div className="space-y-2">
            {sectionArticles.map(article => (
              <Link
                key={article.id}
                to={`/help/article/${article.slug}`}
                className="flex items-start gap-3 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-150 group"
              >
                <FileText className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
                <div>
                  <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{article.title}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{article.summary}</div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* If no direct articles and no subsections with articles */}
        {sectionArticles.length === 0 && childArticles.length === 0 && childSections.length === 0 && (
          <p className="text-muted-foreground">No articles in this section yet.</p>
        )}
      </motion.div>
    </HelpLayout>
  );
};

export default HelpSectionPage;

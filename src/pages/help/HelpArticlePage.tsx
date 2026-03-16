import { useParams, Link } from "react-router-dom";
import { useMemo } from "react";
import { useHelp } from "@/contexts/HelpContext";
import { HelpLayout } from "@/components/help/HelpLayout";
import { HelpRightColumn } from "@/components/help/HelpRightColumn";
import { HelpPrevNext } from "@/components/help/HelpPrevNext";
import { MarkdownRenderer } from "@/components/help/MarkdownRenderer";
import { motion } from "framer-motion";

const HelpArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getArticle, sections, articles, getChildSections, getArticlesForSection } = useHelp();
  const article = getArticle(slug || "");

  if (!article) {
    return (
      <HelpLayout>
        <div className="py-16 px-12 text-center">
          <h1 className="text-2xl font-semibold text-foreground mb-2">Article not found</h1>
          <p className="text-muted-foreground mb-4">The article you're looking for doesn't exist.</p>
          <Link to="/help" className="text-primary hover:underline">Back to Help Center</Link>
        </div>
      </HelpLayout>
    );
  }

  // Globally order all published articles exactly how they appear in the Sidebar
  const orderedArticles = useMemo(() => {
    const ordered: typeof articles = [];
    
    // Add introduction article first
    const intro = getArticle("what-is-joke-slapper");
    if (intro && intro.isPublished) {
      ordered.push(intro);
    }

    const traverse = (sectionsToTraverse: typeof sections) => {
      for (const section of sectionsToTraverse) {
        if (section.slug === "introduction") continue;

        const children = getChildSections(section.id);
        traverse(children);

        const sectionArticles = getArticlesForSection(section.id);
        ordered.push(...sectionArticles);
      }
    };

    traverse(getChildSections(null));
    
    return Array.from(new Set(ordered));
  }, [sections, articles, getChildSections, getArticlesForSection, getArticle]);

  const currentIdx = orderedArticles.findIndex(a => a.id === article.id);
  
  const prev: typeof article | null = currentIdx > 0 ? orderedArticles[currentIdx - 1] : null;
  const next: typeof article | null = currentIdx !== -1 && currentIdx < orderedArticles.length - 1 ? orderedArticles[currentIdx + 1] : null;

  return (
    <HelpLayout activeSlug={article.slug}>
      <div className="flex gap-8">
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
          className="flex-1 min-w-0 max-w-[720px] py-10 px-6 lg:px-12"
        >
          <h1 className="text-4xl font-semibold tracking-tight text-foreground mb-8" style={{ letterSpacing: "-0.03em" }}>
            {article.title}
          </h1>
          <MarkdownRenderer content={article.body} />
          <HelpPrevNext prev={prev} next={next} />
          
          <div className="mt-8 pt-6 border-t text-sm text-muted-foreground">
            Last updated: {new Date(article.updatedAt).toLocaleDateString()}
          </div>
        </motion.article>

        <div className="py-10 pr-6">
          <HelpRightColumn body={article.body} articleId={article.id} articleSlug={article.slug} />
        </div>
      </div>
    </HelpLayout>
  );
};

export default HelpArticlePage;

import { useParams, Link } from "react-router-dom";
import { useHelp } from "@/contexts/HelpContext";
import { HelpLayout } from "@/components/help/HelpLayout";
import { HelpRightColumn } from "@/components/help/HelpRightColumn";
import { HelpPrevNext } from "@/components/help/HelpPrevNext";
import { MarkdownRenderer } from "@/components/help/MarkdownRenderer";
import { motion } from "framer-motion";

const HelpArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getArticle, articles } = useHelp();
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



  // Find prev/next
  let prev: typeof article | null = null;
  let next: typeof article | null = null;

  if (article.slug === "what-is-joke-slapper") {
    // Special case for the intro article, next is the first getting-started article
    next = articles.find(a => a.sectionId === "getting-started" && a.sortOrder === 1 && a.isPublished) || null;
  } else {
    const sameSection = articles.filter(a => a.sectionId === article.sectionId && a.isPublished).sort((a, b) => a.sortOrder - b.sortOrder);
    const currentIdx = sameSection.findIndex(a => a.id === article.id);
    
    // Special case for the first article in getting-started to link back to the intro
    if (article.sectionId === "getting-started" && currentIdx === 0) {
      prev = articles.find(a => a.slug === "what-is-joke-slapper") || null;
    } else {
      prev = currentIdx > 0 ? sameSection[currentIdx - 1] : null;
    }
    
    next = currentIdx < sameSection.length - 1 ? sameSection[currentIdx + 1] : null;
  }

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
        </motion.article>

        <div className="py-10 pr-6">
          <HelpRightColumn body={article.body} articleId={article.id} articleSlug={article.slug} />
        </div>
      </div>
    </HelpLayout>
  );
};

export default HelpArticlePage;

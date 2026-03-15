import { useParams, Link } from "react-router-dom";
import { useHelp } from "@/contexts/HelpContext";
import { HelpLayout } from "@/components/help/HelpLayout";
import { HelpBreadcrumbs } from "@/components/help/HelpBreadcrumbs";
import { HelpRightColumn } from "@/components/help/HelpRightColumn";
import { HelpPrevNext } from "@/components/help/HelpPrevNext";
import { MarkdownRenderer } from "@/components/help/MarkdownRenderer";
import { useReadingTime, useTimeAgo } from "@/hooks/useHelpUtils";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const HelpArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getArticle, getSectionPath, articles } = useHelp();
  const article = getArticle(slug || "");

  const readingTime = useReadingTime(article?.body || "");
  const timeAgo = useTimeAgo(article?.updatedAt || "");

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

  const sectionPath = getSectionPath(article.sectionId);
  const breadcrumbs: { label: string; href?: string }[] = sectionPath.map(s => ({ label: s.title, href: `/help/${s.slug}` }));
  breadcrumbs.push({ label: article.title });

  // Find prev/next
  const sameSection = articles.filter(a => a.sectionId === article.sectionId && a.isPublished).sort((a, b) => a.sortOrder - b.sortOrder);
  const currentIdx = sameSection.findIndex(a => a.id === article.id);
  const prev = currentIdx > 0 ? sameSection[currentIdx - 1] : null;
  const next = currentIdx < sameSection.length - 1 ? sameSection[currentIdx + 1] : null;

  return (
    <HelpLayout activeSlug={article.slug}>
      <div className="flex gap-8">
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
          className="flex-1 min-w-0 max-w-[720px] py-10 px-6 lg:px-12"
        >
          <HelpBreadcrumbs items={breadcrumbs} />
          <h1 className="text-4xl font-semibold tracking-tight text-foreground mb-3" style={{ letterSpacing: "-0.03em" }}>
            {article.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-8">
            <Clock className="h-3.5 w-3.5" />
            <span>Last updated {timeAgo}</span>
            <span>·</span>
            <span>{readingTime}</span>
          </div>
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

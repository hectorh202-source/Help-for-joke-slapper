import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useHelp } from "@/contexts/HelpContext";
import { HelpArticle } from "@/types/help";
import { ArrowLeft, Eye, Save } from "lucide-react";
import { toast } from "sonner";
import { MarkdownRenderer } from "@/components/help/MarkdownRenderer";
import { supabase } from "@/lib/supabaseClient";

const AdminArticleEditor = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { articles, sections, setArticles, isAdmin } = useHelp();
  const isNew = id === "new";

  const existing = !isNew ? articles.find(a => a.id === id) : null;

  const [title, setTitle] = useState(existing?.title || "");
  const [slug, setSlug] = useState(existing?.slug || "");
  const [summary, setSummary] = useState(existing?.summary || "");
  const [body, setBody] = useState(existing?.body || "");
  const [sectionId, setSectionId] = useState(existing?.sectionId || sections[0]?.id || "");
  const [isPublished, setIsPublished] = useState(existing?.isPublished ?? false);
  const [isFeatured, setIsFeatured] = useState(existing?.isFeatured ?? false);
  const [isPopular, setIsPopular] = useState(existing?.isPopular ?? false);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    if (!title && !isNew) return;
    if (isNew) {
      setSlug(title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""));
    }
  }, [title, isNew]);

  if (!isAdmin) {
    navigate("/admin/help");
    return null;
  }

  const handleSave = async () => {
    if (!title.trim()) {
      toast.error("Title is required");
      return;
    }
    if (!sectionId) {
      toast.error("Please select a section");
      return;
    }

    const now = new Date().toISOString();
    if (isNew) {
      const newId = crypto.randomUUID();
      const newArticle: HelpArticle = {
        id: newId,
        title,
        slug,
        summary,
        body,
        sectionId,
        sortOrder: articles.filter(a => a.sectionId === sectionId).length,
        isPublished,
        isFeatured,
        isPopular,
        createdAt: now,
        updatedAt: now,
      };

      setArticles(prev => [...prev, newArticle]);

      const { error } = await supabase.from("help_articles").insert(newArticle);
      if (error) {
        // eslint-disable-next-line no-console
        console.error("Error creating article", error);
        toast.error("Failed to save article to the database.");
        return;
      }

      toast.success("Article created!");
    } else {
      setArticles(prev => prev.map(a => a.id === id ? {
        ...a,
        title,
        slug,
        summary,
        body,
        sectionId,
        isPublished,
        isFeatured,
        isPopular,
        updatedAt: now,
      } : a));

      const { error } = await supabase
        .from("help_articles")
        .update({
          title,
          slug,
          summary,
          body,
          sectionId,
          isPublished,
          isFeatured,
          isPopular,
          updatedAt: now,
        })
        .eq("id", id!);

      if (error) {
        // eslint-disable-next-line no-console
        console.error("Error updating article", error);
        toast.error("Failed to update article in the database.");
        return;
      }

      toast.success("Article saved!");
    }
    navigate("/admin/help");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate("/admin/help")} className="p-1.5 rounded-lg hover:bg-muted">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <h1 className="text-base font-semibold text-foreground">{isNew ? "New Article" : "Edit Article"}</h1>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setPreview(!preview)} className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg border text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Eye className="h-4 w-4" /> {preview ? "Edit" : "Preview"}
            </button>
            <button onClick={handleSave} className="inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
              <Save className="h-4 w-4" /> Save
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {preview ? (
          <div className="max-w-[720px]">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground mb-4" style={{ letterSpacing: "-0.03em" }}>{title}</h1>
            {summary && <p className="text-muted-foreground mb-6">{summary}</p>}
            <MarkdownRenderer content={body} />
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Title</label>
              <input
                type="text" value={title} onChange={e => setTitle(e.target.value)}
                className="w-full h-10 px-3 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="Article title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Slug</label>
              <input
                type="text" value={slug} onChange={e => setSlug(e.target.value)}
                className="w-full h-10 px-3 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="article-slug"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Section</label>
              <select
                value={sectionId} onChange={e => setSectionId(e.target.value)}
                className="w-full h-10 px-3 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                {sections.map(s => (
                  <option key={s.id} value={s.id}>{s.parentId ? "  └ " : ""}{s.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Summary</label>
              <input
                type="text" value={summary} onChange={e => setSummary(e.target.value)}
                className="w-full h-10 px-3 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="Brief description"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Body (Markdown)</label>
              <textarea
                value={body} onChange={e => setBody(e.target.value)}
                rows={20}
                className="w-full px-3 py-2 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 font-mono leading-relaxed resize-y"
                placeholder="Write your article content here using Markdown..."
              />
            </div>
            <div className="flex flex-wrap gap-6">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={isPublished} onChange={e => setIsPublished(e.target.checked)} className="rounded" />
                Published
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={isFeatured} onChange={e => setIsFeatured(e.target.checked)} className="rounded" />
                Featured
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" checked={isPopular} onChange={e => setIsPopular(e.target.checked)} className="rounded" />
                Popular
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Status bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t border-border">
        <div className="max-w-4xl mx-auto px-6 h-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={isPublished} onChange={e => setIsPublished(e.target.checked)} className="rounded" />
              {isPublished ? "Published" : "Draft"}
            </label>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setPreview(!preview)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {preview ? "Edit" : "Preview"}
            </button>
            <button onClick={handleSave} className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminArticleEditor;

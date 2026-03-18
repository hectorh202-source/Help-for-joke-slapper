import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useHelp } from "@/contexts/HelpContext";
import { HelpSection, HelpArticle } from "@/types/help";
import { ArrowLeft, Save, Plus } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabaseClient";

const ICON_OPTIONS = [
  "Rocket", "Zap", "FileText", "CreditCard", "User", "DollarSign", "Smile",
  "Wrench", "Mic", "FolderOpen", "Settings", "AlertCircle", "BookOpen", "Star",
  "Heart", "Shield", "Globe", "Mail",
];

const AdminSectionEditor = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { sections, setSections, articles, setArticles, isAdmin, isLoading } = useHelp();
  const isNew = id === "new";

  const existing = !isNew ? sections.find(s => s.id === id) : null;

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [icon, setIcon] = useState("FileText");
  const [parentId, setParentId] = useState<string | null>(null);
  const [isPublished, setIsPublished] = useState(true);

  useEffect(() => {
    if (existing) {
      setTitle(existing.title);
      setSlug(existing.slug);
      setIcon(existing.icon);
      setParentId(existing.parentId);
      setIsPublished(existing.isPublished);
    }
  }, [existing]);

  useEffect(() => {
    if (isNew && title) {
      setSlug(title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""));
    }
  }, [title, isNew]);

  useEffect(() => {
    if (!isLoading && !isAdmin) {
      navigate("/admin/help");
    }
  }, [isLoading, isAdmin, navigate]);

  if (isLoading) {
    return <div className="min-h-screen bg-background flex items-center justify-center"><p className="text-muted-foreground animate-pulse">Loading...</p></div>;
  }

  if (!isAdmin) {
    return null;
  }

  const topSections = sections.filter(s => s.parentId === null && s.id !== id);
  const sectionArticles = articles.filter(a => a.sectionId === id).sort((a, b) => a.sortOrder - b.sortOrder);

  const moveArticle = async (articleId: string, direction: "up" | "down") => {
    let updates: { id: string; sortOrder: number }[] = [];

    setArticles(prev => {
      const article = prev.find(a => a.id === articleId);
      if (!article) return prev;
      
      const siblings = prev
        .filter(a => a.sectionId === article.sectionId)
        .sort((a, b) => a.sortOrder - b.sortOrder);
        
      const idx = siblings.findIndex(a => a.id === articleId);
      if ((direction === "up" && idx === 0) || (direction === "down" && idx === siblings.length - 1)) return prev;
      
      const swapIdx = direction === "up" ? idx - 1 : idx + 1;
      
      const newSiblings = [...siblings];
      [newSiblings[idx], newSiblings[swapIdx]] = [newSiblings[swapIdx], newSiblings[idx]];
      
      newSiblings.forEach((a, index) => {
        a.sortOrder = index;
      });

      updates = newSiblings.map(a => ({ id: a.id, sortOrder: a.sortOrder }));

      return prev.map(a => {
        const updated = updates.find(u => u.id === a.id);
        return updated ? { ...a, sortOrder: updated.sortOrder } : a;
      });
    });

    if (updates.length === 0) return;

    const promises = updates.map(u => 
      supabase.from("help_articles").update({ sort_order: u.sortOrder }).eq("id", u.id)
    );

    const results = await Promise.all(promises);
    const hasError = results.some(r => r.error);
    if (hasError) {
      // eslint-disable-next-line no-console
      console.error("Error updating article sort orders", results.filter(r => r.error));
    }
  };

  const handleSave = async () => {
    if (!title.trim()) {
      toast.error("Title is required");
      return;
    }
    const now = new Date().toISOString();
    if (isNew) {
      const newId = crypto.randomUUID();
      const newSection: HelpSection = {
        id: newId,
        title,
        slug,
        icon,
        parentId,
        sortOrder: sections.filter(s => s.parentId === parentId).length,
        isPublished,
        createdAt: now,
        updatedAt: now,
      };

      setSections(prev => [...prev, newSection]);

      const { error } = await supabase.from("help_sections").insert({
        id: newSection.id,
        title: newSection.title,
        slug: newSection.slug,
        icon: newSection.icon,
        parent_id: newSection.parentId,
        sort_order: newSection.sortOrder,
        is_published: newSection.isPublished,
        created_at: newSection.createdAt,
        updated_at: newSection.updatedAt,
      });
      if (error) {
        // eslint-disable-next-line no-console
        console.error("Error creating section", error);
        toast.error("Failed to save section to the database.");
        return;
      }

      toast.success("Section created!");
    } else {
      setSections(prev => prev.map(s => s.id === id ? {
        ...s,
        title,
        slug,
        icon,
        parentId,
        isPublished,
        updatedAt: now,
      } : s));

      const { error } = await supabase
        .from("help_sections")
        .update({
          title,
          slug,
          icon,
          parent_id: parentId,
          is_published: isPublished,
          updated_at: now,
        })
        .eq("id", id!);

      if (error) {
        // eslint-disable-next-line no-console
        console.error("Error updating section", error);
        toast.error("Failed to update section in the database.");
        return;
      }

      toast.success("Section saved!");
    }
    navigate("/admin/help");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate("/admin/help")} className="p-1.5 rounded-lg hover:bg-muted">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <h1 className="text-base font-semibold text-foreground">{isNew ? "New Section" : "Edit Section"}</h1>
          </div>
          <button onClick={handleSave} className="inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
            <Save className="h-4 w-4" /> Save
          </button>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-8 space-y-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Title</label>
          <input
            type="text" value={title} onChange={e => setTitle(e.target.value)}
            className="w-full h-10 px-3 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
            placeholder="Section title"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Slug</label>
          <input
            type="text" value={slug} onChange={e => setSlug(e.target.value)}
            className="w-full h-10 px-3 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
            placeholder="section-slug"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Icon</label>
          <select
            value={icon} onChange={e => setIcon(e.target.value)}
            className="w-full h-10 px-3 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            {ICON_OPTIONS.map(name => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Parent Section</label>
          <select
            value={parentId || ""} onChange={e => setParentId(e.target.value || null)}
            className="w-full h-10 px-3 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option value="">None (top-level)</option>
            {topSections.map(s => (
              <option key={s.id} value={s.id}>{s.title}</option>
            ))}
          </select>
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={isPublished} onChange={e => setIsPublished(e.target.checked)} className="rounded" />
          Published
        </label>
        
        {!isNew && (
          <div className="pt-8 mt-8 border-t border-border">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">Articles in this Section</h2>
              <button 
                onClick={() => navigate("/admin/help/article/new")} 
                className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline hover:text-primary/80 transition-colors"
              >
                <Plus className="h-4 w-4" /> Add Article
              </button>
            </div>
            {sectionArticles.length > 0 ? (
              <div className="border border-border rounded-xl overflow-hidden divide-y divide-border">
                {sectionArticles.map(article => (
                  <div key={article.id} className="flex items-center justify-between p-4 bg-background hover:bg-muted/30 transition-colors">
                    <div>
                      <div className="font-medium text-sm text-foreground flex items-center gap-2">
                        {article.title}
                        {!article.isPublished && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-100 text-amber-700">Draft</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button onClick={() => moveArticle(article.id, "up")} className="p-1.5 rounded hover:bg-muted text-muted-foreground" title="Move up">↑</button>
                      <button onClick={() => moveArticle(article.id, "down")} className="p-1.5 rounded hover:bg-muted text-muted-foreground" title="Move down">↓</button>
                      <button onClick={() => navigate(`/admin/help/article/${article.id}`)} className="p-1.5 rounded hover:bg-muted text-muted-foreground text-xs font-medium">Edit</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-sm text-muted-foreground px-4 py-8 text-center border border-border border-dashed rounded-xl">
                No articles in this section yet.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSectionEditor;

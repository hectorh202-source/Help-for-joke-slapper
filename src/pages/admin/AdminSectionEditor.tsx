import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useHelp } from "@/contexts/HelpContext";
import { HelpSection } from "@/types/help";
import { ArrowLeft, Save } from "lucide-react";
import { toast } from "sonner";

const ICON_OPTIONS = [
  "Rocket", "Zap", "FileText", "CreditCard", "User", "DollarSign", "Smile",
  "Wrench", "Mic", "FolderOpen", "Settings", "AlertCircle", "BookOpen", "Star",
  "Heart", "Shield", "Globe", "Mail",
];

const AdminSectionEditor = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { sections, setSections } = useHelp();
  const isNew = id === "new";

  const existing = !isNew ? sections.find(s => s.id === id) : null;

  const [title, setTitle] = useState(existing?.title || "");
  const [slug, setSlug] = useState(existing?.slug || "");
  const [icon, setIcon] = useState(existing?.icon || "FileText");
  const [parentId, setParentId] = useState<string | null>(existing?.parentId || null);
  const [isPublished, setIsPublished] = useState(existing?.isPublished ?? true);

  useEffect(() => {
    if (isNew) {
      setSlug(title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""));
    }
  }, [title, isNew]);


  const topSections = sections.filter(s => s.parentId === null && s.id !== id);

  const handleSave = () => {
    if (!title.trim()) {
      toast.error("Title is required");
      return;
    }
    const now = new Date().toISOString();
    if (isNew) {
      const newSection: HelpSection = {
        id: crypto.randomUUID(),
        title, slug, icon, parentId,
        sortOrder: sections.filter(s => s.parentId === parentId).length,
        isPublished,
        createdAt: now, updatedAt: now,
      };
      setSections(prev => [...prev, newSection]);
      toast.success("Section created!");
    } else {
      setSections(prev => prev.map(s => s.id === id ? {
        ...s, title, slug, icon, parentId, isPublished, updatedAt: now,
      } : s));
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
      </div>
    </div>
  );
};

export default AdminSectionEditor;

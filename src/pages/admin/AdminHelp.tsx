import { useState } from "react";
import { useHelp } from "@/contexts/HelpContext";
import { Link, useNavigate } from "react-router-dom";
import { Plus, FileText, FolderOpen, Search, Eye, Settings, Lock, LogIn, LogOut } from "lucide-react";
import { HelpSection, HelpArticle } from "@/types/help";
import { supabase } from "@/lib/supabaseClient";
import { setPostAuthRedirectPath } from "@/components/AuthRedirectHandler";

const AdminHelp = () => {
  const { sections, articles, isAdmin, setIsAdmin, setSections, setArticles } = useHelp();
  const navigate = useNavigate();
  const [tab, setTab] = useState<"articles" | "sections">("articles");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "published" | "draft">("all");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(false);

  const handleEmailPasswordSignIn = async () => {
    setAuthError(null);
    setAuthLoading(true);
    setPostAuthRedirectPath("/admin/help");
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setAuthError(error.message);
    }
    setAuthLoading(false);
  };

  const handleSendMagicLink = async () => {
    setAuthError(null);
    setAuthLoading(true);
    setPostAuthRedirectPath("/admin/help");

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/admin/help`,
      },
    });

    if (error) setAuthError(error.message);
    else setAuthError("Magic link sent. Check your email.");
    setAuthLoading(false);
  };

  const handleForgotPassword = async () => {
    setAuthError(null);
    setAuthLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/admin/help`,
    });

    if (error) setAuthError(error.message);
    else setAuthError("Password reset email sent. Check your inbox.");
    setAuthLoading(false);
  };

  const handleAdminSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      // eslint-disable-next-line no-console
      console.error("Supabase sign-out error", error);
    }
    setIsAdmin(false);
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-sm">
          <Lock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-semibold text-foreground mb-2">Admin Access Required</h1>
          <p className="text-muted-foreground mb-6">You need admin privileges to access the help center management.</p>

          <div className="space-y-3 text-left">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full h-9 px-3 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                autoComplete="email"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-9 px-3 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                autoComplete="current-password"
              />
            </div>

            {authError && (
              <div className="text-xs text-destructive">{authError}</div>
            )}

            <button
              onClick={handleEmailPasswordSignIn}
              disabled={authLoading || !email || !password}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <LogIn className="h-4 w-4" /> {authLoading ? "Signing in..." : "Sign in"}
            </button>

            <div className="flex items-center justify-between">
              <button
                onClick={handleForgotPassword}
                disabled={authLoading || !email}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
              >
                Forgot password?
              </button>
              <button
                onClick={handleSendMagicLink}
                disabled={authLoading || !email}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
              >
                Email me a magic link
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const filteredArticles = articles.filter(a => {
    const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || (statusFilter === "published" ? a.isPublished : !a.isPublished);
    return matchesSearch && matchesStatus;
  });

  const filteredSections = sections.filter(s => s.title.toLowerCase().includes(search.toLowerCase()));

  const getParentTitle = (parentId: string | null) => {
    if (!parentId) return "—";
    return sections.find(s => s.id === parentId)?.title || "Unknown";
  };

  const getSectionTitle = (sectionId: string) => {
    return sections.find(s => s.id === sectionId)?.title || "Unknown";
  };

  const togglePublish = async (article: HelpArticle) => {
    const nextPublished = !article.isPublished;
    setArticles(prev => prev.map(a => a.id === article.id ? { ...a, isPublished: nextPublished } : a));

    const { error } = await supabase
      .from("help_articles")
      .update({ is_published: nextPublished, updated_at: new Date().toISOString() })
      .eq("id", article.id);

    if (error) {
      // eslint-disable-next-line no-console
      console.error("Error toggling article publish status", error);
    }
  };

  const toggleSectionPublish = async (section: HelpSection) => {
    const nextPublished = !section.isPublished;
    setSections(prev => prev.map(s => s.id === section.id ? { ...s, isPublished: nextPublished } : s));

    const { error } = await supabase
      .from("help_sections")
      .update({ is_published: nextPublished, updated_at: new Date().toISOString() })
      .eq("id", section.id);

    if (error) {
      // eslint-disable-next-line no-console
      console.error("Error toggling section publish status", error);
    }
  };

  const deleteArticle = async (id: string) => {
    if (!confirm("Are you sure you want to delete this article?")) return;

    setArticles(prev => prev.filter(a => a.id !== id));

    const { error } = await supabase.from("help_articles").delete().eq("id", id);
    if (error) {
      // eslint-disable-next-line no-console
      console.error("Error deleting article", error);
    }
  };

  const deleteSection = async (id: string) => {
    const hasChildren = sections.some(s => s.parentId === id);
    const hasArticles = articles.some(a => a.sectionId === id);
    if (hasChildren || hasArticles) {
      alert("Cannot delete a section that has subsections or articles. Remove them first.");
      return;
    }
    if (!confirm("Are you sure you want to delete this section?")) return;

    setSections(prev => prev.filter(s => s.id !== id));

    const { error } = await supabase.from("help_sections").delete().eq("id", id);
    if (error) {
      // eslint-disable-next-line no-console
      console.error("Error deleting section", error);
    }
  };

  const moveArticle = async (id: string, direction: "up" | "down") => {
    let updated: HelpArticle[] | null = null;

    setArticles(prev => {
      const article = prev.find(a => a.id === id);
      if (!article) return prev;
      const siblings = prev
        .filter(a => a.sectionId === article.sectionId)
        .sort((a, b) => a.sortOrder - b.sortOrder);
      const idx = siblings.findIndex(a => a.id === id);
      if ((direction === "up" && idx === 0) || (direction === "down" && idx === siblings.length - 1)) return prev;
      const swapIdx = direction === "up" ? idx - 1 : idx + 1;
      const swapArticle = siblings[swapIdx];
      const next = prev.map(a => {
        if (a.id === id) return { ...a, sortOrder: swapArticle.sortOrder };
        if (a.id === swapArticle.id) return { ...a, sortOrder: article.sortOrder };
        return a;
      });
      updated = next;
      return next;
    });

    if (!updated) return;
    const current = updated.find(a => a.id === id);
    const swap = updated.find(
      a =>
        a.sectionId === current?.sectionId &&
        a.id !== current.id &&
        a.sortOrder === (direction === "up" ? (current?.sortOrder ?? 0) + 1 : (current?.sortOrder ?? 0) - 1),
    );
    if (!current || !swap) return;

    const { error } = await supabase.from("help_articles").upsert([
      { id: current.id, sort_order: current.sortOrder },
      { id: swap.id, sort_order: swap.sortOrder },
    ]);

    if (error) {
      // eslint-disable-next-line no-console
      console.error("Error updating sort order", error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Settings className="h-5 w-5 text-muted-foreground" />
            <h1 className="text-base font-semibold text-foreground">Help Center Admin</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/help" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Eye className="h-4 w-4" /> View Help Center
            </Link>
            <button onClick={handleAdminSignOut} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex items-center gap-6 mb-6 border-b border-border">
          <button
            onClick={() => setTab("articles")}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors ${tab === "articles" ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}
          >
            <FileText className="h-4 w-4 inline mr-1.5" />Articles ({articles.length})
          </button>
          <button
            onClick={() => setTab("sections")}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors ${tab === "sections" ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}
          >
            <FolderOpen className="h-4 w-4 inline mr-1.5" />Sections ({sections.length})
          </button>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`Search ${tab}...`}
              className="w-full h-9 pl-9 pr-3 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          {tab === "articles" && (
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as typeof statusFilter)}
              className="h-9 px-3 border border-border rounded-lg text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              <option value="all">All statuses</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          )}
          <button
            onClick={() => navigate(tab === "articles" ? "/admin/help/article/new" : "/admin/help/section/new")}
            className="inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Plus className="h-4 w-4" /> New {tab === "articles" ? "Article" : "Section"}
          </button>
        </div>

        {/* Articles table */}
        {tab === "articles" && (
          <div className="border border-border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground">Title</th>
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground">Section</th>
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground">Status</th>
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground">Flags</th>
                  <th className="text-right px-4 py-3 font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredArticles.map(article => (
                  <tr key={article.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3">
                      <div className="font-medium text-foreground">{article.title}</div>
                      <div className="text-xs text-muted-foreground">/{article.slug}</div>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{getSectionTitle(article.sectionId)}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                        article.isPublished ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                      }`}>
                        {article.isPublished ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">
                      {article.isFeatured && <span className="mr-2">⭐ Featured</span>}
                      {article.isPopular && <span>🔥 Popular</span>}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button onClick={() => moveArticle(article.id, "up")} className="p-1.5 rounded hover:bg-muted text-muted-foreground" title="Move up">↑</button>
                        <button onClick={() => moveArticle(article.id, "down")} className="p-1.5 rounded hover:bg-muted text-muted-foreground" title="Move down">↓</button>
                        <button onClick={() => navigate(`/admin/help/article/${article.id}`)} className="p-1.5 rounded hover:bg-muted text-muted-foreground text-xs">Edit</button>
                        <button onClick={() => togglePublish(article)} className="p-1.5 rounded hover:bg-muted text-muted-foreground text-xs">
                          {article.isPublished ? "Unpublish" : "Publish"}
                        </button>
                        <button onClick={() => deleteArticle(article.id)} className="p-1.5 rounded hover:bg-destructive/10 text-destructive text-xs">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredArticles.length === 0 && (
              <div className="p-8 text-center text-muted-foreground">No articles found.</div>
            )}
          </div>
        )}

        {/* Sections table */}
        {tab === "sections" && (
          <div className="border border-border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground">Title</th>
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground">Parent</th>
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground">Status</th>
                  <th className="text-right px-4 py-3 font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredSections.map(section => (
                  <tr key={section.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-4 py-3">
                      <div className="font-medium text-foreground">{section.title}</div>
                      <div className="text-xs text-muted-foreground">/{section.slug}</div>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{getParentTitle(section.parentId)}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                        section.isPublished ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                      }`}>
                        {section.isPublished ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button onClick={() => navigate(`/admin/help/section/${section.id}`)} className="p-1.5 rounded hover:bg-muted text-muted-foreground text-xs">Edit</button>
                        <button onClick={() => toggleSectionPublish(section)} className="p-1.5 rounded hover:bg-muted text-muted-foreground text-xs">
                          {section.isPublished ? "Unpublish" : "Publish"}
                        </button>
                        <button onClick={() => deleteSection(section.id)} className="p-1.5 rounded hover:bg-destructive/10 text-destructive text-xs">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredSections.length === 0 && (
              <div className="p-8 text-center text-muted-foreground">No sections found.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminHelp;

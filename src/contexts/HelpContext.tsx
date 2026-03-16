import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { HelpSection, HelpArticle, HelpArticleFeedback } from "@/types/help";
import { supabase } from "@/lib/supabaseClient";

interface HelpContextType {
  sections: HelpSection[];
  articles: HelpArticle[];
  feedback: HelpArticleFeedback[];
  setSections: React.Dispatch<React.SetStateAction<HelpSection[]>>;
  setArticles: React.Dispatch<React.SetStateAction<HelpArticle[]>>;
  addFeedback: (articleId: string, wasHelpful: boolean) => void;
  getSection: (slug: string) => HelpSection | undefined;
  getArticle: (slug: string) => HelpArticle | undefined;
  getChildSections: (parentId: string | null) => HelpSection[];
  getArticlesForSection: (sectionId: string) => HelpArticle[];
  getSectionPath: (sectionId: string) => HelpSection[];
  searchArticles: (query: string) => HelpArticle[];
  isAdmin: boolean;
  setIsAdmin: (v: boolean) => void;
  isLoading: boolean;
}

const HelpContext = createContext<HelpContextType | null>(null);

export function HelpProvider({ children }: { children: React.ReactNode }) {
  const [sections, setSections] = useState<HelpSection[]>([]);
  const [articles, setArticles] = useState<HelpArticle[]>([]);
  const [feedback, setFeedback] = useState<HelpArticleFeedback[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const initAuthAndData = async () => {
      // Load help content from Supabase
      try {
        const [
          { data: sectionRows, error: sectionError },
          { data: articleRows, error: articleError },
          { data: feedbackRows, error: feedbackError },
        ] = await Promise.all([
          supabase.from("help_sections").select("*").order("sort_order", { ascending: true }),
          supabase.from("help_articles").select("*").order("sort_order", { ascending: true }),
          supabase.from("help_article_feedback").select("*").order("created_at", { ascending: true }),
        ]);

        if (!isMounted) return;

        if (sectionError || articleError || feedbackError) {
          // eslint-disable-next-line no-console
          console.error("Error loading help content", { sectionError, articleError, feedbackError });
        } else {
          if (sectionRows) {
            setSections(
              sectionRows.map((row: any): HelpSection => ({
                id: row.id,
                title: row.title,
                slug: row.slug,
                icon: row.icon,
                parentId: row.parent_id,
                sortOrder: row.sort_order,
                isPublished: row.is_published,
                createdAt: row.created_at,
                updatedAt: row.updated_at,
              })),
            );
          }

          if (articleRows) {
            setArticles(
              articleRows.map((row: any): HelpArticle => ({
                id: row.id,
                title: row.title,
                slug: row.slug,
                summary: row.summary,
                body: row.body,
                sectionId: row.section_id,
                sortOrder: row.sort_order,
                isPublished: row.is_published,
                isFeatured: row.is_featured,
                isPopular: row.is_popular,
                createdAt: row.created_at,
                updatedAt: row.updated_at,
              })),
            );
          }

          if (feedbackRows) {
            setFeedback(
              feedbackRows.map((row: any): HelpArticleFeedback => ({
                id: row.id,
                articleId: row.article_id,
                wasHelpful: row.was_helpful,
                createdAt: row.created_at,
              })),
            );
          }
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error("Unexpected error loading help content", e);
      }

      // If we arrived here from an OAuth redirect, exchange the code for a session.
      // This is required in some SPA setups to persist the session locally.
      const url = new URL(window.location.href);
      const hasOAuthCode = url.searchParams.has("code");
      if (hasOAuthCode) {
        const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(window.location.href);
        if (exchangeError) {
          // eslint-disable-next-line no-console
          console.error("Error exchanging OAuth code for session", exchangeError);
        } else {
          url.searchParams.delete("code");
          url.searchParams.delete("state");
          window.history.replaceState({}, document.title, url.toString());
        }
      }

      const { data, error } = await supabase.auth.getSession();
      if (!isMounted) return;
      if (error) {
        // eslint-disable-next-line no-console
        console.error("Error getting Supabase session", error);
      } else {
        setIsAdmin(!!data.session?.user);
      }
      setIsLoading(false);
    };

    void initAuthAndData();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!isMounted) return;
      setIsAdmin(!!session?.user);
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const getSection = useCallback((slug: string) => sections.find(s => s.slug === slug), [sections]);
  const getArticle = useCallback((slug: string) => articles.find(a => a.slug === slug), [articles]);
  const getChildSections = useCallback((parentId: string | null) =>
    sections.filter(s => s.parentId === parentId && s.isPublished).sort((a, b) => a.sortOrder - b.sortOrder), [sections]);
  const getArticlesForSection = useCallback((sectionId: string) =>
    articles.filter(a => a.sectionId === sectionId && a.isPublished).sort((a, b) => a.sortOrder - b.sortOrder), [articles]);

  const getSectionPath = useCallback((sectionId: string): HelpSection[] => {
    const section = sections.find(s => s.id === sectionId);
    if (!section) return [];
    if (section.parentId) {
      return [...getSectionPath(section.parentId), section];
    }
    return [section];
  }, [sections]);

  const searchArticles = useCallback((query: string) => {
    const q = query.toLowerCase();
    return articles.filter(a => a.isPublished && (
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.body.toLowerCase().includes(q)
    ));
  }, [articles]);

  const addFeedback = useCallback(async (articleId: string, wasHelpful: boolean) => {
    const item: HelpArticleFeedback = {
      id: crypto.randomUUID(),
      articleId,
      wasHelpful,
      createdAt: new Date().toISOString(),
    };

    setFeedback(prev => [...prev, item]);

    const { error } = await supabase.from("help_article_feedback").insert(item);
    if (error) {
      // eslint-disable-next-line no-console
      console.error("Error saving article feedback", error);
    }
  }, []);

  return (
    <HelpContext.Provider value={{
      sections, articles, feedback, setSections, setArticles, addFeedback,
      getSection, getArticle, getChildSections, getArticlesForSection, getSectionPath, searchArticles,
      isAdmin, setIsAdmin, isLoading,
    }}>
      {children}
    </HelpContext.Provider>
  );
}

export function useHelp() {
  const ctx = useContext(HelpContext);
  if (!ctx) throw new Error("useHelp must be used within HelpProvider");
  return ctx;
}

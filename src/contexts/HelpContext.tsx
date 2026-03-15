import React, { createContext, useContext, useState, useCallback } from "react";
import { HelpSection, HelpArticle, HelpArticleFeedback } from "@/types/help";
import { initialSections, initialArticles } from "@/data/helpData";
import { useAuthContext } from "@/contexts/AuthContext";

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
}

const HelpContext = createContext<HelpContextType | null>(null);

export function HelpProvider({ children }: { children: React.ReactNode }) {
  const [sections, setSections] = useState<HelpSection[]>(initialSections);
  const [articles, setArticles] = useState<HelpArticle[]>(initialArticles);
  const [feedback, setFeedback] = useState<HelpArticleFeedback[]>([]);
  const { isAdmin } = useAuthContext();

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

  const addFeedback = useCallback((articleId: string, wasHelpful: boolean) => {
    setFeedback(prev => [...prev, {
      id: crypto.randomUUID(),
      articleId,
      wasHelpful,
      createdAt: new Date().toISOString(),
    }]);
  }, []);

  return (
    <HelpContext.Provider value={{
      sections, articles, feedback, setSections, setArticles, addFeedback,
      getSection, getArticle, getChildSections, getArticlesForSection, getSectionPath, searchArticles,
      isAdmin,
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

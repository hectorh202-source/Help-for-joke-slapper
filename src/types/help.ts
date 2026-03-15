export interface HelpSection {
  id: string;
  title: string;
  slug: string;
  icon: string;
  parentId: string | null;
  sortOrder: number;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface HelpArticle {
  id: string;
  title: string;
  slug: string;
  summary: string;
  body: string;
  sectionId: string;
  sortOrder: number;
  isPublished: boolean;
  isFeatured: boolean;
  isPopular: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface HelpArticleFeedback {
  id: string;
  articleId: string;
  wasHelpful: boolean;
  createdAt: string;
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: { name: string; avatar?: string };
  coverImage: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  readingTime: number;
  featured?: boolean;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  features: string[];
  dimensions?: string;
  completionDate?: string;
  tags: string[];
}

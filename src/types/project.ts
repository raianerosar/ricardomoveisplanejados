export interface Project {
  slug: string;
  title: string;
  category: string;
  image: string;
  gallery?: string[]; // Array de imagens para a galeria completa
  description: string;
  features: string[];
  dimensions?: string;
  completionDate?: string;
  tags: string[];
}

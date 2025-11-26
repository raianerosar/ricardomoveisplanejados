export interface Ambiente {
  slug: string;
  title: string;
  category: string;
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
  };
  about: {
    title: string;
    description: string;
    image: string;
    highlights: string[];
  };
  whyChoose: {
    title: string;
    items: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
  gallery: {
    images: {
      src: string;
      alt: string;
    }[];
    projectName: string;
  };
  faq: {
    title: string;
    questions: {
      question: string;
      answer: string;
    }[];
  };
  social: {
    title: string;
    posts: {
      image: string;
      link: string;
    }[];
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
}

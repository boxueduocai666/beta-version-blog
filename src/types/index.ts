export interface Article {
  id: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  cover: string;
  excerpt: string;
  content: string;
}

export interface GlassSettings {
  opacity: number;
  blur: number;
  refraction: number;
}

export interface Comment {
  id: string;
  author: string;
  avatar: string;
  content: string;
  date: string;
}


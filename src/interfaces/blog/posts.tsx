export interface Post {
  id: string;
  title: string;
  content: string;
  slug: string;
  url: string;
  excerpt: string;
  featured_image_url: string;
  date: string;
}

export interface Breadcrumb {
  title: string;
  slug: string;
}

export interface Category {
  title: string;
  slug: string;
}

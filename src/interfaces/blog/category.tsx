import { Post } from "./posts";

export interface Category {
  termId: number;
  name: string;
  slug: string;
  description?: string;
  url?: string;
  children?: Category[];
  posts?: {
    items: Post[];
    total: number;
    limit: number;
  };
}

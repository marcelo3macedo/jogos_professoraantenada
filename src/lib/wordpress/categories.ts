import { getLimitAndOffset } from "@/helpers/pagination/list";
import { Category } from "@/interfaces/blog/category";
import { Post } from "@/interfaces/blog/posts";
import { queryDatabase } from "@/lib/wordpress/db";

import {
  QUERY_CATEGORIES_CHILDREN,
  QUERY_CATEGORIES_POSTS,
  QUERY_CATEGORIES_POSTS_COUNTER,
  QUERY_CATEGORIES_SINGLE,
} from "./queries/categories";

export async function getCategoriesChildren(id: string): Promise<Category[]> {
  return (await queryDatabase(QUERY_CATEGORIES_CHILDREN, [id])) as Category[];
}

export async function getSingleCategory(
  slug: string,
  page: string,
): Promise<Category | undefined> {
  if (!slug) return;

  const { limit, offset } = getLimitAndOffset(page);
  const [category] = (await queryDatabase(QUERY_CATEGORIES_SINGLE, [
    slug,
  ])) as Category[];
  const items = (await queryDatabase(QUERY_CATEGORIES_POSTS, [
    slug,
    limit.toString(),
    offset.toString(),
  ])) as Post[];
  const [totalPosts] = (await queryDatabase(QUERY_CATEGORIES_POSTS_COUNTER, [
    slug,
  ])) as any;

  const { termId, name, description } = category;
  return {
    termId,
    slug,
    name,
    description,
    posts: {
      items,
      limit,
      total: totalPosts.total,
    },
  };
}

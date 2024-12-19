import { getLimitAndOffset } from "@/helpers/pagination/list";
import { getExcerpt } from "@/helpers/posts/excerpt";
import { getImage } from "@/helpers/posts/image";
import { Post } from "@/interfaces/blog/posts";
import { queryDatabase } from "@/lib/wordpress/db";

import {
  QUERY_LATESTS_POSTS,
  QUERY_LATESTS_POSTS_TOTAL,
  QUERY_SINGLE_POST,
} from "./queries/posts";

export async function getLatestPosts(page: string) {
  const { limit, offset } = getLimitAndOffset(page);

  const posts = (await queryDatabase(QUERY_LATESTS_POSTS, [
    limit.toString(),
    offset.toString(),
  ])) as Post[];

  posts.map((p) => {
    p.excerpt = getExcerpt(p.excerpt, p.content) || "";
    p.featured_image_url = getImage(p.featured_image_url) || "";
    p.url = `/blog/post/${p.slug}`;
  });

  const [totalPosts] = (await queryDatabase(QUERY_LATESTS_POSTS_TOTAL)) as any;
  const totalPages = Math.ceil(totalPosts.totalPosts / limit);

  return {
    items: posts,
    limit,
    page,
    total: totalPages,
  };
}

export async function getSinglePost(slug: string) {
  if (!slug) return;

  const [posts] = (await queryDatabase(QUERY_SINGLE_POST, [slug])) as any;

  if (!posts || posts.length == 0) return;

  return posts[0];
}

import { getExcerpt } from "@/helpers/posts/excerpt";
import { db } from "@/lib/wordpress/db";
import { RowDataPacket } from "mysql2";
import { redis } from "../redis";
import { CACHE_TTL } from "@/constants/cache";
import { getImage } from "@/helpers/posts/image";

export async function getLatestPosts(page = 1, limit = 12) {
  const cacheKey = `latestPosts:page:${page}:limit:${limit}`;
  const cachedData = await redis.get(cacheKey);
  if (cachedData) {
    return JSON.parse(cachedData);
  }

  const offset = (page - 1) * limit;
  const [posts] = await db.query<RowDataPacket[]>(
    `  SELECT p.ID,
              p.post_title,
              p.post_date,
              p.post_excerpt,
              p.post_content,
              p.guid AS post_slug,
              pm2.guid AS featured_image_url
          FROM 
              wordpress_posts p
          LEFT JOIN 
              wordpress_postmeta pm ON p.ID = pm.post_id AND pm.meta_key = '_thumbnail_id'
          LEFT JOIN 
              wordpress_posts pm2 ON pm.meta_value = pm2.ID
          WHERE 
              p.post_type = 'post' 
              AND p.post_status = 'publish'
          ORDER BY 
              p.post_date DESC
        LIMIT ? OFFSET ?`,
    [limit, offset],
  );
  const [[{ totalPosts }]] = await db.query<RowDataPacket[]>(
    `SELECT COUNT(*) AS totalPosts
       FROM wordpress_posts
      WHERE post_type = 'post' AND post_status = 'publish'`,
  );
  const totalPages = Math.ceil(totalPosts / limit);

  const result = {
    posts: posts.map((post) => ({
      id: post.ID,
      title: post.post_title,
      slug: post.post_slug,
      excerpt: getExcerpt(post.post_excerpt, post.post_content),
      featured_image_url: getImage(post.featured_image_url),
      date: post.post_date,
    })),
    pagination: {
      currentPage: page,
      totalPages,
      totalPosts,
    },
  };

  await redis.set(cacheKey, JSON.stringify(result), "EX", CACHE_TTL);

  return result;
}

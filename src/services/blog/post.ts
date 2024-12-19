import { PostProps } from "@/interfaces/blog/posts/props";
import { cacheData } from "@/lib/redis";
import { getLatestPosts } from "@/lib/wordpress/posts";

export async function getLatestPostsFromPage(page: string) {
  const cacheKey = `blog:latest_posts`;

  const fetchPostsData = async () => {
    return getLatestPosts(page);
  };

  //return cacheData(cacheKey, fetchPostsData);
  return fetchPostsData();
}

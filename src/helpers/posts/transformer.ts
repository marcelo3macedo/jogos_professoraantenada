import { Post } from "@/interfaces/blog/posts";

export function getPostList(data: any): Post[] {
  if (!data || data.length == 0) return [];

  const posts = [] as Post[];
  data.map((d: any) => {
    const { id, title, date, excerpt, slug, featured_image_url } = d || {};
    const url = `/blog/post/${slug}`;

    posts.push({
      id,
      title,
      slug,
      date,
      excerpt,
      featured_image_url,
      url,
    });
  });

  return posts;
}

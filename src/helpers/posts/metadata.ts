import { Metadata } from "next";

import { Category } from "@/interfaces/blog/category";

import { getExcerptFromContent } from "./excerpt";
import { getKeywordsFromExcerpt } from "./keywords";

export function generatePostMetadata(post: any, metadata: Metadata) {
  if (!post) return metadata;

  const title = post.post_title;
  const description = getExcerptFromContent(post.post_excerpt);

  metadata.title = title;
  metadata.description = description;
  metadata.keywords = getKeywordsFromExcerpt(post.post_excerpt);

  if (metadata.openGraph) {
    metadata.openGraph.title = title;
    metadata.openGraph.description = description;
    metadata.openGraph.images = [
      {
        url: post.featured_image_url,
      },
    ];
  }

  if (metadata.twitter) {
    metadata.twitter.images = [
      {
        url: post.featured_image_url,
      },
    ];
  }

  return metadata;
}

export function generateCategoryMetadata(category: any, metadata: Metadata) {
  if (!category) return metadata;

  const title = category.name;
  const description = getExcerptFromContent(category.description);

  metadata.title = title;
  metadata.description = description;
  metadata.keywords = getKeywordsFromExcerpt(category.description);

  const url =
    category.posts.items && category.posts.items.length > 0
      ? category.posts.items[0].featured_image_url
      : "";

  if (metadata.openGraph) {
    metadata.openGraph.title = title;
    metadata.openGraph.description = description;
    metadata.openGraph.images = [
      {
        url,
      },
    ];
  }

  if (metadata.twitter) {
    metadata.twitter.images = [
      {
        url,
      },
    ];
  }

  return metadata;
}

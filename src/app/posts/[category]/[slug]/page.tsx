import { METADATATYPE_POSTS } from "@/constants/metadataType";
import { getMetadata } from "@/helpers/metadata/metadataHelper";
import BaseTheme from "@/themes/base.theme";
import { Props } from "./props";
import { Metadata } from "next";
import { getSinglePost } from "@/lib/wordpress/posts";
import { generatePostMetadata } from "@/helpers/posts/metadata";
import { htmlStringToArray } from "@/helpers/posts/content";
import SingleContent from "@/components/blog/posts/single/content/main";

export default async function Post({ params }: Props) {
  const post = await getSinglePost(params.slug);
  if (!post) return <></>;

  const content = htmlStringToArray(post.post_content);

  return (
    <BaseTheme>
      <h1>{post.post_title}</h1>
      <SingleContent content={content} />
    </BaseTheme>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const metadata = await getMetadata(METADATATYPE_POSTS);
  const post = await getSinglePost(params.slug);

  return generatePostMetadata(post, metadata);
}

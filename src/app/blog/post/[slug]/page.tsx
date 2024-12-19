import { Metadata } from "next";

import SingleContent from "@/components/blog/posts/single/content/main";
import { METADATATYPE_POSTS } from "@/constants/metadataType";
import { getMetadata } from "@/helpers/metadata/metadataHelper";
import { htmlStringToArray } from "@/helpers/posts/content";
import { generatePostMetadata } from "@/helpers/posts/metadata";
import { getSinglePost } from "@/lib/wordpress/posts";
import BaseTheme from "@/themes/base.theme";

import { Props } from "./props";

export default async function Post({ params }: Props) {
  const post = await getSinglePost(params.slug);
  if (!post) return <></>;

  const content = htmlStringToArray(post.post_content);

  return (
    <BaseTheme>
      <div className="container md:p-4 mx-auto">
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h1 className="text-purple-950 text-2xl md:text-3xl font-bold md:my-4">
            {post.post_title}
          </h1>
          <SingleContent content={content} />
        </div>
      </div>
    </BaseTheme>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const metadata = await getMetadata(METADATATYPE_POSTS);
  const post = await getSinglePost(params.slug);

  return generatePostMetadata(post, metadata);
}

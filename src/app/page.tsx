import NewsPosts from "@/components/posts/news";
import { METADATATYPE_HOME } from "@/constants/metadataType";
import { getMetadata } from "@/helpers/metadata/metadataHelper";
import { getMenuItems } from "@/lib/wordpress/categories";
import { getLatestPosts } from "@/lib/wordpress/posts";
import BaseTheme from "@/themes/base.theme";

export const metadata = getMetadata(METADATATYPE_HOME);

export default async function Home() {
  const [metadata, posts, menu] = await Promise.all([
    getMetadata(METADATATYPE_HOME),
    getLatestPosts(),
    getMenuItems("tg-home-page-categories"),
  ]);

  return (
    <BaseTheme>
      <NewsPosts content={posts} />
    </BaseTheme>
  );
}

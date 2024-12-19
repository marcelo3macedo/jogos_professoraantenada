import Title from "@/components/blog/common/title";
import List from "@/components/blog/posts/list";
import { METADATATYPE_HOME } from "@/constants/metadataType";
import { getMetadataData } from "@/services/blog/metadata";
import BaseTheme from "@/themes/base.theme";
import posts from "@/assets/mocks/posts.json";

export const metadata = getMetadataData(METADATATYPE_HOME);

export default async function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const searchQuery = searchParams.s;
  const title = "Você buscou por: " + searchQuery;
  /*const [menuData, metadata, posts, menu] = await Promise.all([
    getMenuData(),
    getMetadataData(METADATATYPE_HOME),
    getLatestPosts(),
    getMenuItems("tg-home-page-categories"),
  ]);*/
  return (
    <BaseTheme>
      <Title title={title}></Title>
      <List posts={posts} />
    </BaseTheme>
  );
}

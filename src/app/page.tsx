import MainCategories from "@/components/blog/categories/main";
import MainPosts from "@/components/blog/posts/main";
import { METADATATYPE_HOME } from "@/constants/metadataType";
import { PostProps } from "@/interfaces/blog/posts/props";
import { getMenuItems } from "@/lib/wordpress/menu";
import { getMetadataData } from "@/services/blog/metadata";
import { getLatestPostsFromPage } from "@/services/blog/post";
import BaseTheme from "@/themes/base.theme";

export const metadata = getMetadataData(METADATATYPE_HOME);

export default async function Home({ searchParams }: PostProps) {
  const page =
    searchParams && searchParams.page ? searchParams.page.toString() : "0";
  const pageNumber = parseInt(page);
  const [posts, menu] = await Promise.all([
    getLatestPostsFromPage(page),
    getMenuItems(),
  ]);

  return (
    <BaseTheme>
      <div className="my-4 md:my-0 px-4 md:flex">
        <MainPosts posts={posts} page={pageNumber} />
        <MainCategories menu={menu} />
      </div>
    </BaseTheme>
  );
}

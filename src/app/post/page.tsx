import Breadcrumb from "@/components/blog/posts/single/breadcrumb/main";
import Categories from "@/components/blog/posts/single/categories/main";
import { METADATATYPE_HOME } from "@/constants/metadataType";
import { getMetadata } from "@/helpers/metadata/metadataHelper";
import { getMenuItems } from "@/lib/wordpress/categories";
import { getLatestPosts } from "@/lib/wordpress/posts";
import BaseTheme from "@/themes/base.theme";

export const metadata = getMetadata(METADATATYPE_HOME);

export default async function Post() {
  const [metadata, posts, menu] = await Promise.all([
    getMetadata(METADATATYPE_HOME),
    getLatestPosts(),
    getMenuItems("tg-home-page-categories"),
  ]);
  const title = "Título do Post";
  const items = [
    {
      title: "teste",
      slug: "teste",
    },
    {
      title: "teste2",
      slug: "teste2",
    },
  ];
  const categories = [
    {
      name: "teste",
      slug: "teste",
    },
    {
      name: "teste2",
      slug: "teste2",
    },
  ];

  return (
    <BaseTheme>
      <section className="single bg-yellow-50 p-4 rounded-xl w-full">
        <article className="border-b-4 border-violet-300">
          <Breadcrumb items={items} />
          <div className="pt-4">
            <h1 className="font-bold text-3xl text-violet-950">{title}</h1>
          </div>
          <Categories items={categories} />
        </article>
      </section>
    </BaseTheme>
  );
}

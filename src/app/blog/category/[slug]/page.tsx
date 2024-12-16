import { Metadata } from "next";

import List from "@/components/blog/posts/list";
import { METADATATYPE_HOME } from "@/constants/metadataType";
import { getMetadata } from "@/helpers/metadata/metadataHelper";
import { generateCategoryMetadata } from "@/helpers/posts/metadata";
import { CategoryProps } from "@/interfaces/blog/category/props";
import { getCategoryFromParameters } from "@/services/blog/category";
import BaseTheme from "@/themes/base.theme";

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryProps) {
  const category = await getCategoryFromParameters({ params, searchParams });
  const page = parseInt(
    searchParams && searchParams.page ? searchParams.page.toString() : "0",
  );
  if (!category) return <></>;

  return (
    <BaseTheme>
      <div className="bg-yellow-50 p-6 rounded-lg">
        <h1 className="text-purple-950 text-2xl md:text-3xl font-bold md:my-4 text-center mt-4 mb-8">
          {category.name}
        </h1>
        <p className="text-justify text-md leading-6">{category.description}</p>
        <List posts={category.posts} page={page} />
      </div>
    </BaseTheme>
  );
}

export async function generateMetadata({
  params,
  searchParams,
}: CategoryProps): Promise<Metadata> {
  const category = await getCategoryFromParameters({ params, searchParams });
  const metadata = await getMetadata(METADATATYPE_HOME);
  return generateCategoryMetadata(category, metadata);
}

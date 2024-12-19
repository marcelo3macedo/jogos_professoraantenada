import SingleContent from "@/components/blog/posts/single/content/main";
import { METADATATYPE_HOME } from "@/constants/metadataType";
import { getMetadata } from "@/helpers/metadata/metadataHelper";
import { htmlStringToArray } from "@/helpers/posts/content";
import { getSinglePage } from "@/lib/wordpress/page";
import BaseTheme from "@/themes/base.theme";

import { Props } from "./props";

export const metadata = getMetadata(METADATATYPE_HOME);

export default async function BlogPage({ params }: Props) {
  const page = await getSinglePage(params.slug);
  if (!page) return <></>;

  const content = htmlStringToArray(page.content);

  return (
    <BaseTheme>
      <div className="bg-yellow-50 p-6 rounded-lg">
        <h1 className="text-purple-950 text-2xl md:text-3xl font-bold md:my-4">
          {page.title}
        </h1>
        <SingleContent content={content} />
      </div>
    </BaseTheme>
  );
}

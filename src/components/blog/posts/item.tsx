import Image from "next/image";
import { useTranslations } from "next-intl";

import notFoundImage from "@/assets/img/notFound.jpg";
import { getExcerpt } from "@/helpers/posts/excerpt";
import { Post } from "@/interfaces/blog/posts";

export default function Item({ post }: { post: Post }) {
  const t = useTranslations("blog.categories.types");

  if (!post) return <></>;
  const description = getExcerpt(post.excerpt, "");
  const featureImageSrc = post.featured_image_url
    ? post.featured_image_url
    : notFoundImage.src;

  return (
    <a
      href={post.url}
      className="block rounded-lg p-4 shadow-sm bg-slate-50 shadow-indigo-100"
    >
      <Image
        alt={post.title}
        src={featureImageSrc}
        height="292"
        width="384"
        className="h-96 w-full rounded-md object-contain"
      />

      <div className="mt-4">
        <dl>
          <div>
            <dt className="sr-only">{t("title")}</dt>
            <dd className="font-bold">{post.title}</dd>
          </div>
        </dl>

        <dl>
          <div>
            <dt className="sr-only">{t("description")}</dt>
            <dd className="text-sm my-2">{description}</dd>
          </div>
        </dl>
      </div>
    </a>
  );
}

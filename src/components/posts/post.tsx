import { Post } from "@/interfaces/posts";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function SinglePost({ post }: { post: Post }) {
  const t = useTranslations("blog.home.post");

  return (
    <a
      href={post.slug}
      className="block rounded-lg p-4 shadow-sm bg-slate-50 shadow-indigo-100"
    >
      <Image
        alt={post.title}
        src={post.featured_image_url}
        height="317"
        width="384"
        className="h-96 w-full rounded-md object-contain"
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">{t("title")}</dt>
            <dd className="font-bold">{post.title}</dd>
          </div>
        </dl>

        <dl>
          <div>
            <dt className="sr-only">{t("description")}</dt>
            <dd className="text-sm my-2">{post.excerpt}</dd>
          </div>
        </dl>
      </div>
    </a>
  );
}

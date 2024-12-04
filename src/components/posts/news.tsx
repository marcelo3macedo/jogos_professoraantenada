import { Post } from "@/interfaces/posts";
import SinglePost from "./post";
import { useTranslations } from "next-intl";

export default function NewsPosts({ content }: any) {
  const { posts } = content || {};
  const t = useTranslations("blog.home");

  return (
    <section className="flex flex-col justify-start border-l min-h-screen bg-yellow-50 p-4 rounded-xl">
      <h2 className="text-2xl font-bold py-2 text-violet-950 border-b-2 border-violet-950">
        {t("news")}
      </h2>
      <div className="grid grid-cols-1 gap-8 mt-4 xl:gap-4 md:grid-cols-2 xl:grid-cols-2">
        {posts.map((p: Post) => (
          <SinglePost key={p.id} post={p} />
        ))}
      </div>
    </section>
  );
}

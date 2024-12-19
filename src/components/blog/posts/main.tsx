import { useTranslations } from "next-intl";

import List from "./list";

export default function MainPosts({
  posts,
  page,
}: {
  posts: any;
  page: number;
}) {
  const t = useTranslations("blog.home");

  return (
    <section className="flex flex-col justify-start border-l min-h-screen bg-yellow-50 p-4 rounded-xl">
      <h2 className="text-2xl font-bold py-2 text-violet-950 border-b-2 border-violet-950">
        {t("news")}
      </h2>
      <div className="my-2">
        <List posts={posts} page={page} />
      </div>
    </section>
  );
}

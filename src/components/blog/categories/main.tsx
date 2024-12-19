import { useTranslations } from "next-intl";

import List from "./list";

export default function MainCategories({ menu }: { menu: any }) {
  const t = useTranslations("blog.categories");

  return (
    <section className="flex flex-col justify-start border-l min-h-screen bg-yellow-50 p-4 rounded-xl min-w-64 mx-2">
      <h2 className="text-2xl font-bold py-2 text-violet-950 border-b-2 border-violet-950">
        {t("title")}
      </h2>
      <div className="my-2">
        <List categories={menu} />
      </div>
    </section>
  );
}

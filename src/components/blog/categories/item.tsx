import { useTranslations } from "next-intl";

import { Category } from "@/interfaces/blog/category";

import List from "./list";

export default function Item({ category }: { category: Category }) {
  const t = useTranslations("blog.categories");

  return (
    <article className="py-1">
      <a
        href={`/blog/categoria/${category.slug}`}
        className="block rounded-lg px-4 text-lg font-bold text-violet-950 hover:opacity-80 hover:cursor-pointer"
      >
        <span className="text-zinc-700">{category.name}</span>
      </a>
      <div className="px-4">
        {category.children ? <List categories={category.children} /> : <></>}
      </div>
    </article>
  );
}

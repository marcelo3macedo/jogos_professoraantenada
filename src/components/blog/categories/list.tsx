import { Category } from "@/interfaces/blog/category";

import Item from "./item";

export default function List({ categories }: { categories: Category[] }) {
  if (!categories) return <></>;

  return (
    <ul className="mt-2 space-y-1">
      {categories.map((c) => (
        <Item key={c.slug} category={c} />
      ))}
    </ul>
  );
}

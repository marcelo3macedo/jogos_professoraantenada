import Item from "./item";
import { Category } from "@/interfaces/blog/category";

export default function Main({ items }: { items: Category[] }) {
  return (
    <article className="flex py-4">
      {items.map((i) => (
        <Item key={i.slug} item={i} />
      ))}
    </article>
  );
}

import { Category } from "@/interfaces/blog/category";

export default function Item({ item }: { item: Category }) {
  if (!item) return <></>;

  return (
    <div className="bg-yellow-500 text-white px-4 py-2 mr-2 rounded-md font-bold hover:opacity-80 hover:cursor-pointer">
      <a href={item.slug}>
        <div className="container noselect">
          <h4>{item.name}</h4>
        </div>
      </a>
    </div>
  );
}

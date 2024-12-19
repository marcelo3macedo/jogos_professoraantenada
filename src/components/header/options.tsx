import { Category } from "@/interfaces/blog/category";

export default function Options({ categories }: { categories: Category[] }) {
  if (!categories) return <></>;

  return (
    <div className="hidden inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
      <ul className="no-select flex flex-col lg:flex-row justify-center">
        {categories.map((i) => (
          <li className="px-1" key={i.name}>
            <a href={i.slug}>
              <h4 className="block rounded-lg px-4 text-lg font-bold text-white hover:opacity-80 hover:cursor-pointer">
                {i.name}
              </h4>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

import next from "@/assets/icons/next.svg";
import { Breadcrumb } from "@/interfaces/blog/posts";
import Image from "next/image";

export default function BreadcrumbItem({ item }: { item: Breadcrumb }) {
  if (!item) return <></>;

  return (
    <article className="flex items-center">
      <span className="mx-2 text-gray-500 rtl:-scale-x-100">
        <Image
          src={next.src}
          alt={item.title}
          className="w-5 h-5"
          width={50}
          height={50}
        />
      </span>
      <a href={item.slug} className="text-gray-600 hover:underline">
        {item.title}
      </a>
    </article>
  );
}

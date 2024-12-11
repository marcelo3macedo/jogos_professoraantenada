import Image from "next/image";
import homeIcon from "@/assets/icons/home.svg";
import BreadcrumbItem from "./item";
import { Breadcrumb } from "@/interfaces/blog/posts";

export default function Main({ items }: { items: Breadcrumb[] }) {
  return (
    <article className="flex items-center">
      <a href="/" className="text-gray-600">
        <Image
          src={homeIcon.src}
          alt="Home"
          className="w-5 h-5"
          width={50}
          height={50}
        />
      </a>
      {items.map((i) => (
        <BreadcrumbItem key={i.slug} item={i} />
      ))}
    </article>
  );
}

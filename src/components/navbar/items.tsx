"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavbarItems() {
  const [menu, setMenu] = useState<
    { termId: number; slug: string; name: string }[]
  >([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("/api/menu");
        const data = await response.json();
        setMenu(data);
      } catch (error) {
        console.error("Failed to fetch menu:", error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div className="flex flex-col text-gray-600 capitalize lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
      {menu.map((m) => (
        <Link
          key={m.termId}
          href={m.slug}
          className="mt-2 lg:mt-0 lg:mx-4 text-white text-md font-bold transition-colors duration-300"
        >
          {m.name}
        </Link>
      ))}
    </div>
  );
}

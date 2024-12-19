"use client";
import Link from "next/link";

export default function NavbarItems() {
  const menu = [
    {
      termId: 346,
      name: "Lembrancinhas e Mensagens",
      slug: "/blog/categoria/lembrancinhas-e-mensagens",
    },
    {
      termId: 364,
      name: "Alfabetização",
      slug: "/blog/categoria/alfabetizacao",
    },
    {
      termId: 381,
      name: "Mundo dos Números",
      slug: "/blog/categoria/mundo-dos-numeros",
    },
    {
      termId: 392,
      name: "Jogos",
      slug: "/blog/categoria/jogos-principais",
    },
  ];

  return (
    <div className="flex flex-col text-gray-600 capitalize lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
      {menu.map((m) => (
        <Link
          key={m.termId}
          href={m.slug}
          className="mt-2 lg:mt-0 lg:mx-8 text-white text-lg font-bold transition-colors duration-300"
        >
          {m.name}
        </Link>
      ))}
    </div>
  );
}

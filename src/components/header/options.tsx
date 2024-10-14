export default function Options() {
  const items = [
    {
      href: "/",
      name: "Início",
    },
    {
      href: "/category/alfabetizacao-principais",
      name: "Alfabetização",
    },
    {
      href: "/category/lembrancinhas-e-mensagens",
      name: "Lembrancinhas e Mensagens",
    },
  ];

  return (
    <div className="hidden inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
      <ul className="no-select flex flex-col lg:flex-row">
        {items.map((i) => (
          <li className="px-8" key={i.name}>
            <a href={i.href}>
              <h4 className="text-white font-bold text-md">{i.name}</h4>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

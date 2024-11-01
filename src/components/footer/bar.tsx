export default function Bar() {
  const copyright =
    "Copyright 2021 Todos os direitos reservados. Professora Antenada";
  const menu = [
    { title: "Sobre", url: "/sobre" },
    { title: "Sugestões", url: "/sugestoes" },
    { title: "Categorias", url: "/categorias" },
    { title: "Política de privacidade", url: "/politicas-privacidade" },
  ];

  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto">
        <div className="p-4">
          {menu.map((m, i) => (
            <a
              key={i}
              href={m.url}
              className="block px-3 font-bold py-2 text-gray-100 rounded-lg hover:opacity-80"
            >
              {m.title}
            </a>
          ))}
        </div>
        <div className="text-center">
          <p className="text-md text-white p-4">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}

import { getFooterData } from "@/services/blog/footer";

export default async function FooterBar() {
  const { copyright, menu } = await getFooterData();

  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto">
        <div className="p-4">
          {menu.map((m) => (
            <a
              key={m.title}
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

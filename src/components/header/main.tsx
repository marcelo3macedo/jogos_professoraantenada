import logo from "@/assets/logo.png";
import Image from "next/image";
import Options from "./options";
import Search from "./search";
import { getMenuData } from "@/services/blog/menu";
import Link from "next/link";

export default async function Header() {
  const data = await getMenuData();

  return (
    <header className="bg-violet-950">
      <nav className="px-6 py-4 shadow container mx-auto">
        <div className="items-center justify-between flex container">
          <div className="flex items-center justify-between">
            <Link href="/" className="mx-auto">
              <Image
                className="w-auto h-20"
                src={logo.src}
                alt=""
                width={logo.width}
                height={logo.height}
              />
            </Link>
          </div>

          <Options categories={data.menu} />
          <Search />
        </div>
      </nav>
    </header>
  );
}

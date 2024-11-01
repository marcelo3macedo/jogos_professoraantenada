import logo from "@/assets/logo.png";
import Image from "next/image";
import Options from "./options";
import Search from "./search";

export default function Header() {
  return (
    <header className="bg-violet-950">
      <nav className="px-6 py-4 shadow container mx-auto">
        <div className="lg:items-center lg:justify-between lg:flex container">
          <div className="flex items-center justify-between py-4 md:py-0">
            <a href="/" className="mx-auto">
              <Image
                className="w-auto h-16 sm:h-20"
                src={logo.src}
                alt=""
                width={logo.width}
                height={logo.height}
              />
            </a>
          </div>

          <Options />
          <Search />
        </div>
      </nav>
    </header>
  );
}

import logo from "@/assets/logo.png";
import Image from "next/image";
import Options from "./options";

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

            <div className="lg:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg
                  x-show="!isOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          <Options />
        </div>
      </nav>
    </header>
  );
}

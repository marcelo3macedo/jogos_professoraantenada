"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsXLg, BsList } from "react-icons/bs";

import logo from "@/assets/logo.png";

import NavbarItems from "./items";
import Search from "./search";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-violet-950 shadow w-full">
      <div className="container py-4 pt-2 md:pt-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between w-full">
          <div className="flex items-center justify-between mx-2">
            <Link href="/">
              <Image
                className="w-auto h-20 py-1"
                src={logo.src}
                alt=""
                width={logo.width}
                height={logo.height}
              />
            </Link>

            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 hover:text-gray-600 focus:outline-none"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <BsList className="w-8 h-8 text-white" />
                ) : (
                  <BsXLg className="w-8 h-8 text-white" />
                )}
              </button>
            </div>
          </div>

          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 bg-violet-900 lg:relative lg:bg-transparent lg:w-auto lg:flex lg:items-center lg:justify-between transition-all duration-300 ease-in-out ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full lg:opacity-100 lg:translate-x-0"
            }`}
          >
            <NavbarItems />
          </div>

          <div className="px-4 pt-2 md:px-0 md:pt-0">
            <Search />
          </div>
        </div>
      </div>
    </nav>
  );
}

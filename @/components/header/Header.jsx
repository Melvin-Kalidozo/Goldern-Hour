"use client";

import React, { useState } from "react";
import { ModeToggle } from "./ModeToogle";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md shadow-md py-2 md:p-0">
      <div className="flex justify-between items-center w-[90%] md:w-[80%] m-auto ">
        <Link href="/">
          <div className="relative w-[80px] h-[80px] md:w-[100px] md:h-[100px]">
            <Image
              src="/assets/logoDark.png"
              alt="Golden Hour Logo"
              fill
              className="dark:hidden object-contain"
              priority
            />
            <Image
              src="/assets/logoWhite.png"
              alt="Golden Hour Logo"
              fill
              className="hidden dark:block object-contain"
              priority
            />
          </div>
        </Link>

        <div className="flex items-center space-x-4">
          <div className="md:hidden">
            <ModeToggle />
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl"
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <div
            className={`md:flex ${isMenuOpen ? "block" : "hidden"} rounded-bl-full absolute md:relative top-full right-0 w-[50%] md:w-auto bg-white dark:bg-[#18181b] dark:bg-opacity-60 bg-opacity-60 backdrop-blur-lg backdrop-filter md:bg-transparent shadow-md md:shadow-none dark:md:bg-transparent dark:md:shadow-none`}
          >
            <ul className="flex font-bold text-xl  flex-col items-end md:flex-row space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0">
              <li>
                <Link
                  href="/"
                  className="block hover:text-[#FFCC00] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="block hover:text-[#FFCC00] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block hover:text-[#FFCC00] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}

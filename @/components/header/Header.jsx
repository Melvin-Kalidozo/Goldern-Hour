"use client";

import React from "react";
import { ModeToggle } from "./ModeToogle";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="sticky top-0 z-50   backdrop-blur-md shadow-md">
      <div className="flex justify-between items-center w-[80%] m-auto">
        <Link href="/">
          <div className="relative w-[100px] h-[100px]">
            <Image
              src="/assets/logoDark.png"
              alt="Golden Hour Logo"
              fill // Use the `fill` prop to make the image cover the container
              className="dark:hidden object-contain" // Apply `object-contain` for proper scaling
              priority
            />
            <Image
              src="/assets/logoWhite.png"
              alt="Golden Hour Logo"
              fill // Use the `fill` prop to make the image contain the container
              className="hidden dark:block object-contain" // Apply `object-cover` for proper scaling
              priority
            />
          </div>
        </Link>

        <div className="flex space-x-6">
          <ul className="flex space-x-4 justify-center items-center font-medium">
            <li>
              <Link href="/" className="hover:text-[#FFCC00] transition-colors">
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about-us"
                className="hover:text-[#FFCC00] transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#FFCC00] transition-colors"
              >
                Contact
              </Link>
            </li>
            {/* <li>
            <Link href="/" className="hover:text-[#FFCC00] transition-colors">
              Pricing
            </Link>
          </li> */}
          </ul>
          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}

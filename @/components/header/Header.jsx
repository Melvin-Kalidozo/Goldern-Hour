"use client";

import React from "react";
import { ModeToggle } from "./ModeToogle";
import Link from "next/link";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 flex justify-between items-center p-4  backdrop-blur-md shadow-md">
      <p className="font-extrabold text-[#FFCC00] text-2xl">Golden Hour</p>
      <div className="flex space-x-6">
        <ul className="flex space-x-4 justify-center items-center font-medium">
          <li>
            <Link href="/" className="hover:text-[#FFCC00] transition-colors">
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
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
          <li>
            <Link href="/" className="hover:text-[#FFCC00] transition-colors">
              Pricing
            </Link>
          </li>
        </ul>
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

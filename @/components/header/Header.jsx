"use client";

import React, { useState } from "react";
import { ModeToggle } from "./ModeToogle";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md shadow-md py-2 md:p-0">
      <div className="flex justify-between items-center w-[90%] md:w-[80%] m-auto">
        {/* Logo Section */}
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

        {/* Navigation and Mode Toggle */}
        <div className="flex items-center space-x-4">
          {/* Mobile Mode Toggle */}
          <div className="md:hidden">
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl"
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="absolute top-full right-0 w-[70%] bg-white dark:bg-[#18181b] bg-opacity-60 dark:bg-opacity-60 backdrop-blur-lg shadow-md rounded-bl-lg md:hidden"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <ul className="font-bold text-lg flex flex-col items-end space-y-4 p-6">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-[#FFCC00] transition-colors"
                      onClick={closeMenu}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us"
                      className="hover:text-[#FFCC00] transition-colors"
                      onClick={closeMenu}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-[#FFCC00] transition-colors"
                      onClick={closeMenu}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Menu */}
          <ul className="hidden md:flex font-bold text-lg space-x-6">
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
          </ul>

          {/* Desktop Mode Toggle */}
          <div className="hidden md:block">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}

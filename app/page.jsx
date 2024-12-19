"use client";

import HorizontalCarousel from "../@/components/HomePage/Horizontal scroll/HorizontalCarousel";
import AboutUs from "../@/components/HomePage/AboutUs/AboutUs";
import Carousel from "../@/components/HomePage/Welcome/CarouselSlider";
import { motion } from "framer-motion";
import ContactUs from "../@/components/HomePage/ContactUs/ContactUs";
import BookSection from "../@/components/HomePage/ContactUs/BookSection";
import Footer from "../@/components/footer/Footer";

export default function Home() {
  return (
    <div className=" ">
      <div className=" flex p-5 justify-center items-center flex-col space-y-4">
        <h1 className="text-center text-[2.5rem] font-extrabold leading-snug">
          Golden Hours, Timeless{" "}
          <span className="relative">
            Memories
            <svg
              viewBox="0 0 286 73"
              fill="none"
              className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{
                  duration: 1.25,
                  ease: "easeInOut",
                }}
                d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                stroke="#FFCC00"
                strokeWidth="3"
              />
            </svg>
          </span>{" "}
        </h1>
        <p className=" font-extralight ">
          "The Perfect Light for Your Perfect Shot"
        </p>
      </div>
      <div className="">
        <Carousel />
      </div>

      <div className=" h-[100vh] flex justify-center items-center">
        <AboutUs />
      </div>

      <div>
        <HorizontalCarousel />
      </div>

      <div>
        <ContactUs />
      </div>

      <div>
        <BookSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

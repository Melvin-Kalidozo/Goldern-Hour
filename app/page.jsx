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
    <div className="">
      <div className="relative flex p-5 justify-center items-center flex-col space-y-4">
        <h1 className="text-center text-[2.5rem] font-extrabold leading-snug">
          Golden Hours Timeless{" "}
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

        {/* Multiple Gradient Oval Backdrops with Shades of Gold and More Faded Opacity */}
        <div
          className="absolute w-[250px] h-[350px] md:w-[400px] md:h-[600px] bg-gradient-to-r from-yellow-400 via-amber-400 to-gold-400 opacity-40 rounded-full blur-lg"
          style={{
            top: "100%",
            left: "10%",
            zIndex: -1,
          }}
        ></div>

        <div
          className="absolute w-[200px] h-[300px] md:w-[350px] md:h-[500px] bg-gradient-to-r from-yellow-400 via-amber-400 to-gold-400 opacity-30 rounded-full blur-lg"
          style={{
            top: "50%",
            right: "0%",
            zIndex: -1,
          }}
        ></div>

        <div
          className="absolute w-[150px] h-[250px] md:w-[300px] md:h-[400px] bg-gradient-to-r from-yellow-400 via-amber-400 to-gold-400 opacity-20 rounded-full blur-lg"
          style={{
            top: "75%",
            left: "25%",
            zIndex: -1,
          }}
        ></div>

        <p className="font-extralight">
          "The Perfect Light for Your Perfect Shot"
        </p>
      </div>

      <div className="">
        <Carousel />
      </div>

      <div className="min-h-[100vh] flex justify-center relative items-center">
        {/* Ellipse with Soft Edges */}
        <div
          className="absolute w-[300px] h-[250px] md:w-[500px] md:h-[350px] bg-gradient-to-r from-yellow-400 via-amber-400 to-gold-400 opacity-50 rounded-full blur-lg"
          style={{
            top: "80%",
            right: "10%",
            zIndex: -1,
          }}
        ></div>

        <AboutUs />
      </div>

      <div className="relative">
        <HorizontalCarousel />

        <div
          className="rounded-[3em] absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-gradient-to-r from-yellow-400 via-amber-400 to-gold-400 opacity-50  blur-lg"
          style={{
            top: "15%",
            left: "10%",
            zIndex: -1,
          }}
        ></div>

        <div
          className=" rounded-[3em] absolute w-[200px] h-[200px] md:w-[350px] md:h-[350px] bg-gradient-to-r from-yellow-400 via-amber-400 to-gold-400 opacity-50  blur-lg"
          style={{
            top: "50%",
            right: "5%",
            zIndex: -1,
          }}
        ></div>
      </div>

      <div>
        <ContactUs />
      </div>

      <div>
        <BookSection />
      </div>
    </div>
  );
}

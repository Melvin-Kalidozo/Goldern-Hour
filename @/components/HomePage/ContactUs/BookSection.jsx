import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function BookSection() {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanRef.current.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };

    btnRef.current.addEventListener("mousemove", handleMouseMove);
    btnRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btnRef.current.removeEventListener("mousemove", handleMouseMove);
      btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="relative bg-cover bg-center flex items-center justify-center h-[30vh]"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/4897373/pexels-photo-4897373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black dark:opacity-50 opacity-10"></div>

      {/* Spotlight Button */}
      <motion.button
        whileTap={{ scale: 0.985 }}
        ref={btnRef}
        className="relative w-full max-w-xs overflow-hidden rounded-lg bg-yellow-500 px-4 py-3 text-lg font-medium text-white"
      >
        <span className="pointer-events-none font-extrabold relative z-10 mix-blend-difference">
          Book Us
        </span>
        <span
          ref={spanRef}
          className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-[#E2E7D1] dark:bg-[#18181b]"
        />
      </motion.button>
    </div>
  );
}

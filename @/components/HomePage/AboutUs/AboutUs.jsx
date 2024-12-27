import React from "react";

export default function AboutUs() {
  return (
    <div className="w-[97%] md:w-[80%] m-auto space-y-4">
      <h1 className="text-[2rem] font-extrabold">What we offer</h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
        {/* Image Section */}
        <div className="w-full md:w-[49%] min-h-[400px] mb-4 md:mb-0">
          <img
            src="https://images.pexels.com/photos/10910631/pexels-photo-10910631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="About Us"
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>

        {/* Card Container */}
        <div className="relative w-full md:w-[49%] h-[400px] bg-[#E2E7D1] dark:bg-[#18181b] rounded-[20px] overflow-hidden flex items-center justify-center">
          {/* Rotating Gradient Background */}
          <div className="absolute w-[20%] h-[100vh] bg-gradient-to-b from-[rgb(255,204,0)] to-[rgb(255,140,0)] animate-spin-slow"></div>

          {/* Content Overlay */}
          <div className="absolute inset-[5px] bg-[#E2E7D1] dark:bg-[#18181b] rounded-[15px]"></div>

          {/* Card Text */}
          <div className="relative z-10">
            <ul className="flex flex-col space-y-8">
              <li className="font-extrabold text-[2rem] tracking-[.5em]">
                Photography
              </li>
              <li className="font-extrabold text-[2rem] tracking-[.5em]">
                Videography
              </li>
              <li className="font-extrabold text-[2rem] tracking-[.5em]">
                Graphic Design
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

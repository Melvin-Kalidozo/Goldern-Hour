import React from "react";

export default function Footer() {
  return (
    <div className="h-auto md:h-[60vh] bg-[#E2E7D1] dark:bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full p-4 md:p-0">
        {/* First Column */}
        <div
          className="relative bg-cover bg-center flex items-center justify-center h-[300px] md:h-full"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/4897373/pexels-photo-4897373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#E2E7D1] dark:bg-black dark:opacity-50 opacity-10"></div>
          <div className="relative p-4 z-10 text-center">
            <p className="mt-2 text-sm md:text-xl font-semibold text-white">
              Capturing life's moments through stunning photography and
              videography. Specializing in events, portraits, and creating
              memories that last forever.
            </p>
          </div>
        </div>

        {/* Second Column */}
        <div className="flex flex-col justify-center items-center p-5">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Third Column */}
        <div className="flex flex-col justify-center items-center p-5">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm md:text-base">Email: contact@example.com</p>
          <p className="text-sm md:text-base mt-2">Phone: +1 (123) 456-7890</p>
          <p className="text-sm md:text-base mt-2">
            Address: 123 Main Street, City, Country
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function MoreAboutUs() {
  return (
    <div className="w-[97%] md:w-[80%] m-auto flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Left Section */}
      <div className="w-full lg:w-[49%] flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-4">
        <div className="w-full lg:w-[49%] p-4 bg-[#E2E7D1] dark:bg-[#18181b] flex justify-center items-center flex-col text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Locations</h2>
          <p className="mt-2 text-base sm:text-lg">Zomba and Blantyre</p>
        </div>
        <div className="w-full lg:w-[49%] p-4 bg-[#E2E7D1] dark:bg-[#18181b] flex justify-center items-center flex-col text-center">
          <p className="text-base sm:text-lg">
            We travel to the required location if needed.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="w-full lg:w-[49%] h-[40vh] sm:h-[50vh] relative bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3989612/pexels-photo-3989612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}

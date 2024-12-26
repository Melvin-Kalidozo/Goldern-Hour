import React from "react";

export default function MoreAboutUs() {
  return (
    <div className=" w-[80%] m-auto flex justify-between">
      <div className="w-[49%] flex justify-between">
        <div className="w-[49%] m-5 p-2 bg-[#E2E7D1] dark:bg-[#18181b] flex  justify-center items-center flex-col">
          <div>
            <h2 className="text-3xl font-bold">Locations</h2>
            <p className="mt-2 text-lg">Zomba and Blantyre</p>
          </div>
        </div>
        <div className="w-[49%] m-5 p-2 bg-[#E2E7D1] dark:bg-[#18181b] flex justify-center items-center flex-col">
          <div>
            <p className="mt-2 text-lg text-center">
              We travel to the required location if needed.
            </p>
          </div>
        </div>
      </div>

      <div
        className="w-[49%] relative bg-cover bg-center flex items-center justify-center h-[30vh]"
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

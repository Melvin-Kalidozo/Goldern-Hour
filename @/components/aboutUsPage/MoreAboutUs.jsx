import React from "react";

export default function MoreAboutUs() {
  return (
    <div className=" flex justify-between">
      <div className=" w-[49%]">
        <h2 className="text-3xl font-bold">Locations</h2>
        <p className="mt-2 text-lg">
          Zomba and Blantyre, but we travel to clients too.
        </p>
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
      >
        2
      </div>
    </div>
  );
}

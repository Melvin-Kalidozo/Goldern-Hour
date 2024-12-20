import React from "react";

export default function AboutUsHeader() {
  return (
    <div
      className="relative bg-cover bg-center flex items-center justify-center h-[30vh]"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3989612/pexels-photo-3989612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black dark:opacity-50 opacity-10"></div>
      <h1 className=" text-[3rem] font-extrabold">About Us</h1>
    </div>
  );
}

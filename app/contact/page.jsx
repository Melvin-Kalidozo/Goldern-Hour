import ContactUsHeader from "../../@/components/contactUs/ContactUsHeader";
import HoverDevCards from "../../@/components/HomePage/ContactUs/HooverMediaCard";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen ">
      <ContactUsHeader />
      <div className="  w-[80%] m-auto">
        <HoverDevCards />
      </div>
    </div>
  );
}

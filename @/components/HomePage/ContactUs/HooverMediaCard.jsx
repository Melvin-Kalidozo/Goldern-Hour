import React from "react";
import { FiMail, FiFacebook, FiInstagram, FiPhone } from "react-icons/fi";

const HoverDevCards = () => {
  return (
    <div className="py-4">
      <div className="grid py-4 gap-4 grid-cols-2 lg:grid-cols-4">
        <Card title="Email" subtitle="Email Us" href="#" Icon={FiMail} />
        <Card
          title="Facebook"
          subtitle="Visit Facebook"
          href="#"
          Icon={FiFacebook}
        />
        <Card
          title="Instagram"
          subtitle="Visit Instagram"
          href="#"
          Icon={FiInstagram}
        />
        <Card title="Phone" subtitle="Call us" href="#" Icon={FiPhone} />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px]  relative overflow-hidden group dark:bg-[#18181b] bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r to-[rgb(255,204,0)] from-[rgb(255,140,0)] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-[#18181b] dark:text-slate-400 group-hover:text-[hsl(48,48%,24%)] group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-[rgb(255,204,0)] group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className=" font-extrabold text-lg group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;

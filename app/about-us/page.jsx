"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AboutUsHeader from "../../@/components/aboutUsPage/AboutUsHeader";
import StatAboutUs from "../../@/components/aboutUsPage/StatAboutUs";
import MoreAboutUs from "../../@/components/aboutUsPage/MoreAboutUs";

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1325&q=80",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 8,
    src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 12,
    src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  },
];

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const ShuffleGrid = React.memo(() => {
  const [shuffledData, setShuffledData] = useState(squareData);

  useEffect(() => {
    let shuffleCount = 0;

    const shuffleImages = () => {
      if (shuffleCount < 2) {
        setShuffledData((prev) => shuffle([...prev]));
        shuffleCount++;
      } else {
        clearInterval(interval); // Stop shuffling after two times
      }
    };

    const interval = setInterval(shuffleImages, 3000); // Shuffle every 3 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {shuffledData.slice(0, 16).map((item) => (
        <motion.img
          key={item.id}
          src={item.src}
          alt={`Image ${item.id}`}
          className="shadow-md object-cover w-32 h-32"
          layout="responsive"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </div>
  );
});

export default function AboutUs() {
  return (
    <div className="space-y-8">
      <AboutUsHeader />
      <div className="flex justify-between w-[80%] m-auto">
        {/* Shuffle Grid */}
        <div className="w-[45%]">
          <ShuffleGrid />
        </div>
        {/* About Us Content */}
        <div className="w-[50%] flex justify-center items-center">
          <div>
            <h1 className="text-[2.5rem] font-extrabold mb-4">
              We Offer Media Solutions
            </h1>
            <p className="text-lg leading-relaxed">Our services include:</p>
            <ul className="pl-6 mt-2 text-lg leading-relaxed">
              <li className="font-extralight text-sm mb-2">
                📸 <span className="font-bold">Portrait Photography</span> -
                Capturing stunning and professional portraits.
              </li>
              <li className="font-extralight text-sm mb-2">
                🎉 <span className="font-bold">Event Photography</span> -
                Documenting memorable moments at your events.
              </li>
              <li className="font-extralight text-sm mb-2">
                🎥 <span className="font-bold">Music Video Shoots</span> -
                Creating visually striking and artistic music videos.
              </li>
              <li className="font-extralight text-sm mb-2">
                📹 <span className="font-bold">Event Videography</span> -
                Recording high-quality videos of your special occasions.
              </li>
              <li className="font-extralight text-sm mb-2">
                🎨 <span className="font-bold">Graphic Design</span> - Designing
                creative posters, flyers, and banners for impactful branding.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#E2E7D1] dark:bg-[#18181b]">
        <StatAboutUs />
      </div>

      {/* More About Us Section */}
      <div>
        <MoreAboutUs />
      </div>
    </div>
  );
}

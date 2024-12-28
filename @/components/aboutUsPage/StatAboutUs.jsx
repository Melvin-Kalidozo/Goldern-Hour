import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function StatAboutUs() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const duration = 2; // Duration in seconds
    const targets = [50, 100, 200]; // Different targets for each counter

    const updateCount = (target, setCount) => {
      let start = 0;
      const step = target / (duration * 60); // approx 60fps
      const interval = setInterval(() => {
        start += step;
        if (start >= target) {
          setCount(target);
          clearInterval(interval);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60); // 60 FPS update
    };

    updateCount(targets[0], setCount1);
    updateCount(targets[1], setCount2);
    updateCount(targets[2], setCount3);

    // Cleanup intervals on unmount
    return () => {
      clearInterval();
    };
  }, []);

  return (
    <div className="w-[90%] md:w-[80%] lg:w-[60%] m-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
      {/* Counter 1 */}
      <div className="flex flex-col justify-center items-center p-3">
        <motion.h1
          className="font-extrabold text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="inline-block"
          >
            {count1}+
          </motion.div>
        </motion.h1>
        <p className="text-base sm:text-lg md:text-xl">Portraits</p>
      </div>

      {/* Counter 2 */}
      <div className="flex flex-col justify-center items-center p-3">
        <motion.h1
          className="font-extrabold text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="inline-block"
          >
            {count2}+
          </motion.div>
        </motion.h1>
        <p className="text-base sm:text-lg md:text-xl">Portraits</p>
      </div>

      {/* Counter 3 */}
      <div className="flex flex-col justify-center items-center p-3">
        <motion.h1
          className="font-extrabold text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="inline-block"
          >
            {count3}+
          </motion.div>
        </motion.h1>
        <p className="text-base sm:text-lg md:text-xl">Portraits</p>
      </div>
    </div>
  );
}

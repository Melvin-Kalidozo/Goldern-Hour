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
    <div className="w-[40%] m-auto flex justify-between">
      <div className="flex flex-col justify-center items-center">
        <motion.h1
          className="font-extrabold text-[4rem]"
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
        <p>Portraits</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <motion.h1
          className="font-extrabold text-[4rem]"
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
        <p>Portraits</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <motion.h1
          className="font-extrabold text-[4rem]"
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
        <p>Portraits</p>
      </div>
    </div>
  );
}

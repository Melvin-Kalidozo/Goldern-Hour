"use client";
import React from "react";
import { motion } from "framer-motion";

export default function StatAboutUs() {
  return (
    <div className="w-[40%] m-auto flex justify-between">
      <div className="flex flex-col justify-center items-center">
        <motion.h1
          className="font-extrabold text-[4rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          key="portraits1"
        >
          <motion.span
            initial={{ count: 0 }}
            animate={{ count: 50 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
              duration: 2,
            }}
            style={{ display: "inline-block" }}
          >
            {({ count }) => Math.floor(count)}+
          </motion.span>
        </motion.h1>
        <p>Portraits</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <motion.h1
          className="font-extrabold text-[4rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          key="portraits2"
        >
          <motion.span
            initial={{ count: 0 }}
            animate={{ count: 50 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
              duration: 2,
            }}
            style={{ display: "inline-block" }}
          >
            {({ count }) => Math.floor(count)}+
          </motion.span>
        </motion.h1>
        <p>Portraits</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <motion.h1
          className="font-extrabold text-[4rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          key="portraits3"
        >
          <motion.span
            initial={{ count: 0 }}
            animate={{ count: 50 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
              duration: 2,
            }}
            style={{ display: "inline-block" }}
          >
            {({ count }) => Math.floor(count)}+
          </motion.span>
        </motion.h1>
        <p>Portraits</p>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./bubble.module.css";

const BubbleTextComp = () => {
  return (
    <h2 className="text-[3rem] font-extrabold mb-4">
      {"We Offer Media Solutions".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default BubbleTextComp;

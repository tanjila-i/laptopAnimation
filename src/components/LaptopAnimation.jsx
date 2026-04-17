import React from "react";
import laptopPic from "../assets/laptoppic.jpg";
import { AnimatePresence, motion } from "motion/react";

const LaptopAnimation = () => {
  return (
    <div className="mt-5">
      <motion.img
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.8 }}
        src={laptopPic}
        alt=""
        className="items-center "
      />
    </div>
  );
};

export default LaptopAnimation;

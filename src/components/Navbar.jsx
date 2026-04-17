import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <div className="">
      <ul className="flex gap-15 justify-center items-center uppercase font-bold mt-5">
        <NavLink to="/about">
          <motion.li
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, y: 15 }}
          >
            About
          </motion.li>
        </NavLink>
        <NavLink to="/">
          <motion.li
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, y: 15 }}
          >
            Laptop
          </motion.li>
        </NavLink>
        <NavLink to="/buy">
          <motion.li
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            exit={{ opacity: 0, y: 15 }}
          >
            Buy
          </motion.li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;

import React from "react";
import "./Navbar.scss";
import Sidebar from "./Sidebar/Sidebar";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1.3 }}
          transition={{ duration: 0.8 }}
        >
          Akash Paul
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

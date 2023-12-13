import React from "react";
import "./Hero.scss";
import { motion } from "framer-motion";

const imgVariants = {
  initial: {
    z: -200,
    opacity: 0,
  },
  animate: {
    z: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.1,
    },
  },
};
const textVariants = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const slideVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          // animate="animate"
          whileInView="animate"
        >
          <motion.h2
            variants={textVariants}
            className=" shadow-white underline-offset-0!important"
          >
            AKASH PAUL
          </motion.h2>
          <motion.h1 variants={textVariants}>
            Full Stack Web Developer and Digital Marketing Services
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Work
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={slideVariants}
        initial="initial"
        animate="animate"
      >
        Writer Devloper Creater
      </motion.div>
      <motion.div
        className="imageContainer"
        variants={imgVariants}
        initial="initial"
        // animate="animate"
        whileInView="animate"
      >
        <motion.img variants={imgVariants} src="/me.png" alt="" />
      </motion.div>
    </div>
  );
}

export default Hero;

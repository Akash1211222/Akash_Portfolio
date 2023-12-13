import "./services.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function Services() {
  const ref = useRef();
  const isInview = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={isInview && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          i focused on Education purposes and grow <br />
          my self very easely
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <motion.img
            src="people.webp"
            alt=""
            whileHover={{
              scale: 1.4,
              transition: { duration: 1 },
              transitionDuration: "1s",
            }}
          />
          <h1>
            My
            <motion.b
              whileHover={{
                color: "orange",
                fontSize: "152px",
                transition: { duration: 1 },
                transitionDuration: "1s",
              }}
            >
              {" "}
              Education
            </motion.b>
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{
            background: "lightgray",
            color: "black",
            scale: 1.4,
            transition: { duration: 1 },
            transitionDuration: "1s",
          }}
        >
          <h2>Masters</h2>
          <p>
            Masters in Computer Science | MIA Digital University Spain. Grad.
            Persuing...
          </p>
          <h3>Persuing...</h3>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{
            background: "lightgray",
            color: "black",
            scale: 1.4,
            transition: { duration: 1 },
            transitionDuration: "1s",
          }}
        >
          <h2>Engineering</h2>
          <p>
            B.Tec IN COMPUTER SCIENCE ENGINEERING | Rashtrasant Tukadoji Maharaj
            Nagpur University Grad. July 2022.
          </p>
          <h3>CGPA: 8.42</h3>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{
            background: "lightgray",
            color: "black",
            scale: 1.4,
            transition: { duration: 1 },
            transitionDuration: "1s",
          }}
        >
          <h2>High School</h2>
          <p>
            12'th Board PCM WITH COMPUTER SCIENCE | Shri Niketan Junior Collage
            Grad. Feb 2015
          </p>
          <h3>Per: 60.77 %</h3>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{
            background: "lightgray",
            color: "black",
            scale: 1.4,
            transition: { duration: 1 },
            transitionDuration: "1s",
          }}
        >
          <h2>School</h2>
          <p>10'th Board Vidya Vihar Convent High School Grad. May 2013 |</p>
          <h3>Per: 62 %</h3>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services;

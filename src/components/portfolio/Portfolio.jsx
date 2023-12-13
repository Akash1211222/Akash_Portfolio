import React from "react";
import "./portfolio.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const item = [
  {
    id: 1,
    title: "Gaana-Clone",
    img: "https://timesinternet.in/blog/wp-content/uploads/2021/12/Gaana.jpg",
    desc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat cumque iure aperiam, laborum laudantium natus. Cum molestiae nulla explicabo nobis.",
  },
  {
    id: 2,
    title: "Netflix-Clone",
    img:
      "https://cdn.dribbble.com/users/1927379/screenshots/13876464/netflix.png",
    desc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat cumque iure aperiam, laborum laudantium natus. Cum molestiae nulla explicabo nobis.",
  },
  {
    id: 3,
    title: "Weather App",
    img: "https://i.ytimg.com/vi/48YwaTiYau0/maxresdefault.jpg",
    desc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat cumque iure aperiam, laborum laudantium natus. Cum molestiae nulla explicabo nobis.",
  },
  {
    id: 4,
    title: "Face mask detection",
    img:
      "https://www.tycosecurityproducts.in/blogs/img/face-mask-detection-technology-big.jpg",
    desc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat cumque iure aperiam, laborum laudantium natus. Cum molestiae nulla explicabo nobis.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    terger: ref,
    // offset: ["end end", "start start"],
  });

  //   const y = useTransform(scrollYProgress, [0, 1], [-300, 250]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    terger: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {item.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;

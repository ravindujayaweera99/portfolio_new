import "./Hero.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    // Trigger animation once the component is mounted
    controls.start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.75, ease: "easeOut" },
    });
    setLoaded(true);
  }, [controls]);
  return (
    <motion.div
      style={{ y: loaded ? 0 : -100, opacity: loaded ? 1 : 0 }}
      animate={controls}
    >
      <div className="container">
        <div className="hero">
          <div className="left">
            <h1>
              I'm <span className="name">Ravindu Jayaweera</span>
            </h1>
            <h2>Freelance Web Developer</h2>
            <button className="cv">Take a Look on my CV</button>
          </div>
          <div className="right">
            <h1>Image Apprears Here</h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;

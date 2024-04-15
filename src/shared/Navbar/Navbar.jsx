import { useEffect, useState } from "react";
import "./Navbar.css";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const [loaded, setLoaded] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    // Trigger animation once the component is mounted
    controls.start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.75, ease: "easeIn" },
    });
    setLoaded(true);
  }, [controls]);

  return (
    <motion.div
      style={{ y: loaded ? 0 : -100, opacity: loaded ? 1 : 0 }}
      animate={controls}
    >
      <div className="navbar">
        <div className="logo">
          <h1>RJ</h1>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>Skills</li>
            <li>Portfolio</li>
          </ul>
        </div>
        <div className="hireme">
          <button>Hire Me</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;

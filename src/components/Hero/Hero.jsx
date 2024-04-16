import "./Hero.css";
import { motion, easeIn } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: easeIn }}
      id="hero"
    >
      <div className="container">
        <div className="hero">
          <div className="left">
            <h1>
              I'm <span className="name">Ravindu Jayaweera</span>
            </h1>
            <h2>Freelance Web Developer</h2>
            <button className="hire">Hire Me</button>
            <button className="cv">Take a Look on my CV</button>
          </div>
          <div className="right">
            <h1>Image Apprears Here</h1>
          </div>
          <h4>Scroll Down to Explore about Me!</h4>
        </div>
        <div className="socials">
          <ul>
            <li>
              <h4>-</h4>
            </li>
            <li>
              <a href="#">Github</a>
            </li>
            <li>
              <a href="#">Linkedin</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <h4>-</h4>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;

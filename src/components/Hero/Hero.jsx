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

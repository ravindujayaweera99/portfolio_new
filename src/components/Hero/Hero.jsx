import "./Hero.css";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import cv from "../../assets/Ravindu.pdf";

const openCv = () => window.open(cv, "_blank", "noreferrer");

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <motion.section
      id="hero"
      ref={heroRef}
      className="heroX"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
    >
      {/* background */}
      <div className="heroX-bg" aria-hidden="true" />
      <div className="heroX-grain" aria-hidden="true" />

      <div className="heroX-wrap">
        {/* LEFT */}
        <div className="heroX-left">
          <div className="heroX-tag">
            <span className="dot" />
            Available for freelance work
          </div>

          <h1 className="heroX-title">
            <span className="muted">Hi,</span> I’m{" "}
            <span className="accent">Ravindu Jayaweera</span>
            <br />
            <span className="thin">I am Turning Ideas into Reality</span>
          </h1>

          <div className="heroX-chips" aria-hidden="true">
            <span className="chip">Timely Delivery</span>
            <span className="chip">Clean UI</span>
            <span className="chip">Flexible</span>
            <span className="chip">Updated</span>
          </div>

          <a className="heroX-scroll" href="#skills">
            <span className="mouse" />
            <span>Scroll to explore</span>
          </a>
        </div>

        {/* RIGHT DOCK */}
        <div className="heroX-right">
          <div className="dock">
            <button className="dock-btn primary" onClick={openCv}>
              View CV
              <span className="arrow">↗</span>
            </button>

            <a className="dock-btn ghost" href="#contact">
              Hire Me
              <span className="arrow">→</span>
            </a>

            <div className="dock-divider" />

            <a
              className="dock-link"
              href="https://github.com/ravindujayaweera99"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="dock-link"
              href="https://www.linkedin.com/in/ravindu-jayaweera-a170721b9/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="dock-link"
              href="https://web.facebook.com/ravindu.jayaweera.96/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>

          <div className="floatCard" aria-hidden="true">
            <div className="floatRail" />
            <p className="floatTitle">Quick Snapshot</p>
            <div className="floatGrid">
              <div className="tile">
                <p className="k">Projects</p>
                <p className="v">10+</p>
              </div>
              <div className="tile">
                <p className="k">Clients</p>
                <p className="v">50+</p>
              </div>
              <div className="tile">
                <p className="k">Experience</p>
                <p className="v">2+ Years</p>
              </div>
              {/* <div className="tile">
                <p className="k">Focus</p>
                <p className="v"></p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

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

    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <motion.section
      id="hero"
      ref={heroRef}
      className="heroC"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
    >
      {/* corporate background */}
      <div className="heroC-bg" aria-hidden="true" />
      <div className="heroC-spot" aria-hidden="true" />
      <div className="heroC-grain" aria-hidden="true" />

      <div className="heroC-wrap">
        {/* LEFT */}
        <div className="heroC-left">
          <div className="heroC-tag">
            <span className="dot" />
            Available for freelance work
          </div>

          <h1 className="heroC-title">
            <span className="muted">Hi,</span> I’m{" "}
            <span className="accent">Ravindu Jayaweera</span>
            <br />
            <span className="thin">Turning Ideas into Reality</span>
          </h1>

          <p className="heroC-desc">
            Full-stack engineer focused on clean UI, maintainable codebases, and
            reliable delivery from idea → production.
          </p>

          <div className="heroC-actions">
            <button className="heroC-btn primary" onClick={openCv}>
              View CV <span className="arrow">↗</span>
            </button>
            <a className="heroC-btn ghost" href="#contact">
              Hire Me <span className="arrow">→</span>
            </a>
          </div>

          <div className="heroC-chips" aria-hidden="true">
            <span className="chip">Timely Delivery</span>
            <span className="chip">Clean UI</span>
            <span className="chip">Flexible</span>
            <span className="chip">Updated</span>
          </div>

          <a className="heroC-scroll" href="#skills">
            <span className="mouse" />
            <span>Scroll to explore</span>
          </a>
        </div>

        {/* RIGHT */}
        <div className="heroC-right">
          <div className="dockC">
            <button className="dockC-btn primary" onClick={openCv}>
              View CV <span className="arrow">↗</span>
            </button>

            <a className="dockC-btn ghost" href="#contact">
              Hire Me <span className="arrow">→</span>
            </a>

            <div className="dockC-divider" />

            <a
              className="dockC-link"
              href="https://github.com/ravindujayaweera99"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="dockC-link"
              href="https://www.linkedin.com/in/ravindu-jayaweera-a170721b9/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="dockC-link"
              href="https://web.facebook.com/ravindu.jayaweera.96/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>

          <div className="heroC-snap" aria-hidden="true">
            <div className="heroC-rail" />
            <p className="heroC-snapTitle">Quick Snapshot</p>

            <div className="heroC-grid">
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
              <div className="tile">
                <p className="k">Focus</p>
                <p className="v">Full-Stack</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

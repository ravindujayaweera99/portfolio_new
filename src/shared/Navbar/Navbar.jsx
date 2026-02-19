import { useEffect, useMemo, useState } from "react";
import "./Navbar.css";
import { motion } from "framer-motion";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "feedback-section", label: "Feedback" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("about");
  const [hidden, setHidden] = useState(false);

  const sectionIds = useMemo(() => sections.map((s) => s.id), []);

  // Active link tracking
  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      { root: null, threshold: [0.25, 0.35, 0.5, 0.65] }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sectionIds]);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY;

      if (y < 80) setHidden(false);
      else setHidden(goingDown);

      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`navC ${hidden ? "navC--hidden" : ""}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: "easeInOut" }}
    >
      <div className="navC-inner">
        <a className="navC-logo" href="#hero" aria-label="Home">
          <span className="navC-logoBadge">RJ</span>
        </a>

        <ul className="navC-links">
          {sections.slice(0, 4).map((s) => (
            <li key={s.id}>
              <a
                className={`navC-link ${active === s.id ? "isActive" : ""}`}
                href={`#${s.id}`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navC-actions">
          <a className="navC-btn" href="#contact">
            Let’s Talk <span className="navC-arrow">→</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

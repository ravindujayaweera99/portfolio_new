import "./Feedback.css";
import { useEffect, useMemo, useState } from "react";

import feedback1 from "../../assets/feedback-images/feedback1.png";
import feedback2 from "../../assets/feedback-images/feedback2.png";
import feedback3 from "../../assets/feedback-images/feedback3.png";
import feedback4 from "../../assets/feedback-images/feedback4.png";
import feedback5 from "../../assets/feedback-images/feedback5.png";
import feedback6 from "../../assets/feedback-images/feedback6.png";

const feedbacks = [
  { id: 1, src: feedback1 },
  { id: 2, src: feedback2 },
  { id: 3, src: feedback3 },
  { id: 4, src: feedback4 },
  { id: 5, src: feedback5 },
  { id: 6, src: feedback6 },
];

const Feedback = () => {
  const items = useMemo(() => feedbacks, []);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openAt = (idx) => {
    setActiveIndex(idx);
    setOpen(true);
  };

  const close = () => setOpen(false);

  const prev = () =>
    setActiveIndex((i) => (i - 1 + items.length) % items.length);

  const next = () =>
    setActiveIndex((i) => (i + 1) % items.length);

  // lock scroll when modal is open
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  // keyboard controls
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, items.length]);

  const active = items[activeIndex];

  return (
    <section className="feedC" id="feedback-section">
      <div className="feedC-bg" aria-hidden="true" />

      <div className="feedC-wrap">
        <header className="feedC-header">
          <p className="feedC-kicker">Testimonials</p>
          <h2 className="feedC-title">Client Feedback</h2>
          <p className="feedC-sub">
            Screenshots of real feedback — click any card to view.
          </p>
        </header>

        <div className="feedC-grid">
          {items.map((f, idx) => (
            <button
              key={f.id}
              type="button"
              className="feedC-card"
              onClick={() => openAt(idx)}
              aria-label={`Open feedback ${f.id}`}
            >
              <div className="feedC-rail" aria-hidden="true" />
              <div className="feedC-media">
                <img src={f.src} alt={`Client feedback ${f.id}`} loading="lazy" />
              </div>
              <div className="feedC-footer" aria-hidden="true">
                <span className="feedC-pill">View</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ===== Lightbox Modal ===== */}
      {open && (
        <div
          className="lb"
          role="dialog"
          aria-modal="true"
          aria-label="Feedback viewer"
          onMouseDown={(e) => {
            // close only when clicking backdrop (not the content)
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="lb-panel">
            <div className="lb-top">
              <div className="lb-meta">
                <span className="lb-kicker">Testimonial</span>
                <span className="lb-count">
                  {activeIndex + 1} / {items.length}
                </span>
              </div>

              <button className="lb-close" onClick={close} aria-label="Close">
                ✕
              </button>
            </div>

            <div className="lb-rail" aria-hidden="true" />

            <div className="lb-body">
              <button
                className="lb-nav left"
                onClick={prev}
                aria-label="Previous"
                type="button"
              >
                ‹
              </button>

              <div className="lb-media">
                <img src={active.src} alt={`Client feedback ${active.id}`} />
              </div>

              <button
                className="lb-nav right"
                onClick={next}
                aria-label="Next"
                type="button"
              >
                ›
              </button>
            </div>

            <div className="lb-bottom">
              <div className="lb-dots" aria-hidden="true">
                {items.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`lb-dot ${i === activeIndex ? "on" : ""}`}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Go to item ${i + 1}`}
                  />
                ))}
              </div>

              <div className="lb-hint" aria-hidden="true">
                ESC to close • ← → to navigate
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Feedback;

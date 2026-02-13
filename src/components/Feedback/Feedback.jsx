import "./Feedback.css";
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
  return (
    <section className="feedback2" id="feedback-section">
      <div className="feedback2-bg" aria-hidden="true">
        <span className="fblob f1" />
        <span className="fblob f2" />
      </div>

      <header className="feedback2-header">
        <p className="feedback2-kicker">Testimonials</p>
        <h2 className="feedback2-title">Client Feedback</h2>
        <p className="feedback2-sub">
          Screenshots of real feedback — click any card to view in full size.
        </p>
      </header>

      <div className="feedback2-grid">
        {feedbacks.map((f) => (
          <a
            key={f.id}
            className="f-card"
            href={f.src}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open feedback ${f.id} in full size`}
          >
            <div className="f-topline" aria-hidden="true" />
            <div className="f-media">
              <img src={f.src} alt={`Client feedback ${f.id}`} loading="lazy" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Feedback;

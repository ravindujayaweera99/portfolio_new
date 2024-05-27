import "./Feedback.css";
import feedback1 from "../../assets/feedback-images/feedback1.png";
import feedback2 from "../../assets/feedback-images/feedback2.png";
import feedback3 from "../../assets/feedback-images/feedback3.png";
import feedback4 from "../../assets/feedback-images/feedback4.png";
import feedback5 from "../../assets/feedback-images/feedback5.png";

const feedbacks = [
  {
    id: 1,
    src: feedback1,
  },
  {
    id: 2,
    src: feedback2,
  },
  {
    id: 3,
    src: feedback3,
  },
  {
    id: 4,
    src: feedback4,
  },
  {
    id: 5,
    src: feedback5,
  },
];

const Feedback = () => {
  return (
    <div id="feedback-section">
      <h1 id="feedback-title">Feedbacks given by Some Clients</h1>
      <div className="feedback-container">
        {feedbacks.map((f) => (
          <div className="feedback" key={f.id}>
            <img src={f.src} alt="project-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;

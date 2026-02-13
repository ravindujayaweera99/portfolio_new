import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_a6tbnxh", "template_7td2nfd", form.current, {
        publicKey: "hYV6NWIeqixBmCEBX",
      })
      .then(
        () => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thanks! I’ll get back to you soon.",
            showConfirmButton: false,
            timer: 1600,
          });
          form.current.reset();
        },
        () => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again.",
          });
        }
      );
  };

  return (
    <section className="contact2" id="contact">
      <div className="contact2-bg" aria-hidden="true">
        <span className="cblob c1" />
        <span className="cblob c2" />
      </div>

      <header className="contact2-header">
        <p className="contact2-kicker">Contact</p>
        <h2 className="contact2-title">Let’s build something</h2>
        <p className="contact2-sub">
          Share your requirement and I’ll reply with a plan, timeline, and next steps.
        </p>
      </header>

      <div className="contact2-card">
        <div className="contact2-rail" aria-hidden="true" />

        <form ref={form} onSubmit={sendEmail} className="contact2-form">
          <div className="grid">
            <div className="field">
              <label htmlFor="firstname">First Name</label>
              <input type="text" name="firstname" id="firstname" placeholder="Ravindu" required />
            </div>

            <div className="field">
              <label htmlFor="lastname">Last Name</label>
              <input type="text" name="lastname" id="lastname" placeholder="Jayaweera" required />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="you@email.com" required />
            </div>

            <div className="field">
              <label htmlFor="contactno">Contact No</label>
              <input type="text" name="contactno" id="contactno" placeholder="+94 ..." />
            </div>

            <div className="field full">
              <label htmlFor="message">Your Requirement</label>
              <textarea
                name="message"
                id="message"
                placeholder="Tell me what you need (features, deadline, budget range, etc.)"
                rows={5}
                required
              />
            </div>
          </div>

          <div className="actions">
            <button type="submit" className="sendBtn">
              Submit Requirement <span className="arrow">→</span>
            </button>

            <p className="note">
              Typical response time: within 24 hours.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

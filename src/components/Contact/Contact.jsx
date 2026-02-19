import "./Contact.css";
import { useEffect, useRef } from "react";
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

  // optional: nicer autofill colors in dark UI (no logic changes)
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      input:-webkit-autofill, textarea:-webkit-autofill {
        -webkit-text-fill-color: rgba(255,255,255,0.92) !important;
        transition: background-color 9999s ease-in-out 0s;
        caret-color: rgba(255,255,255,0.92);
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section className="contactC" id="contact">
      <div className="contactC-bg" aria-hidden="true" />

      <div className="contactC-wrap">
        <header className="contactC-header">
          <p className="contactC-kicker">Contact</p>
          <h2 className="contactC-title">Let’s build something</h2>
          <p className="contactC-sub">
            Share your requirement and I’ll reply with a plan, timeline, and next steps.
          </p>
        </header>

        <div className="contactC-panel">
          {/* left info */}
          <aside className="contactC-aside">
            <div className="contactC-rail" aria-hidden="true" />
            <h3 className="contactC-asideTitle">What I can help with</h3>

            <ul className="contactC-list">
              <li>Full-stack web apps (React / Node / Laravel / Spring Boot)</li>
              <li>API integration, dashboards, admin panels</li>
              <li>UI improvements, performance, bug fixing</li>
            </ul>

            <div className="contactC-badges" aria-hidden="true">
              <span className="badge">Clear timeline</span>
              <span className="badge">Clean UI</span>
              <span className="badge">Reliable delivery</span>
            </div>

            <p className="contactC-note">
              Typical response time: <strong>within 24 hours</strong>.
            </p>
          </aside>

          {/* right form */}
          <div className="contactC-card">
            <form ref={form} onSubmit={sendEmail} className="contactC-form">
              <div className="grid">
                <div className="field">
                  <label htmlFor="firstname">First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="Ravindu"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Jayaweera"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@email.com"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="contactno">Contact No</label>
                  <input
                    type="text"
                    name="contactno"
                    id="contactno"
                    placeholder="+94 ..."
                  />
                </div>

                <div className="field full">
                  <label htmlFor="message">Your Requirement</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Tell me what you need (features, deadline, budget range, etc.)"
                    rows={6}
                    required
                  />
                </div>
              </div>

              <div className="actions">
                <button type="submit" className="sendBtn">
                  Submit Requirement <span className="arrow">→</span>
                </button>

                <p className="miniHint" aria-hidden="true">
                  Include: scope • deadline • budget range
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

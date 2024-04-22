import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_a6tbnxh", "template_7td2nfd", form.current, {
        publicKey: "d2HZaUec7we8Nd3GA",
      })
      .then(
        () => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you for Submitting your Requirements!",
            showConfirmButton: false,
            timer: 1500
          });
          form.current.reset();
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      );
  };

  return (
    <div id="contact">
      <h1 className="contact-title">Let Me know your Requirement</h1>
      <div className="contact-wrapper">
        <form ref={form} onSubmit={sendEmail} id="contact-from">
          <div className="form-group">
            <label htmlFor="firstname">First Name:</label>
            <input type="text" name="firstname" id="firstname" />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name:</label>
            <input type="text" name="lastname" id="lastname" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="contactno">Contact No:</label>
            <input type="text" name="contactno" id="contactno" />
          </div>
          <div className="form-group">
            {" "}
            <label htmlFor="message">Your Requirement:</label>
            <input type="text" name="message" id="message" />
          </div>
          <div className="form-group">
            <button type="submti">Submit your Requirements</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

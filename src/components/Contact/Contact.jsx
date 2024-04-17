import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="contact-title">Let Me know your Requirement</h1>
      <div className="contact-wrapper">
        <form action="">
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

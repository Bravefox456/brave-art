import React from "react";
import "../components/contact.css"; // You can style this as needed

const Contact = () => {
  return (
    <div className="gpt3__contactus section__margin" id="contact-us">
      <div className="gpt3__contactus-header">
        <h1 className="gradient__text_1">Get in Touch</h1>
        <p>We're here to help you!</p>
      </div>
      <div className="gpt3__contactus-container">
        <form className="gpt3__contactus-form">
          <div className="gpt3__contactus-form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div className="gpt3__contactus-form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>
          <div className="gpt3__contactus-form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your Message" required />
          </div>
          <button type="submit" className="gpt3__contactus-button">Send Message</button>
        </form>
      </div>
      <div className="work__withus-apply">
        <br/>
        <br/>
        <br/>
      <p>
    If you encounter any issues with the above form, please reach out to us at{" "}
    <a href="mailto:support@mechartista.com">contact@mechartistatechnocrafts.com</a>.
  </p>
      </div>
    </div>
  );
};

export default Contact;

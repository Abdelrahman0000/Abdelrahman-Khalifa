
import React, { useContext, useRef, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const { user_name, user_email, message } = form.current;

    // Construct the email message
    const emailMessage = `Name: ${user_name.value}\nEmail: ${user_email.value}\nMessage: ${message.value}`;

    // Send the email using the user's default email client
    window.location.href = `mailto:khlyftbdh5@gmail.com?subject=Contact%20Form&body=${encodeURIComponent(emailMessage)}`;

    setDone(true);
    form.current.reset();
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          <span>Get in Touch</span>
          <span>Contact me</span>
          <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Name" />
          <input type="email" name="user_email" className="user" placeholder="Email" />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contacting me"}</span>
          <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
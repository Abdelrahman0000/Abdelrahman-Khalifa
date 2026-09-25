import React, { useRef, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const { user_name, user_email, message } = form.current;
    const emailMessage = `Name: ${user_name.value}\nEmail: ${user_email.value}\nMessage: ${message.value}`;
    window.location.href = `mailto:khlyftbdh5@gmail.com?subject=Contact%20Form&body=${encodeURIComponent(emailMessage)}`;
    setDone(true);
    form.current.reset();
  };

  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Let’s build it</span>
          <span>
            United Arab Emirates · open to remote work across the region.
          </span>
          <div className="c-meta">
            <a href="mailto:khlyftbdh5@gmail.com">khlyftbdh5@gmail.com</a>
            <a href="https://wa.me/201098253130" target="_blank" rel="noreferrer">
              +20 109 825 3130
            </a>
            <a
              href="https://www.linkedin.com/in/abdelrahman-samir-khalifa-05a881216/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="https://github.com/Abdelrahman0000/" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
          <div className="blur s-blur1" style={{ background: "#ec1839" }}></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Name" required />
          <input type="email" name="user_email" className="user" placeholder="Email" required />
          <textarea name="message" className="user" placeholder="Message" required />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks — your mail app should open now."}</span>
          <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

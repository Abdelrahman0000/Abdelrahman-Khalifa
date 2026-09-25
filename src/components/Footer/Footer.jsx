import React from "react";
import "./Footer.css";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-content">
        <p>
          <a href="mailto:khlyftbdh5@gmail.com">khlyftbdh5@gmail.com</a>
          <span> · </span>
          <a href="https://wa.me/201098253130">+20 109 825 3130</a>
          <span> · UAE</span>
        </p>
        <div className="f-icons">
          <a href="https://github.com/Abdelrahman0000/" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Gitub color="white" size={"3rem"} />
          </a>
          <a
            href="https://www.linkedin.com/in/abdelrahman-samir-khalifa-05a881216/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin color="white" size={"3rem"} />
          </a>
          <a href="https://wa.me/201098253130" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <Whatsapp color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

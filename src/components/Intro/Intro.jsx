import React, { useContext, useEffect, useState } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.webp";
import Vector2 from "../../img/Vector2.webp";
import boy from "../../img/me_2.webp";
import glassesimoji from "../../img/glassesimoji.webp";
import thumbup from "../../img/thumbup.webp";
import crown from "../../img/crown.webp";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.webp";
import LinkedIn from "../../img/linkedin.webp";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [showArt, setShowArt] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(min-width: 1046px)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1046px)");
    const onChange = () => setShowArt(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="Intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span className="i-kicker">
            <i className="live-dot" />
            Front-End Developer · React.js & TypeScript
          </span>
          <span className="i-hello" style={{ color: darkMode ? "white" : "" }}>
            Abdelrahman
          </span>
          <span className="i-title">Samer Kalefa</span>
          <span className="i-bio">
            I build responsive, high-performance interfaces with React,
            TypeScript, and modern JavaScript. Two-plus years shipping
            production platforms for clients in the UAE, Saudi Arabia, and
            Lebanon — from foundation portals to legal-service sites — with
            React Query, reusable components, and a bias for speed.
          </span>
        </div>
        <div className="i-langs">
          <span>UAE</span>
          <span>KSA</span>
          <span>Lebanon</span>
          <span>Arabic · Native</span>
          <span>English · Professional</span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        <div className="i-icons">
          <a href="https://github.com/Abdelrahman0000/" target="_blank" rel="noreferrer" aria-label="GitHub">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/abdelrahman-samir-khalifa-05a881216/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <img src={LinkedIn} alt="" />
          </a>
          <a className="i-wa" href="https://wa.me/201098253130" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
              <path fill="currentColor" d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10.1 10.1 0 0 0 4.65 1.12h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 14.05c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.81-.11-.41-.14-.95-.31-1.64-.61-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09 1-2.37.24-.26.64-.38 1.02-.38.12 0 .23 0 .33.01.3.01.44.03.64.49.24.57.82 1.97.89 2.11.07.14.12.31.02.49-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.55.16.26.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.16 1.34.26.14.42.12.57-.07.16-.19.66-.77.84-1.03.17-.26.35-.22.59-.13.24.09 1.52.72 1.78.85.26.12.43.19.5.29.06.1.06.61-.18 1.29z"/>
            </svg>
          </a>
        </div>
      </div>
      {showArt && <div className="i-right">
        <span
          className="shape-one"
          aria-hidden="true"
          style={{
            WebkitMaskImage: `url(${Vector1})`,
            maskImage: `url(${Vector1})`,
          }}
        />
        <span
          className="shape-two"
          aria-hidden="true"
          style={{
            WebkitMaskImage: `url(${Vector2})`,
            maskImage: `url(${Vector2})`,
          }}
        />
        <img src={boy} alt="Abdelrahman Samer Kalefa" />
        <img className="emoji-float" src={glassesimoji} alt="" />
        <div className="floating-div">
          <FloatinDiv img={crown} text1="TypeScript" text2="Specialist" />
        </div>
        <div className="floating-div">
          <FloatinDiv img={thumbup} text1="React" text2="Developer" />
        </div>
        <div className="blur" style={{ background: "#ff7a93" }}></div>
        <div
          className="blur"
          style={{
            background: "#ec1839",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>}
    </div>
  );
};

export default Intro;

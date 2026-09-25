import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.webp";
import Glasses from "../../img/glasses.webp";
import Humble from "../../img/humble.webp";
import { themeContext } from "../../Context";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="services">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>What I</span>
        <span>actually ship</span>
        <span>
          Pixel-accurate interfaces, component systems, and API-driven screens
          that stay fast on real devices.
          <br />
          React, TypeScript, React Query, Redux, Tailwind, and SCSS — wired to
          REST, reviewed in Git, and released on schedule.
        </span>
        <a href="/Abdelrahman-Kalefa-CV.pdf" download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ec1839" }}></div>
      </div>
      <div className="cards">
        <div className="float-a">
          <Card
            emoji={HeartEmoji}
            heading={"Interface engineering"}
            detail={"Responsive, cross-browser React and TypeScript UI with a reusable component library."}
          />
        </div>
        <div className="float-b">
          <Card
            emoji={Glasses}
            heading={"Server state"}
            detail={"React Query and REST: fetching, caching, and screens that stay in sync with the API."}
          />
        </div>
        <div className="float-c">
          <Card
            emoji={Humble}
            heading={"Speed & access"}
            detail={"Performance, accessibility, SEO-friendly structure, and mobile-first layouts."}
          />
        </div>
        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  );
};

export default Services;

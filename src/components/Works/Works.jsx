import React, { useContext } from "react";
import "./Works.css";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";

const jobs = [
  {
    dates: "02/2025 – 07/2025",
    role: "Front-End Developer",
    company: "Fonda",
    place: "UAE",
    text: "React and TypeScript interfaces for UAE products, React Query on the API layer, and a reusable component library built with design and backend.",
    stack: ["React.js", "TypeScript", "React Query", "REST"],
  },
  {
    dates: "12/2023 – 10/2024",
    role: "Front-End Developer",
    company: "Gamifiresa",
    place: "Saudi Arabia",
    text: "Owned the front-end lifecycle: design-to-code, API integration, performance tuning, and release with mobile and backend engineers.",
    stack: ["React.js", "JavaScript", "Performance", "Release"],
  },
  {
    dates: "11/2023 – 02/2024",
    role: "Front-End Developer",
    company: "Massfluence",
    place: "Lebanon",
    text: "Interactive interfaces with HTML, SCSS, JavaScript, and Bootstrap — tighter responsiveness, accessibility, and cross-browser stability.",
    stack: ["HTML5", "SCSS", "JavaScript", "Bootstrap"],
  },
];

const orbit = [
  ["Fonda", "UAE"],
  ["Gamifiresa", "KSA"],
  ["Massfluence", "LB"],
  ["React", "TS"],
  ["Query", "APIs"],
];

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works" id="works">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Shipped across</span>
          <span>three countries</span>
          <span>
            Commercial front-end work for teams in the UAE, Saudi Arabia, and
            Lebanon. B.Sc. Computer Science, Menofia University, 2020–2024.
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div className="blur s-blur1" style={{ background: "#ff7a93" }}></div>
        </div>
        <ol className="timeline">
          {jobs.map((job) => (
            <li key={job.company}>
              <span className="when">{job.dates}</span>
              <h3>
                {job.role}
                <em>
                  {job.company} · {job.place}
                </em>
              </h3>
              <p>{job.text}</p>
              <div className="chips">
                {job.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="w-right">
        <div className="w-mainCircle">
          {orbit.map(([name, place]) => (
            <div className="w-secCircle" key={name}>
              <b>{name}</b>
              <small>{place}</small>
            </div>
          ))}
        </div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;

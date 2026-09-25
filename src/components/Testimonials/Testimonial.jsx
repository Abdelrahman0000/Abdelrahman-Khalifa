import React from "react";
import "./Testimonial.css";

const outer = [
  "React.js",
  "TypeScript",
  "JavaScript",
  "React Query",
  "Redux",
  "Tailwind",
  "SCSS",
  "Bootstrap",
  "HTML5",
  "CSS3",
  "Chart.js",
  "jQuery",
];

const inner = ["Vite", "Webpack", "Git", "Postman", "REST", "a11y", "SEO", "Vercel"];

function Ring({ items, className }) {
  return (
    <div className={`ring ${className}`}>
      {items.map((item, i) => (
        <span
          className="orbit-slot"
          key={item}
          style={{ "--a": `${(360 / items.length) * i}deg` }}
        >
          <span className="pill-spin">
            <span className="pill">{item}</span>
          </span>
        </span>
      ))}
    </div>
  );
}

const Testimonial = () => {
  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>A stack </span>
        <span>in orbit </span>
        <span>around the work.</span>
      </div>
      <div className="sky">
        <div className="core">
          <strong>React × TS</strong>
          <small>2+ years · 3 countries</small>
        </div>
        <Ring items={outer} className="outer" />
        <Ring items={inner} className="inner" />
      </div>
    </div>
  );
};

export default Testimonial;

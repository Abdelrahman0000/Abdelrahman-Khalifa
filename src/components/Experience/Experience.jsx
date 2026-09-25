import React, { useContext, useEffect, useRef, useState } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";

const belt =
  "REACT.JS   ·   TYPESCRIPT   ·   REACT QUERY   ·   REDUX   ·   TAILWIND   ·   SCSS   ·   VITE   ·   WEBPACK   ·   REST APIS   ·   ACCESSIBILITY   ·   PERFORMANCE   ·   ";

function Stat({ value, suffix, label, note }) {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [shown, setShown] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || value == null) return undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 1045px)").matches;
    if (reduce) {
      setShown(value);
      return undefined;
    }
    let raf;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min(1, (now - start) / 1100);
          setShown(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        obs.disconnect();
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <div className="achievement" ref={ref}>
      <div className="circle" style={{ color: darkMode ? "var(--orange)" : "" }}>
        {value == null ? "BSc" : `${shown}${suffix}`}
      </div>
      <span style={{ color: darkMode ? "white" : "" }}>{label}</span>
      <span>{note}</span>
    </div>
  );
}

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <Stat value={2} suffix="+" label="years" note="Experience" />
      <Stat value={3} suffix="" label="countries" note="UAE · KSA · Lebanon" />
      <Stat value={5} suffix="+" label="live" note="Production" />
      <Stat value={null} suffix="" label="Computer Science" note="Menofia University" />
      <div className="belt" aria-hidden="true">
        <div>
          <span>{belt}</span>
          <span>{belt}</span>
        </div>
      </div>
    </div>
  );
};

export default Experience;

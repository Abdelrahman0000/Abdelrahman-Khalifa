import React from "react";
import "./BackgroundFX.css";

const dots = Array.from({ length: 26 }, (_, i) => i);

const BackgroundFX = () => {
  return (
    <div className="fx" aria-hidden="true">
      <div className="fx-grid" />
      <div className="fx-aurora a1" />
      <div className="fx-aurora a2" />
      <div className="fx-aurora a3" />
      <div className="fx-scan" />
      <div className="fx-ring ring-a" />
      <div className="fx-ring ring-b" />
      <div className="fx-ring ring-c" />
      <span className="fx-geo g1" />
      <span className="fx-geo g2" />
      <span className="fx-geo g3" />
      <div className="fx-orbit orbit-tr">
        <i />
        <i />
        <i />
      </div>
      <div className="fx-orbit orbit-bl">
        <i />
        <i />
      </div>
      {dots.map((i) => (
        <span
          key={i}
          className={`fx-dot tone-${i % 3}`}
          style={{
            left: `${(i * 41) % 100}%`,
            top: `${(i * 19) % 100}%`,
            animationDelay: `${(i % 12) * 0.4}s`,
            animationDuration: `${8 + (i % 9)}s`,
            width: `${4 + (i % 4) * 3}px`,
            height: `${4 + (i % 4) * 3}px`,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundFX;

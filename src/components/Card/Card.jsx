import React from "react";
import "./Card.css";
import { Link } from "react-scroll";

const Card = ({ emoji, heading, detail }) => {
  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <Link to="portfolio" smooth={true} spy={true} className="c-button">
        See the work
      </Link>
    </div>
  );
};

export default Card;

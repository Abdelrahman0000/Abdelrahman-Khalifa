import React, { useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const links = [
  ["Navbar", "Home"],
  ["services", "Craft"],
  ["works", "Career"],
  ["portfolio", "Projects"],
  ["testimonial", "Stack"],
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">Kalefa</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            {links.map(([to, label]) => (
              <li key={to}>
                <Link activeClass="active" to={to} spy={true} smooth={true}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
        <button
          type="button"
          className={`n-burger ${open ? "is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      {open && (
        <nav className="n-drawer">
          {links.map(([to, label]) => (
            <Link key={to} activeClass="active" to={to} spy={true} smooth={true} onClick={close}>
              {label}
            </Link>
          ))}
          <Link to="contact" spy={true} smooth={true} onClick={close}>
            <button className="button n-drawer-btn">Contact</button>
          </Link>
        </nav>
      )}
    </div>
  );
};

export default Navbar;

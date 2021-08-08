import React, { useState } from "react";

import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  click ? disableBodyScroll(document) : enableBodyScroll(document)

  return (
    <div className="navbar">
      <div className="navbar-container">
        <span className="navbar-logo">
        MH - 21 ©
        </span>
        <span onClick={() => setClick(!click)} className="menu-icon">
          {click ? <FaTimes /> : <FaBars />}
        </span>
      </div>
      <ul className={click ? "nav-menu" : "nav-menu"}>
        <li className="nav-item">
          <Link activeClass="active" to="home" spy={true} smooth={true} onClick={handleClick} className="nav-links">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="about" spy={true} smooth={true}  offset={-100} onClick={handleClick} className="nav-links">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="portfolio" spy={true} smooth={true} offset={-100} onClick={handleClick} className="nav-links">
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link to="blogs" spy={true} smooth={true} offset={-100} onClick={handleClick} className="nav-links">
            Blogs
          </Link>
        </li>
        <li className="nav-item">
          <Link to="contact-form" spy={true} smooth={true} offset={-100} onClick={handleClick} className="nav-links">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

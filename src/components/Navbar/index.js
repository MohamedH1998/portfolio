import React, { useState, useEffect } from "react";

import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  useEffect(()=> {
    click ? document.body.style.overflow = 'hidden' :  document.body.style.overflow = 'unset';
  }, [click])

  return (
    <div className="navbar">
      <div className="navbar-container">
        <span className="navbar-logo">
        MH - 21 ©
        </span>
        <span onClick={handleClick} className="menu-icon">
          {click ? <FaTimes /> : <FaBars />}
        </span>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
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

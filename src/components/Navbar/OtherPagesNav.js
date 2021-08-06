import React, { useState } from "react";

import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';


const OtherPagesNav = ({scrollToTop}) => {

    const [click, setClick] = useState(false);

    const handleClick = () => {
      setClick(!click);
      scrollToTop();
    };
  
    click ? disableBodyScroll(document) : enableBodyScroll(document)

    
    return (
        <div className="navbar">
        <div className="navbar-container">
          <Link to="/" onClick={handleClick} className="navbar-logo">
          MH - 21 ©
          </Link>
          <span onClick={() => setClick(!click)} className="menu-icon">
            {click ? <FaTimes /> : <FaBars />}
          </span>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/"  onClick={handleClick} className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blogs"  onClick={handleClick} className="nav-links">
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact"  onClick={handleClick} className="nav-links">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    )
}

export default OtherPagesNav

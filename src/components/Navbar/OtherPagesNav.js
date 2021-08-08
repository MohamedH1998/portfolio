import React, { useState, useEffect } from "react";

// import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { HashLink as Link} from 'react-router-hash-link';


const OtherPagesNav = () => {

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

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
          <Link smooth to="/" onClick={handleClick} className="navbar-logo">
          MH - 21 ©
          </Link>
          <span onClick={() => setClick(!click)} className="menu-icon">
            {click ? <FaTimes /> : <FaBars />}
          </span>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link smooth to="/"  onClick={handleClick} className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link smooth to="/#about-section"  scroll={el => scrollWithOffset(el)} onClick={handleClick} className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link smooth to="/#portfolio-section"  scroll={el => scrollWithOffset(el)} onClick={handleClick} className="nav-links">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link smooth to="/#blogs-section"  scroll={el => scrollWithOffset(el)} onClick={handleClick} className="nav-links">
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link smooth to="/#contact-section"  scroll={el => scrollWithOffset(el)} onClick={handleClick} className="nav-links">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    )
}

export default OtherPagesNav

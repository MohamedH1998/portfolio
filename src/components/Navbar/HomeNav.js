import React from 'react'
import { Link } from "react-scroll";
import '.././Navbar/Navbar.css'


const HomeNav = ({handleClick, click}) => {
    return (
        <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link activeClass="active" to="home" spy={true} smooth={true} onClick={handleClick} className="nav-links">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="about" spy={true} smooth={true}  onClick={handleClick} className="nav-links">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="portfolio" spy={true} smooth={true} onClick={handleClick} className="nav-links">
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link to="blogs" spy={true} smooth={true} onClick={handleClick} className="nav-links">
            Blogs
          </Link>
        </li>
        <li className="nav-item">
          <Link to="contact" spy={true} smooth={true} onClick={handleClick} className="nav-links">
            Contact
          </Link>
        </li>
      </ul>
    )
}

export default HomeNav

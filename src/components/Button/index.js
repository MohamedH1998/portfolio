import React from 'react'
import { Link } from "react-scroll";
import './Button.css'



const Button = ({outerClass, to, classNames}) => {
    return (
        <div className="btn-container">
        <Link to="about" spy={true} smooth={true} className="btn btn-primary">
            About
          </Link>
      </div>
      
    )
}

export default Button

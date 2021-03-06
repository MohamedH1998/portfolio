import React, {useState} from 'react'


import photo from '../../assets/imgs/sidelook-removebg-preview.png'
import './Hero.css'
import { Link } from "react-scroll";



const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
    return (
        <>
        <div id="home-section" className="home">
        <div className="grid-container">
          <h1 className="hero-title">Hi, I'm Mohamed, a developer from South Wales.</h1>
          <span id="dot-0" className="dot"> </span>
          <span id="dot-1" className="dot"> </span>
          <span id="dot-2" className="dot"> </span>
          <span id="dot-3" className="dot"> </span>
          <span id="dot-4" className="dot"> </span>
          <span id="dot-5" className="dot"> </span>
          <div className="main-image-container">
            <img className={`main-img image-${imageLoaded ? "visible" : "hidden"}`} onLoad={() => setImageLoaded(true)}alt="Photo of me" src={photo}/>
            </div>
            <div className="btn-container">
        <Link to="about" spy={true} smooth={true} offset={-100} className="btn btn-primary">
            About me
          </Link>
        
      </div>
        </div>
      </div>
        </>
    )
}

export default Hero

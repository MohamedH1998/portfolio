import React from 'react'
import {Link} from 'react-scroll'

import photo from '../../assets/imgs/rotating-text-t.png'

import './Introduction.css'
const Introduction = () => {
    return (
        <div id="about-section" className="about">
            <div >
        <div>
          <h2 className="section-heading">Intro</h2>
          <small id="first-intro-text" className="problem-solver">
            // problem solver
          </small>
        </div>
        <div className="intro-body">
          <div className="text-content">
            <p className="text-body">
              I am a self-taught full-stack developer who enjoys solving
              problems with clean, scalable solutions.
              <small id="second-text-body" className="problem-solver">
                // through utilising various online resources, I have
                developed my proficiency in various languages and tools.
              </small>
            </p>
            <div id="link-container" className="btn-container">
              <Link to="contact-form" spy={true} smooth={true}  offset={-100} id="get-in-touch-btn" className="btn btn-primary">Get in touch</Link>
            </div>
          </div>
          <img className="rotating-txt" src={photo} alt=""/>
        </div>
        <span id="dot-3" className="dot"> </span>
        <span id="dot-4" className="dot"> </span>
        <span id="dot-5" className="dot"> </span>
      </div>
        </div>
    )
}

export default Introduction

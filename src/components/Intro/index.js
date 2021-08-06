import React from 'react'
import {Link} from 'react-router-dom'

import photo from '../../assets/imgs/rotating-text-t.png'

import './Introduction.css'
const Introduction = () => {
    return (
        <div>
            <div id="about-section" className="about">
        <div>
          <h2 className="section-heading">Intro</h2>
          <small id="first-intro-text" className="problem-solver">
            // problem solver
          </small>
        </div>
        <div className="intro-body">
          <div className="intro-content">
            <p className="intro-text">
              I am a self-taught full-stack developer who enjoys solving
              problems with clean, scalable solutions.
              <small id="second-intro-text" className="problem-solver">
                // through utilising various online resources, I have
                developed my proficiency in various languages and tools.
              </small>
            </p>
            <div id="get-in-touch-container" className="btn-container">
              <Link to="#contact-section" id="get-in-touch-btn" className="btn btn-primary">Get in touch</Link>
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

import React from 'react'

import './Project.css'

const Project = ({photo, cardTitle, cardText, liveDemo, sourceCode}) => {
    return (
        <>
          <div className="portfolio-card">
          <img src={photo} className="card-img-top img-portfolio" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{cardTitle}</h5>
            <p className="card-text">{cardText}</p>
            <a href={liveDemo} target="_blank" className="btn live-demo-btn">Live Demo</a>
            <a href={sourceCode} target="_blank" className="btn source-code-btn">Source Code</a>
          </div>
        </div>
        </>
    )
}

export default Project
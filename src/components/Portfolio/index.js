import React from 'react'
import Project from '../Project'
import theCamperApp from '../../assets/imgs/camp-app.png'
import mapty from '../../assets/imgs/mapty.png'
import forkify from '../../assets/imgs/forkify.png'
import papaya from '../../assets/imgs/papaya.png'
import kiqs from '../../assets/imgs/kiqs.png'
import tasktrckr from '../../assets/imgs/tasktrckr.png'





import './Portfolio.css'


const Portfolio = () => {
    return (
        <div>
        <div id="portfolio-section" className="portfolio">
      <h2 className="section-heading">Portfolio</h2>
      <div className="projects-container">
        <Project photo={theCamperApp} cardTitle="The Camper App" sourceCode="https://github.com/MohamedH98/forkify" liveDemo="https://the-camperapp.herokuapp.com/" 
        cardText="The Camper App is a full-stack application that enables users to
              view various campground locations from around the world and
              allows them to create their own."/>
        <Project photo={tasktrckr} cardTitle="Task Tracker" sourceCode="https://github.com/MohamedH98/kiqs" liveDemo="https://tasktrckr.netlify.app//" 
        cardText="This a React task tracker app that uses functional components, utilising props, state, hooks, and also works with an API."/>
        <Project photo={mapty} cardTitle="Mapty" sourceCode="https://github.com/MohamedH98/Mapty" liveDemo="https://trackmyworkout.netlify.app/" 
        cardText="Mapty is an application that enables users to document their
        workouts (run/cycle), record the distance, time, and
        cadence/elevation gain. Their input is stored locally using
        local storage. *desktop only*"/>
        <Project photo={forkify} cardTitle="Forkify" sourceCode="https://github.com/MohamedH98/forkify" liveDemo="https://forkify-website.netlify.app/" 
        cardText="Forkify is an application that allows users to view the recipes
        for meals they search for. The application also enables users to
        upload new recipes and bookmark them too. *desktop only*"/>
        <Project photo={papaya} cardTitle="Papaya" sourceCode="https://github.com/MohamedH98/Papaya" liveDemo="https://papaya-track.netlify.app/" 
        cardText="Forkify is an application that allows users to view the recipes
        for meals they search for. The application also enables users to
        upload new recipes and bookmark them too. *desktop only*"/>

      </div>
    </div>
        </div>
    )
}

export default Portfolio


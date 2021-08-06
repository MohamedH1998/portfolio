import React from 'react'
import {Link} from 'react-router-dom'
import {RiEmotionSadLine} from 'react-icons/ri'

import './NoMatch.css'

const NoMatch = () => {
    return (
        <div className="nomatch-container">
            <i className="nomatch-icon"><RiEmotionSadLine/></i>
            <h1>404</h1>
            <h2 className="nomatch-text">Sorry to disappoint but I can't seem to find what you're looking for...</h2>
            <Link className="btn nomatch-button" to="/">Back home?</Link>
        </div>
    )
}

export default NoMatch

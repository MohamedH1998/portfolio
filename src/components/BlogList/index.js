import React from 'react'
import {Link} from 'react-router-dom'


const BlogList = ({title, i, text}) => {
    return (
        <div className="bloglist-container">
                      <div className="text-content">
                      
            <p className="text-body">
             {title}
              <small id="second-text-body" className="problem-solver">
                // {text}
              </small>
            </p>
            <div id="link-container" className="btn-container">
              <Link to={`/blogs/${i}`} id="get-in-touch-btn" className="btn read-more">Read more</Link>
            </div>
          </div>
        </div>
    )
}

export default BlogList 

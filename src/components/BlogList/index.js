import React from 'react'
import {Link} from 'react-router-dom'

import './BlogList.css'

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
            <div id="bloglist-link-container" className="bloglist-btn-container">
              <Link to={`/blogs/${i}`}  className="btn bloglist-btn read-more">Read more</Link>
            </div>
          </div>
        </div>
    )
}

export default BlogList 

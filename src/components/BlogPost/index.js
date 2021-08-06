import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom";
import './BlogPost.css'
import data from '../BlogText/data'
import Natural from '../BlogText/Natural'
import Motivations from '../BlogText/Motivations';
import TurningPoint from '../BlogText/TurningPoint';
import NoMatch from '../NoMatch';



const BlogPost = () => {
    const params = useParams()
    const id = params.id
    if (!data[id]) {
      return <NoMatch/>
    }
    const blog = data[id]
    function blogText() {
      if (blog.id == 2 ) {
        return <Natural/>
      } else if (blog.id == 1) {
        return <Motivations/>
      } else if (blog.id == 0) {
        return <TurningPoint/>
      } 
    }

    return (
        <>
    <section className="blog-posts">
            <div className="blog-content">    
              <Link to="/blogs" className="btn back-to-blogs">Blogs</Link>
              <div>
                  </div>
              <div className="row">
                      </div>
                      <div className="down-content">
                        <span>{blog.topic}</span>
                        <h1 className="blogpost-title">{blog.title}</h1>
                        <ul className="post-info">
                          <li>{blog.date}</li>
                          <li>{blog.readTime}</li>
                        </ul>
                        <hr className="blog-hr"></hr>
                        {blogText()}
                        
          </div>
                  </div>
      </section>
      </>
    )
}

export default BlogPost

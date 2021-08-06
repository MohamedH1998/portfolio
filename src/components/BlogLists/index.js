import React from 'react'
import BlogList from '../BlogList'
import data from '../BlogText/data'

import './BlogLists.css'

const BlogLists = ({handleClick}) => {
    const postSnippets = data.slice(0).reverse().map((post, i) => {
        return(
          <BlogList key={i} title={post.title} handleClick={handleClick} id={i}  text={post.tagline} i={post.id}/>
        )
      })
    
    return (
        <div className="bloglists-outer-container">
            <h1 className="section-heading blog-posts-heading">Posts</h1>
            <div className="bloglists-container">
            {postSnippets}
            </div>
        </div>
    )
}

export default BlogLists

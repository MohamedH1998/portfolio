import React from 'react'
import './Blogs.css'
import BlogSnippet from '.././BlogSnippet'
import data from '../BlogText/data'

const Blogs = () => {

  const postSnippets = data.slice(0).reverse().map((post, i) => {
    return(
      <BlogSnippet key={i} title={post.title}  id={i}  text={post.tagline} i={post.id}/>
    )
  })

    return (
      <div id="blogs-section" className="blogs">
      <h2 className="section-heading">Blogs</h2>
      <div className="blog-container">
        <div className="scrolling-wrapper" >
{postSnippets}

        </div>
      </div>
    </div>
    )
}

export default Blogs

import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './BlogSnippet.css'

const BlogSnippet = ({title, i, text}) => {
  const [click, setClick] = useState(false)
  const scrollToTop = () => window.scrollTo(0, 0);

  const handleClick = () => {
    setClick(!click);
    scrollToTop();
  };
    return (
      <div>
      <div  className="blog-card">
      <div className="recent-posts-info">
        <span>#{i}</span>
        <div className="title">{title}</div>
        <p className="card-text">
          {text}
        </p>
        <Link to={`/blogs/${i}`} onClick={handleClick} className="btn read-more"
          >Read more</Link>
      </div>
    </div>
        </div>

    )
}

export default BlogSnippet

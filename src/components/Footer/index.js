import React from 'react'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {ImTwitter} from 'react-icons/im'
import {FaInstagram} from 'react-icons/fa'

import './Footer.css'

const Footer = () => {
    return (
    <footer className="footer">
        <div className="footer-container">
            <a
              className="footer-btn"
              href="https://www.linkedin.com/in/mohamed-hassan-898399150/"
              role="button"
              ><i className="footer-icons"><AiFillLinkedin/></i></a>

            <a
              className="footer-btn"
              href="https://github.com/MohamedH98"
              role="button"
              ><i className="footer-icons"><AiFillGithub/></i></a>
            <a
              className="footer-btn"
              href="https://twitter.com/momito8_"
              role="button"
              ><i className="footer-icons"><ImTwitter/></i></a>

            <a
              className="footer-btn"
              href="https://instagram.com/momito8_"
              role="button"
              ><i className="footer-icons"><FaInstagram/></i></a>
          </div>
      </footer>
    )
}

export default Footer

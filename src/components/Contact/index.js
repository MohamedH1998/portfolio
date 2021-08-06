import React, {useState} from 'react'
import {BiSmile} from 'react-icons/bi'
import './Contact.css'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitMessage, setSubmitMessage] = useState(false)

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }



  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message })
    })
      .then(() => {
        setName("")
        setEmail("")
        setMessage("")
        setSubmitMessage("thank you")
      })
      .catch(error => {
        setSubmitMessage("something went wrong, try again?")
      });

    e.preventDefault();

  };
    return (
        <div id="contact-section" className="contact-form">
        <h2 className="section-heading ">Get in touch</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit} name="contact" method="POST" method="post" data-netlify="true" data-netlify-honeypot="bot-field" >
          <input type="hidden" name="form-name" value="contact" />
            <h3 className="form-title">{!submitMessage ? "say hi " : `${submitMessage} `}<i className="contact-icon"><BiSmile/></i></h3>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
              value={name}
              onChange={e => setName(e.target.value)}
                type="text"
                className="form-control"
                aria-describedby="name"
                name="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="name" className="form-control" value={email}
              onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea value={message}
              onChange={e => setMessage(e.target.value)}
                className="form-control"
                name="message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    )
}

export default Contact

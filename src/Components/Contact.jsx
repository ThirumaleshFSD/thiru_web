import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>Feel free to reach out for collaborations or just to say hi!</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <h4>Email</h4>
                <a href="mailto:sirisampadha939184@gmail.com">sirisampadha939184@gmail.com</a>
              </div>
              
              <div className="contact-item">
                <h4>Phone</h4>
                <a href="tel:+919182358936">+91 9182358936</a>
              </div>
              
              <div className="contact-item">
                <h4>LinkedIn</h4>
                <a href="https://linkedin.com/in/thirusampath" target="_blank" rel="noopener noreferrer">linkedin.com/in/thirusampath</a>
              </div>
              
              <div className="contact-item">
                <h4>GitHub</h4>
                <a href="https://github.com/ThirumaleshFSd" target="_blank" rel="noopener noreferrer">github.com/ThirumaleshFSd</a>
              </div>
            </div>
          </div>
          
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Name" required />
            </div>
            
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            
            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>
            
            <div className="form-group">
              <textarea placeholder="Message" rows="5" required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
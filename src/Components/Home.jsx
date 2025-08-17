import React from 'react';
import profile from '../assets/my profile pic.png';
import '../App.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="home-content">
          <div className="home-text">
            <h3>Hi, my name is</h3>
            <h1>Thirumalesh.</h1>
            <h2>Full-Stack Developer & AI Learner.</h2>
            <p>Building innovative solutions, aspiring to create startups, and aiming for a future at Google.</p>
            <div className="home-buttons">
              <a href="#projects" className="btn btn-primary">View Portfolio</a>
              <a href="#contact" className="btn">Contact Me</a>
            </div>
          </div>
          <div className="home-image">
            <img src={profile} alt="Thirumalesh" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
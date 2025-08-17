import React, { useState } from 'react';
import '../App.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a href="#home" className="logo">Thirumalesh</a>
          
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
          
          <div className="hamburger" onClick={toggleMenu}>
            <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
            <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
            <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Cocomelon Pre-School and Day Care" className="navbar-logo" />
        <div className="company-title">
          <h1 className="company-name">
            <span className="coco">Cocomelon</span>
          </h1>
          <p className="subtitle">Pre-School & Day Care</p>
        </div>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#">Programs</a></li>
        <li><a href="#">Curriculam</a></li>
        <li><a href="#">Admissions</a></li>
        <li><a href="#">Activities</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <a href="#enroll-now" className="enroll-btn">Enroll Now</a>
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;

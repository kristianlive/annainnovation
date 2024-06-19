import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <h3><Link to="/" className="logo" onClick={closeMenu}>Anna Innovation</Link></h3>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Hem</Link></li>
          <li><Link to="/varatjanster" onClick={closeMenu}>Våra Tjänster</Link></li>
          <li><Link to="/prislista" onClick={closeMenu}>Prislista</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Kontakt</Link></li>
          <li><Link to="/about" onClick={closeMenu}>Om oss</Link></li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
}

export default Header;

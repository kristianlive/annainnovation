import React from 'react';
import { Link } from 'react-router-dom';
import './style/Header.css';

function Header() {
  return (
    <header className="header">
      <h1 to="/" class="logo">Anna Innovation</h1>
      <nav>
        <ul>
          <li><Link to="/">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

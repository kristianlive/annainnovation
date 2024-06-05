import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Anna Innovation</h1>
      <nav>
        <ul>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

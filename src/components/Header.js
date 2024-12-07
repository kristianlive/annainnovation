import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './style/Header.css';
import logo from '../image/logo1.svg';




function Header({ isAuthenticated, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLoginClick = () => {
    navigate('/login');
    closeMenu();
  };

  const handleLogoutClick = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <header className="header">
      <NavLink to="/" className="logo" onClick={closeMenu}>
        <img src={logo} alt="Anna Innovation Logo" className="header-logo" />
        </NavLink>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink to="/" isActive={() => location.pathname === '/'} activeClassName="active" onClick={closeMenu}>
              Hem
            </NavLink>
          </li>
          <li>
            <NavLink to="/varatjanster" isActive={() => location.pathname === '/varatjanster'} activeClassName="active" onClick={closeMenu}>
              Våra Tjänster
            </NavLink>
          </li>
          <li>
            <NavLink to="/prislista" isActive={() => location.pathname === '/prislista'} activeClassName="active" onClick={closeMenu}>
              Prislista
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" isActive={() => location.pathname === '/contact'} activeClassName="active" onClick={closeMenu}>
              Kontakt
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" isActive={() => location.pathname === '/about'} activeClassName="active" onClick={closeMenu}>
              Om oss
            </NavLink>
          </li>
          {/*<li>
            {isAuthenticated ? (
              <button onClick={handleLogoutClick}>Logga ut</button>
            ) : (
              <button onClick={handleLoginClick}>Logga in</button>
            )}
          </li>*/}
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

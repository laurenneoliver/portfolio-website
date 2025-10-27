import React from "react";
import "./styles/Header.css"; 
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';
    return (
      <header>
        <nav className="header-nav">
          <div className="logo-image">
            <Link to="/home" className="home">
              <img src="images/icon.png" alt="flower-logo" />
            </Link>
          </div>
          <div className="logo">
          {!isContactPage && (
            <Link to="/contact" className="contact">
              Contact me!
            </Link>
          )}
          </div>
        </nav>
        </header>
    );
}

export default Header;

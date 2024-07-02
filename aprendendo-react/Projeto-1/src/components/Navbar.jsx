import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">Meu Blog</a>
      <ul className="navbar-nav">
        <li><a href="/">Home</a></li>
        <li><a href="#posts">FAQ</a></li>
        <li><a href="#about">Sobre</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

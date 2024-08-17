// src/Header.js
import React from 'react';
import {Link}from 'react-router-dom';

const Header = () => (
  <header>
    <div className="logo">
      <img src="logo.png" alt="Logo" />
    </div>
    <hr />
    <nav>
      <ul>
      <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">WHO WE ARE</Link></li>
        <input placeholder="What are you looking for?" />
        <li><Link to="/track">TRACK</Link></li>
        <li><Link to="/login">LOGIN</Link></li>
        <li><Link to="/cart">CART</Link></li>
      </ul>
    </nav>
    <div className="bg">
      <div className="text-heading">
        <h2>Quality care for</h2>
        <h1>your furry friends</h1>
      </div>
      <img src="image.png" alt="Background" />
    </div>
  </header>
);

export default Header;

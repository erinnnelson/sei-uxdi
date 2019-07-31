import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../assets/logo.png'


export default () => {
  return (
    <div id="hero-info">
      <Link to="/#top"><img id="hero-logo" src={logo} alt="Logo" /></Link>
      <p id="hero-contact-info">181-30 Union Turnpike • Fresh Meadows, NY 11366 • 718-969-1928</p> 
      
    </div>
  );
}
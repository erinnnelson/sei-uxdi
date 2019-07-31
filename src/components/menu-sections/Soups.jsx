import React from 'react';
import image from '../../assets/menu-images/Soups.png';

export default function Soups() {
  return (
    <div className="menu-section-item">
      <hr />
      <div className="section-title">
        <h2>Soups</h2>
      </div>
      <div className="section-image">
        <div id="soups" className="link-route-div"></div>
        <img src={image} alt="soups" />
      </div>
      <div className="section-content">
        <p>French Onion <span>$4.00</span></p>
        <p>Mushroom Barley <span>$4.00</span></p>
        <p>Minestrone <span>$4.00</span></p>
        <p>Split Pea <span>$4.00</span></p>
        <p>Vegetable <span>$4.00</span></p>
      </div>
    </div>
  )
}
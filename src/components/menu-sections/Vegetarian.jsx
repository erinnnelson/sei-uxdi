import React from 'react';
import image from '../../assets/menu-images/Vegetarian.png';

export default function Vegetarian() {
  return (
    <div className="menu-section-item">
      <div className="section-title">
        <h2>Vegetarian</h2>
      </div>
      <div className="section-image">
        <img src={image} alt="vegetarian stuff" />
      </div>
      <div className="section-content">
        <p>Vegetarian Burger (with salad or fries) <span>$7.00 - $8.00</span></p>
        <p>Cigars (vegetarian, potato) <span>$6.50</span></p>
      </div>
    </div>
  )
}
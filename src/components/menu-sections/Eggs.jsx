import React from 'react';
import image from '../../assets/menu-images/Eggs.png';

export default function Eggs() {
  return (
    <div className="menu-section-item">
      <div className="section-title">
        <h2>Eggs</h2>
      </div>
      <div className="section-image">
        <img src={image} alt="eggs" />
      </div>
      <div className="section-content">
        <p>Shakshuka <span>$7.00</span></p>
        <p>Western Omelet (onions, mushrooms, peppers & cheese) <span>$7.00</span></p>
        <p>Egg White Omelet (mushrooms, peppers & cheese) <span>$9.00</span></p>
        <p>Spanish Omelet (mushrooms, onions, peppers & cheese) <span>$7.00</span></p>
        <p>*All served with salad or fries</p>
      </div>
    </div>
  )
}
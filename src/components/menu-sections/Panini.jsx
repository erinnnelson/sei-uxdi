import React from 'react';

import image from '../../assets/menu-images/Panini.png';

export default function Panini() {
  return (
    <div className="menu-section-item">
      <div className="section-title">
        <h2>Panini - Hot Pressed Sandwiches</h2>
      </div>
      <div className="section-image">
        <img src={image} alt="platters" />
      </div>
      <div className="section-content">
        <p>Fresh Mozzarella with Tomato & Basil <span>$6.95</span></p>
        <p>Mozzarella with Tomato & Basil <span>$6.95</span></p>
        <p>Greek Panini - feta cheese, black olives & tomato <span>$6.95</span></p>
        <p>Vegetable Panini - with grilled vegetagbles <span>$6.95</span></p>
        <p>Tuna Panini - with cheese & tomato <span>$7.95</span></p>
        <p>All Panini served with salad</p>
      </div>
    </div>
  )
}
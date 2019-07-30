import React from 'react';
import image from '../../assets/menu-images/Fish.png';

export default function Fish() {
  return (
    <div id="fish" className="menu-section-item">
      <hr />
      <div className="section-title">
        <h2>Fish</h2>
      </div>
      <div className="section-image">
        <img src={image} alt="fish" />
      </div>
      <div className="section-content">
        <p>Fried Whiting Fish (with salad or fries) <span>$8.00</span></p>
        <p>Salmon Fillet (with salad and baked potato) <span>$15.50</span></p>
        <p>Fish & Chips (or salad) <span>$8.00</span></p>
        <p>Fish Parmigiana <span>$8.00</span></p>
        <p>Fish Sticks & Sauce <span>$5.00</span></p>
        <p>Fish Sticks & Spaghetti <span>$9.00</span></p>
      </div>
    </div>
  )
}
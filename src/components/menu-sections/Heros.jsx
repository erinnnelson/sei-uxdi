import React from 'react';
import image from '../../assets/menu-images/Heroes.png';

export default function Heros() {
  return (
    <div className="menu-section-item">
      <div className="section-title">
        <h2>Heros</h2>
      </div>
      <div className="section-image">
        <img src={image} alt="heroes" />
      </div>
      <div className="section-content">
        <p>Vegetable Cutlet Parmigiana <span>$6.00</span></p>
        <p>Eggplant Parmigiana <span>$6.00</span></p>
        <p>Tuna <span>$7.50</span></p>
        <p>Egg Salad <span>$6.00</span></p>
        <p>Omelet <span>$6.00</span></p>
        <p>Falafel Parmigiana <span>$6.00</span></p>
      </div>
    </div>
  )
}
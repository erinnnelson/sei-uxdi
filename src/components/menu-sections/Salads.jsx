import React from 'react';

import image from '../../assets/menu-images/Salads.png';

export default function Salads() {
  return (
    <div className="menu-section-item">
      <div className="section-title">
        <h2>Salads</h2>
      </div>
      <div className="section-image">
        <img src={image} alt="salads" />
      </div>
      <div className="section-content">
        <h2 className="section-content-title">Small <span>Large</span></h2>
        <p>Regular Salad $4.00<span>$5.50</span></p>
        <p>Greek Salad <span>$8.00</span></p>
        <p>Israeli Salad $5.00<span>$7.00</span></p>
        <p>Caesar Salad <span>$7.00</span></p>
        <p>Tuna Salad Plate <span>$9.00</span></p>
        <p>Egg Salad Plate <span>$7.00</span></p>
        <p>Vegetable Tuna Salad <span>$9.00</span></p>
        <p>Mandarin Salad <span>$7.00</span></p>

      </div>
    </div>
  )
}
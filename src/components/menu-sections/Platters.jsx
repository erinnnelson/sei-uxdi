import React from 'react';
import image from '../../assets/menu-images/Platters.png';

export default function Platters() {
  return (
    <div className="menu-section-item">
      <div className="section-title">
        <h2>Platters</h2>
      </div>
      <div className="section-image">
        <img src={image} alt="platters" />
      </div>
      <div className="section-content">
        <p>Chumus <span>$8.00</span></p>
        <p>Babaganoush <span>$8.00</span></p>
        <p>Combination (chumus, babagamoush, turkish salad, pita, salad, falafel balls) <span>$8.00</span></p>
      </div>
    </div>
  )
}
import React from 'react';
import image from '../../assets/menu-images/Platters.png';

export default function Platters() {
  return (
    <div className="menu-section-item">
      <hr />
      <div className="section-title">
        <h2>Platters</h2>
      </div>
      <div className="section-image">
        <img src={image} alt="platters" />
      </div>
      <div className="section-content">
        <p><span>Chumus</span><span>$8.00</span></p>
        <p><span>Babaganoush</span><span>$8.00</span></p>
        <p><span>Combination (chumus, babagamoush, turkish salad, pita, salad, falafel balls)</span><span>$8.00</span></p>
      </div>
    </div>
  )
}
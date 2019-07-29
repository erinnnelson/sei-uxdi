import React from 'react';

import image from '../../assets/menu-images/Salads.png';

export default function Salads() {
  return (
    <div className="menu-section-item">
      <hr />
      <div className="section-title">
        <h2>Salads</h2>
      </div>
      <div className="section-image">
        <img src={image} alt="salads" />
      </div>
      <div className="section-content">
        <h2 className="section-content-title"><span></span><span>Small</span> <span>Large</span></h2>
        <p><span>Regular Salad</span><span>$4.00</span><span>$5.50</span></p>
        <p><span>Greek Salad</span><span>$8.00</span></p>
        <p><span>Israeli Salad</span><span>$5.00</span><span>$7.00</span></p>
        <p><span>Caesar Salad</span><span>$7.00</span></p>
        <p><span>Tuna Salad Plate</span><span>$9.00</span></p>
        <p><span>Egg Salad Plate</span><span>$7.00</span></p>
        <p><span>Vegetable Tuna Salad</span><span>$9.00</span></p>
        <p><span>Mandarin Salad</span><span>$7.00</span></p>

      </div>
    </div>
  )
}
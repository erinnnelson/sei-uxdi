import React from 'react';

import image from '../../assets/menu-images/ThinCrust.png';

export default function ThinCrustPie() {
  return (
    <div className="menu-section-item">
      <div className="section-title">
        <h2>Thin Crust Pie (Individual) </h2>
      </div>
      <div className="section-image">
        <img src={image} alt="thin crust pie" />
      </div>
      <div className="section-content">
        <p>Regular <span>$5.50</span></p>
        <p>Vegetable & Cheese <span>$7.00</span></p>
        <p>Whole Wheat <span>$5.50</span></p>
      </div>
    </div>
  )
}
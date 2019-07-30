import React from 'react';

import image from '../../assets/menu-images/Wraps.png';

export default function Wraps() {
  return (
    <div className="menu-section-item">
      <hr />
      <div id="wraps" className="section-title">
        <h2>Wraps</h2>
      </div>
      <div className="section-image">
        <img src={image} alt="wraps" />
      </div>
      <div className="section-content">
        <p>Tuna <span>$2.75</span></p>
        <p>Egg Salad <span>$3.75</span></p>
      </div>
    </div>
  )
}
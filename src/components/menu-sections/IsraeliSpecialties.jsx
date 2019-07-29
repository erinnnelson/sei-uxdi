import React from 'react';
import image from '../../assets/menu-images/Israeli_Specialties.png';

export default function IsraeliSpecialties() {
  return (
    <div className="menu-section-item">
      <hr />
      <div className="section-title">
        <h2>Israeli Specialties</h2>
      </div>
      <div className="section-image">
        <img src={image} alt="Israeli Specialties" />
      </div>
      <div className="section-content">
        <p>Falafel (half) <span>$3.00</span></p>
        <p>Falafel (whole) <span>$5.50</span></p>
        <p>Falafel Lafal <span>$7.50</span></p>
        <p>Falafel Ball <span>$0.35</span></p>
        <p>Extra $0.50 for Israeli Salad or extra pita bread</p>
      </div>
    </div>
  )
}
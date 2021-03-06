import React from 'react';

import image from '../../assets/menu-images/HouseSpecialties.png';

export default function HouseSpecialties() {
  return (
    <div className="menu-section-item">
      <hr />
      <div className="section-title">
        <h2>House Specialties</h2>
      </div>
      <div className="section-image">
        <div id="specialties" className="link-route-div"></div>
        <img src={image} alt="house specialties" />
      </div>
      <div className="section-content">
        <p>Calzone (cheese, spinach, or vegetable) <span>$4.50</span></p>
        <p>Quesadilla <span>$6.00</span></p>
        <p>Cheese Pretzel <span>$4.50</span></p>
        <p>Mozzarella Sticks <span>$6.95</span></p>
        <p>Borekas (cheese, spinach, or potato) <span>$3.50</span></p>
        <p>Spinach Roll <span>$4.50</span></p>
        <p>Hippie Roll <span>$4.50</span></p>
        <p>Blintzes (cheese, potato, or cherry) <span>$5.00</span></p>
        <p>Potato Pancakes <span>$5.00</span></p>
        <p>Garlic Knots Parmigiana <span>$4.50</span></p>
      </div>
    </div>
  )
}
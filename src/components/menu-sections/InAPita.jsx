import React from 'react';
import image from '../../assets/menu-images/In_A_Pita.png';

export default function InAPita() {
  return (
    <div className="menu-section-item">
      <hr />
      <div id="pita" className="section-title">
        <h2>In A Pita</h2>
      </div>
      <div className="section-image">
        <img src={image} alt="pita" />
      </div>
      <div className="section-content">
        <p>Chumus <span>$4.00</span></p>
        <p>Babaganoush (eggplant sald) <span>$4.00</span></p>
        <p>Tuna salad <span>$5.50</span></p>
        <p>Vegetable Tuna salad (low fat mayo) <span>$5.50</span></p>
        <p>Tuna Melt <span>$7.00</span></p>
        <p>Egg Salad <span>$4.00</span></p>
        <p>Fried Fish <span>$5.00</span></p>
      </div>
    </div>
  )
}
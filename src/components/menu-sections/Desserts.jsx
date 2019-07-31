import React from 'react';
import image from '../../assets/menu-images/Desserts.png';

export default function Desserts() {
  return (
    <div className="menu-section-item">
      <hr />
      <div className="section-title">
        <h2>Desserts</h2>
      </div>
      <div className="section-image">
        <div id="desserts" className="link-route-div"></div>
        <img src={image} alt="desserts" />
      </div>
      <div className="section-content">
        <p>Ices <span>$2.00</span></p>
        <p>Ice Cream <span>$3.00</span></p>
        <p>Cheesecake <span>$3.75</span></p>
        <p>Chocolate Cake <span>$3.75</span></p>
      </div>
    </div>
  )
}
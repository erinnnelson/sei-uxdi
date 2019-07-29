import React from 'react';
import image from '../../assets/menu-images/WholeWheatPizza.png';


export default function WholeWheatPiza() {
  return (
    <div className="menu-section-item">
      <hr />
      <div className="section-title">
        <h2>Whole Wheat Pizza</h2>
      </div>
      <div className="section-image">
        <img src={image} alt="whole wheat pizza" />
      </div>
      <div className="section-content">
        <h2 className="section-content-title"><span></span><span>Slice</span> <span> 18" Large Pie</span></h2>
        <p>Regular <span>$3.25</span><span>$15.95</span></p>
        <p>Broccoli <span>$3.25</span><span>$24.00</span></p>
        <p>Spinach <span>$3.25</span><span>$24.00</span></p>
        <p>Vegetable <span>$3.25</span></p>
        <p>Cheeseless <span>$3.25</span><span>$24.00</span></p>
      </div>
    </div>
  )
}
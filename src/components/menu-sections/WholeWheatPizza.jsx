import React from 'react';
import image from '../../assets/menu-images/WholeWheatPizza.png';


export default function WholeWheatPiza() {
  return (
    <div className="menu-section-item">
      <hr />
      <div id="wholewheat" className="section-title">
        <h2>Whole Wheat Pizza</h2>
      </div>
      <div className="section-image">
        <img src={image} alt="whole wheat pizza" />
      </div>
      <div className="section-content">
        <h2 className="section-content-title"><span></span><span>Slice</span> <span> 18" Large Pie</span></h2>
        <p><span>Regular</span><span>$3.25</span><span>$15.95</span></p>
        <p><span>Broccoli</span><span>$3.25</span><span>$24.00</span></p>
        <p><span>Spinach</span><span>$3.25</span><span>$24.00</span></p>
        <p><span>Vegetable</span><span>$3.25</span></p>
        <p><span>Cheeseless</span><span>$3.25</span><span>$24.00</span></p>
      </div>
    </div>
  )
}
import React from 'react';
import image from '../../assets/menu-images/Side_Orders.png';

export default function SideOrders() {
  return (
    <div className="menu-section-item">
      <hr />
      <div id="sides" className="section-title">
        <h2>Side Orders</h2>
      </div>
      <div className="section-image">
        <img src={image} alt="side orders" />
      </div>
      <div className="section-content">
        <p>French Fries <span>$2.75</span></p>
        <p>Sweet Potato Fries <span>$3.75</span></p>
        <p>Homemade Fries <span>$3.75</span></p>
        <p>Curly Fries (spicy) <span>$3.50</span></p>
        <p>Onion Rings <span>$2.75</span></p>
        <p>Knishes (potato, kasha, spinach) <span>$3.25 - $4.50</span></p>
        <p>Knishes (cherry cheese) <span>$3.75</span></p>
        <p>Baked Potato <span>$3.00</span></p>
        <p>Baked Potato w/ Tuna <span>$7.00</span></p>
        <p>Baked Potato w/ Spinach <span>$6.00</span></p>
        <p>Baked Potato w/ Broccoli <span>$6.00</span></p>
        <p>Nachos with Cheese <span>$4.50</span></p>
        <p>Nachos with Veg & Cheese <span>$5.50</span></p>
        <p>Extra Cheese on any item <span>$1.00</span></p>
      </div>
    </div>
  )
}
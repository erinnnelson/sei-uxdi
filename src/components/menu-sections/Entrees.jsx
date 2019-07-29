import React from 'react';
import image from '../../assets/menu-images/Entrees.png';

export default function Entrees() {
  return (
    <div className="menu-section-item">
      <hr />
      <div className="section-title">
        <h2>Entrees</h2>
      </div>
      <div className="section-image">
        <img src={image} alt="entrees" />
      </div>
      <div className="section-content">
        <p>Rollatini <span>$9.00</span></p>
        <p>Eggplant Parmigiana <span>$9.00</span></p>
        <p>Lasagna <span>$9.00</span></p>
        <p>Vegeatble Lasagna <span>$9.50</span></p>
        <p>Mushroom & Onion Lasagna <span>$9.50</span></p>
        <p>Broccoli or Spinach Lasagna <span>$9.50</span></p>
        <p>Vegetable Cutlet <span>$8.00</span></p>
        <p>Vegetable Lo Mein <span>$9.00</span></p>
        <p>Vegetable Ziti <span>$9.00</span></p>
        <p>Baked Ziti <span>$8.50</span></p>
        <p>Manicotti <span>$8.50</span></p>
        <p>Ziti with Brocooli & Garlic <span>$9.00</span></p>
        <p>Spaghetti & Sauce <span>$7.00</span></p>
        <p>Spaghetti with Broccoli & Garlic <span>$9.00</span></p>
        <p>Spaghetti with Garlic & Onions <span>$9.00</span></p>
        <p>Falafel Parmigiana <span>$7.00</span></p>
        <p>Cheese Ravioli <span>$7.50</span></p>
        <p>Fettucine Alfredo <span>$10.00</span></p>
        <p>Pasta Primavera Light <span>$9.00</span></p>
        <p>Pasta Primavera with White Sauce <span>$9.00</span></p>
        <p>Pasta Primavera with Marinara Sauce <span>$9.00</span></p>
        <p>Penne a la Vodka <span>$10.00</span></p>
      </div>
    </div>
  )
}
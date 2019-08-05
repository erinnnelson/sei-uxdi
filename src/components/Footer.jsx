import React from 'react';
import yelp from '../assets/icon-images/yelp.png';
import phone from '../assets/icon-images/phone.png';
import email from '../assets/icon-images/email.png';


export default () => {
  return (
    <>
      <h2 className="footer-title"> Contact Us</h2>

      <div className="footer-content" id='foot'>
        <div className="footer-icon-wrapper">
          <div className="footer-icon footer-icon-email">
            <a href="mailto: benny@bennyskosherpizza.com">
              <img src={email} alt="email logo here" />
            </a>
          </div>
          <div className="footer-icon footer-icon-phone">
            <a href="tel:718-969-1928">
              <img src={phone} alt="phone icon here" />
            </a>
          </div>
          <div className="footer-icon footer-icon-yelp">
            <a href="https://www.yelp.com/biz/benny-s-kosher-pizza-fresh-meadows" target="_blank">
              <img src={yelp} alt="yelp logo here" />
            </a>
          </div>
        </div>
        <div className="footer-bottom-wrapper">
          <p className="footer-address"> Benny's Kosher Pizza<br />
            181-30 Union Turnpike<br />
            Fresh Meadows, Ny 11366</p>

          <p className="footer-copyright"><br /><br />Copyright 2019 | All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}
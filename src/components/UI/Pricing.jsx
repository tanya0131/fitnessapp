
import React from 'react';
import '../../styles/pricing.css';
const Pricing = () => {
    return (
      <div className="container">
        <div className="pricing__top">
          <h2 className="section__title">
            Subscription <span className="highlights">Pricing</span> Plan
          </h2>
          <p>
            If you're looking for a fitness subscription, there are several options available depending on your preferences and goals.
          </p>
        </div>
  
        <div className="pricing__wrapper">
          <div className="pricing__item pricing__item-01">
            <div className="pricing__card-top">
              <h2 className="section__title">Regular Member</h2>
              <h2 className="pricing">Rs.5000<span>/month</span></h2>
            </div>
            <div className="services">
              <ul>
                <li><span>Unlimited chat with trainer</span></li>
                <li><span>Customer Support</span></li>
                <li><span>Personal trainer</span></li>
                <li><span>Standard Options</span></li>
                <li><span>24*7 Availability</span></li>
              </ul>
              <button className="register__btn">Join Now</button>
            </div>
          </div>
  
          <div className="pricing__item pricing__item-02">
            <div className="pricing__card-top">
              <h2 className="section__title">Premium Member</h2>
              <h2 className="pricing">Rs.10000<span>/month</span></h2>
            </div>
            <div className="services">
              <ul>
                <li><span>Unlimited chat with trainer</span></li>
                <li><span>Customer Support</span></li>
                <li><span>Personal trainer</span></li>
                <li><span>Standard Options</span></li>
                <li><span>24*7 Availability</span></li>
              </ul>
              <button className="register__btn">Join Now</button>
            </div>
          </div>
  
          <div className="pricing__item pricing__item-03">
            <div className="pricing__card-top">
              <h2 className="section__title">Standard Member</h2>
              <h2 className="pricing">Rs.2000<span>/month</span></h2>
            </div>
            <div className="services">
              <ul>
                <li><span>Unlimited chat with trainer</span></li>
                <li><span>Customer Support</span></li>
                <li><span>Personal trainer</span></li>
                <li><span>Standard Options</span></li>
                <li><span>24*7 Availability</span></li>
              </ul>
              <button className="register__btn">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Pricing;
  
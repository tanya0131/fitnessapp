import React from 'react';
import "../styles/planmeal.css";
import tick from "../assests/img/tick - Copy.png";
import "../styles/pricing.css";
import { Link } from 'react-router-dom';
import Layout from '../components/UI/Layout'; // Import your Layout component
import Header from './Header';

const Planmeal = () => {
  return (
    <Layout> {/* Wrap your component with Layout */}
      <Header />
      <div style={{ borderBottom: "8px solid black", marginTop: "20px" }}></div>
      <div className='top'>
        <h1 className="pageHeader">MyDietDiary</h1>
        <div className="intro flex-container-intro">
          <div className="flex-item-card-intro">
            <div className="greetings">
              <h1>Hi, Priyanshi!</h1>
              <h2>What would you like to do?</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing__wrapper">
        {/* Pricing Card 1 */}
        <div className="pricing__item pricing__item-01">
          <div className="pricing__card-top">
            <h2 className="section__title">BMI Calculator</h2>
          </div>
          <div className="services">
            <img src={tick} alt="tick" />
            <ul>
              <li><span>Graph to Track your Growth</span></li>
              <li><span>Date Wise Following your Calorie Intake</span></li>
              <li><span>Helps to Organize your plan</span></li>
            </ul>
            {/* Use Link component to create a link */}
            <Link to="/graph" className="register__btn">Go Ahead</Link>
          </div>
        </div>

        {/* Pricing Card 2 */}
        <div className="pricing__item pricing__item-02">
          <div className="pricing__card-top">
            <h2 className="section__title">Make my Plan</h2>
          </div>
          <div className="services">
            <img src={tick} alt="tick" />
            <ul>
              <li><span>Planning your diet with respect to the intake</span></li>
              <li><span>Balanced Nutrition</span></li>
              <li><span>Balanced Nutrition</span></li>
            </ul>
            {/* Use Link component to create a link */}
            <Link to="/make-my-plan" className="register__btn">Go Ahead</Link>
          </div>
        </div>

        {/* Pricing Card 3 */}
        <div className="pricing__item pricing__item-03">
          <div className="pricing__card-top">
            <h2 className="section__title">View my Plan</h2>
          </div>
          <div className="services">
            <img src={tick} alt="tick" />
            <ul>
              <li><span>Displaying of the plan datewise you have made</span></li>
              <li><span>Displaying of the plan datewise you have made</span></li>
              <li><span>Displaying of the plan datewise you have made</span></li>
            </ul>
            {/* Use Link component to create a link */}
            <Link to="/view-my-plan" className="register__btn">Go Ahead</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Planmeal;

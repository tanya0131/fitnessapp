import React from 'react';
import '../styles/start.css';
import gym from "../assests/img/gym.jpg";
import { Link } from 'react-router-dom';

const Start=()=>{
    return<section>
        <div className="container">
            <div className="start__wrapper">
                <div className="start__img">
                    <img src={gym} alt="gym" />
                </div>
                <div className="start__content"></div>
                <h2 className="section__title">
                    Ready to make a 
                    <span className="highlights"> change?</span>
                </h2>
                <p> Take some time to reflect on what you want to change 
                    and why. Set clear, specific, and achievable goals that 
                    align with your values and aspirations.</p>
                    <Link to="/planner">
                    <button className="register__btn">Get Forward in your journey</button>
                    </Link>
            </div>
        </div>
    </section>
}
export default Start;
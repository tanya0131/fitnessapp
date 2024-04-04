import React from "react";
import heroImg from "../../assests/img/heath.png";
import { Link } from "react-router-dom";
import "../../styles/hero.css";

const Hero = () => {
  const handleMembershipClick = () => {
    alert("You need to login to continue forward!!!!");
  };

  return (
    <section>
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <h2 className="section__title">Tracking Your Health is necessary</h2>
            <h2 className="highlights">Healthy Lifestyle</h2>
            <p>
              Tracking your health is an essential aspect of maintaining<br/>
              overall well-being. By monitoring various aspects of your health,<br/>
              you can gain valuable insights and make informed decisions about<br/>
              your lifestyle and habits.<br/>
            </p>
            <div className="hero__btns">
            <button onClick={handleMembershipClick} className="register__btn">
                Get Started with Membership
              </button>
              <Link to="/se" className="watch__btn">
                <span>
                  <i className="ri-play-fill"></i>
                </span>
                <button onClick={handleMembershipClick} >
               Plan your Fitness
              </button>
              </Link>
            </div>
          </div>
          <div className="hero__img">
            <div className="hero__img-wrapper">
              <div className="box-01">
                <div className="box-02">
                  <div className="box-03">
                    <div className="box__img">
                      <img src={heroImg} alt=""></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
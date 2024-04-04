import React from "react";
import "../../styles/exercises.css";
import lunges from "../../assests/img/lunges.png";
import yogapose from "../../assests/img/yoga-pose.png";
import extended from "../../assests/img/extended.png";

const Exercises=()=>{
    return <section>
        <div className="container exercise__container">
            <div className="exercise__top">
                <h2 className="section__title">Benefits of
                <span className="highlights"> Exercises
                </span></h2>
              <p>
              Exercise plays a crucial role in weight 
              management. It helps burn calories, promotes
               fat loss, and builds lean muscle mass. Reduce 
               the risk of obesity-related 
              conditions such as diabetes and heart disease.
              </p>
              <div className="exercise__wrapper">
                <div className="exercise__item">
                    <span className="exercise__icon">
                        <img src={lunges} alt="lunges" />
                        </span>
                        <div className="exercise__content">
                            <h4>Healthy Life</h4>
                            <p>Embracing a healthy lifestyle means nourishing 
                                your body and finding joy in staying active.</p>
                        </div>
                </div>

                <div className="exercise__item">
                    <span className="exercise__icon">
                        <img src={yogapose} alt="yoga-pose" />
                        </span>
                        <div className="exercise__content">
                            <h4>Increased Flexibility</h4>
                            <p>Embracing a healthy lifestyle means nourishing 
                                your body and finding joy in staying active.</p>
                        </div>
                </div>

                <div className="exercise__item">
                    <span className="exercise__icon">
                        <img src={extended} alt="extended" />
                        </span>
                        <div className="exercise__content">
                            <h4>Reducing Blood Pressure</h4>
                            <p>Embracing a healthy lifestyle means nourishing 
                                your body and finding joy in staying active.</p>
                        </div>
                </div>
              </div>
            </div>
        </div>
    </section>
}

export default Exercises;
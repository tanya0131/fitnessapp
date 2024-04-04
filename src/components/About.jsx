import React from "react";
import Header from "./Header";
import "../styles/header.css";

const About = () => {
  return (
    <div>
      <Header />
      <div style={{ borderBottom: "8px solid black", marginTop: "20px" }}></div>

      {/* About Us Section */}
      <div className="about-section">
        <h1>About Us</h1>
        <div className="about-p">
          <p>
            Hello! We are a group of students, and FitFreak is our team
            project. Our group decided to focus on tracking BMI data, diet
            plans, planning activities, and showing exercises to learn because
            we noticed that people's eating habits in modern days lack specific
            categories of food, with mostly only fat, starch, and sugar for a
            meal. Busy schedules also lead to people eating on the run, which
            results in poor nutritional intake, and there is a lack of knowledge
            about exercises. We hope Fitfreak will help users achieve a
            healthier lifestyle by monitoring BMI results and tracking daily
            food intake.
          </p>
        </div>
      </div>

      {/* Features section: introducing the functionalities */}
      <div className="feature-section">
        <div className="row">
          {/* Feature 1 - Calculate & Track BMI */}
          <div className="column">
            <div className="card">
              <div className="container">
                <h2>Feature 1 - Calculate & Track BMI</h2>
                <p>You can calculate your BMI by providing your weight and height.</p>
                <p>Your BMI will be recorded and shown in a trending chart!</p>
              </div>
            </div>
          </div>

          {/* Feature 2 - Make Diet Plan */}
          <div className="column">
            <div className="card">
              <div className="container">
                <h2>Feature 2 - Make Diet Plan</h2>
                <p>You can add food items to your diet plan with a date.</p>
                <p>The search food and filter food category functions can help you find results quickly.</p>
                <p>If your desired food does not exist in the database, you can customize one using the "adding food to the database" button!</p>
              </div>
            </div>
          </div>

          {/* Feature 3 - Plan Activities */}
          <div className="column">
            <div className="card">
              <div className="container">
                <h2>Feature 3 - Plan Activities</h2>
                <p>You can view your exercises.</p>
                <p>All information regarding the exercise items will be displayed.</p>
                <p>We aim to teach you new things and make the whole endeavor of getting regular exercise enjoyable!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team section: introducing team members */}
      {/* <div className="team-section">
        <h2>Our Team</h2>
        <div className="row">
          Member cards would go here...
        </div>
      </div> */}
    </div>
  );
};

export default About;

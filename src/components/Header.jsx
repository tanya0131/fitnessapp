import React from "react";
import { Link } from 'react-router-dom';
import logo from "../assests/img/logo.jpg";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header" >
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <div className="logo__img">
              <img src={logo} alt="Logo" />
            </div>
            <h2>Fitfreak</h2>
          </div>
          {/* navigation */}
          <div className="navigation">
            
              
                <Link to="/" className="home">Home</Link>
                <Link to="/about" className="about">About</Link>
                <Link to="/contact"className="contact">Contact</Link>
              
            
          </div>
          {/* nav right */}
          <div className="nav__right">
            <Link to='/login' className="login__btn">Login</Link>
            <Link to="/signup"className="register__btn">Register</Link>
            <span className="mobile__menu">
             
            </span>
          </div>
        </div>
      </div>
      <div style={{ borderBottom: "6px solid black", marginTop: "35px" }}></div>
    </header>
  );
}

export default Header;

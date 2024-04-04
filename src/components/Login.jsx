import React, { useState } from "react";
import { Link } from "react-router-dom";
import signin from "../../src/assests/img/sign_in-removebg-preview.png";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      
      const response = await axios.post("http://localhost:8089/users/login", {
        email,
        password,
      });

      if (response.status === 200) {
        // If the login is successful, redirect to the home page or perform additional actions
        console.log("User logged in successfully!");
        window.location.href = "/dash";
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
    
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ background: "white", minHeight: "100vh" }}>
      <div className="bg-white p-5 rounded w-40" style={{ background: "linear-gradient(to right, #8a2be2, #9400d3, #9932cc, #8a2be2)" }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" style={{ color: "white" }}>
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ color: "black" }}
              className="form-control rounded-10"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" style={{ color: "white" }}>
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ color: "black" }}
              className="form-control rounded-10"
            />
          </div>
          <button
            type="submit"
            className="btn btn-success w-100 rounded-3"
            style={{
              background: "black",
              color: "white",
              borderColor: "black",
            }}
          >
            <strong>Log In</strong>
          </button>
          {error && <p style={{ color: "black", fontSize: "16px" ,fontWeight:"bold"}}>{error}</p>}
          <p style={{ color: "white" }}>Want to create an account?</p>
          <Link
            to="/signup"
            className="btn btn-default border w-100 rounded-3"
            style={{ color: "white", borderColor: "white" }}
          >
            Create Account
          </Link>
        </form>
      </div>
      <div style={{ marginLeft: "0px" }}>
        <img
          src={signin}
          alt="image"
          style={{ width: "700px", height: "700px" }} // Adjust width and height values as needed
        />
      </div>
    </div>
  );
};

export default Login;

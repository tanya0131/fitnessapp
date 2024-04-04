import React from "react";
import { Link, useNavigate } from "react-router-dom";
import signin from "../../src/assests/img/sign_in-removebg-preview.png";
import UserService from "./UserService";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

    handleSubmit = async (event) => {
      event.preventDefault();
    
      const userData = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      };
    
      try {
        await UserService.postUsers(userData);
        console.log("User registered successfully!");
        window.location.href = "/login"; // Redirect to the login page
      } catch (error) {
        console.error("Error registering user:", error);
      }
    };

  render() {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          background: "white",
          minHeight: "100vh"
        }}
      >
        <div
          className="bg-white p-5 rounded w-40"
          style={{
            background:
              "linear-gradient(to right, #8a2be2, #9400d3, #9932cc, #8a2be2)"
          }}
        >
          <h2>Sign Up</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" style={{ color: "white" }}>
                <strong>Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                id="name"
                required
                value={this.state.name}
                onChange={(event) =>
                  this.setState({ name: event.target.value })
                }
                style={{ color: "black" }}
                className="form-control rounded-10"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" style={{ color: "white" }}>
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                id="email"
                required
                value={this.state.email}
                onChange={(event) =>
                  this.setState({ email: event.target.value })
                }
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
                required
                value={this.state.password}
                onChange={(event) =>
                  this.setState({ password: event.target.value })
                }
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
                borderColor: "black"
              }}
            >
              <strong>Register</strong>
            </button>
            <p style={{ color: "white" }}>You already have an account?</p>

            <Link
              to="/login"
              className="btn btn-default border w-100 rounded-3"
              style={{ color: "white", borderColor: "white" }}
            >
              Log In
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
  }
};

export default Register;

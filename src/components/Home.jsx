import { Component } from "react";
import React from "react";
import Header from "./Header";
import Hero from "./UI/Hero";
import Exercises from "./UI/Exercises";


class Home extends Component {
  render() {
    return (
        <div >
          <Header />
          <Hero />
          <Exercises />
        </div>
    );
  }
}

export default Home;

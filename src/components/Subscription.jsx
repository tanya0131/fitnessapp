import React, { Component } from "react";
import Start from "./Start";
import Pricing from "./UI/Pricing";
import Header from "./Header";
import Layout from "./UI/Layout";


class Subscription extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Start />
        <Pricing />
      </Layout>
    );
  }
}


export default Subscription;

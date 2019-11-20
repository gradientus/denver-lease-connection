import React, { Component } from "react";
import Navbar from "../components/Navbar";
import NewUser from "../components/NewUser";
import Footer from "../components/Footer";

class FirstTimeUser extends Component {
  state = {
    role: ""
  };

  render() {
    return (
      <>
        <Navbar />
        <NewUser />
        <Footer />
      </>
    );
  }
}

export default FirstTimeUser;

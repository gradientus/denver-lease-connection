import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GoogleSignIn from "../components/GoogleSignIn";

const Main = () => {
  return (
    <div>
      <Navbar>{/* TODO: dynamically change links based on URL */}</Navbar>
      <GoogleSignIn />
      <Footer />
    </div>
  );
};

export default Main;

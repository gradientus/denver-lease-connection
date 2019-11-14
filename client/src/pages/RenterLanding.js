import React, { Component } from "react";
import RenterNav from "../components/RenterNav";
import RenterProperties from "../components/RenterProperties";
import Footer from "../components/Footer";

const RenterLanding = () => {
  return (
    <div>
      <RenterNav />
      <RenterProperties />
      <Footer />
    </div>
  );
};

export default RenterLanding;

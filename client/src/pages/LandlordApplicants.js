import React, { Component } from "react";
import LandNavbar from "../components/LandlordNav";
import Applicant from "../components/ApplicantContainer";
import BackgroundCont from "../components/BackgroundCheckContainer";
import Footer from "../components/Footer";

class LandlordApplicants extends Component {
  render() {
    return (
      <div>
        <LandNavbar />
        <Applicant />
        <BackgroundCont />
        <Footer />
      </div>
    );
  }
}

export default LandlordApplicants;

import React from "react";
import ApplicationForm from "../components/ApplicationForm";
import Footer from "../components/Footer";
import { Col, Row } from "reactstrap";

const RenterApplication = () => {
  var firstName = "Phil";
  var lastName = "Smith";
  var state = "Georgia";
  var ip = process.env.ip;
  var timeStamp = Math.round(new Date().getTime() / 1000);

  return (
    <div>
      <ApplicationForm />
      <Row>&nbsp; </Row>
      <Row>&nbsp; </Row>
      <Row>&nbsp;</Row>
      <Row>&nbsp; </Row>
      <Row>&nbsp; </Row>
      <Footer />
    </div>
  );
};

export default RenterApplication;

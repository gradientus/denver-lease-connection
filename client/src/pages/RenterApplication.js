import React from "react";
import ApplicationForm from "../components/ApplicationForm";
import Footer from "../components/Footer";
import { Col, Row } from "reactstrap";

const RenterApplication = () => {
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

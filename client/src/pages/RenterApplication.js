import React, { Component } from "react";
import ApplicationForm from "../components/ApplicationForm";
//import API from "../util/API";
import Footer from "../components/Footer";
import { Col, Row } from "reactstrap";

class RenterApplication extends Component {
  state = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    employment: "",
    income: "",
    info: ""
  };

  //QUESTION: Do I add the API call here or in the application component upon click?

  //TODO: Add the props this.state.___

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
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
  }
}

export default RenterApplication;

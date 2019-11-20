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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <ApplicationForm
          firstName={this.state.firstName}
          last={this.state.lastName}
          address={this.state.address}
          city={this.state.city}
          state={this.state.state}
          zip={this.state.zip}
          phone={this.state.phone}
          email={this.state.email}
          employment={this.state.employment}
          income={this.state.income}
          info={this.state.info}
        />
        <Row>&nbsp;</Row>
        <Row>&nbsp;</Row>

        <Footer />
      </div>
    );
  }
}

export default RenterApplication;

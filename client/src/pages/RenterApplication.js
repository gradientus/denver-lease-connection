import React, { Component } from "react";
import ApplicationForm from "../components/ApplicationForm";
import API from "../util/API";
import Footer from "../components/Footer";
import { Col, Row } from "reactstrap";
require("dotenv").config();

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

  // postApplication = () => {
  //   API.postApplications()
  //     .then(res => this.setState({ }))
  //     .catch(err => console.log(err));
  // };

  // componentDidMount() {
  //   this.postApplication();
  // }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.firstName &&
      this.state.lastName &&
      this.state.address &&
      this.state.city &&
      this.state.state &&
      this.state.zip &&
      this.state.phone &&
      this.state.email &&
      this.state.income &&
      this.state.employment
    ) {
      API.postApplications({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
        state: this.state.state,
        city: this.state.city,
        zip: this.state.zip,
        phone: this.state.phone,
        email: this.state.email,
        income: this.state.income,
        employment: this.state.employment,
        info: this.state.info
      })
        .then(res => (window.location.href = "/renter"))
        .catch(err => console.log(err));
    } else {
      alert("Please fill out all required fields.");
    }
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
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Row>&nbsp;</Row>
        <Row>&nbsp;</Row>

        <Footer />
      </div>
    );
  }
}

export default RenterApplication;

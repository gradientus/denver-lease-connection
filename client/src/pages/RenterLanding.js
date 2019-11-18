import React, { Component } from "react";
import RenterNav from "../components/RenterNav";
import Greeting from "../components/GreetingContainer";
import RenterProperties from "../components/RenterProperties";
import Footer from "../components/Footer";
import API from "../util/APIListing";
import APIUsers from '../util/APIUser'

import { Col, Row, Card } from "reactstrap";

class RenterLanding extends Component {
  state = {
    listings: [],
    propertyName: "",
    details: "",
    price: "",
    isActive: true,
    user: {}
  };


  componentDidMount() {
    this.loadCurrentUser();
    this.loadListings();
  }


  loadCurrentUser = () => {
    APIUsers.getCurrentUser()
      .then(res =>
        this.setState({ user: res.data })

      )
      .catch(err => console.log(err));
  }

  loadListings = () => {
    API.getListings()
      .then(res =>
        this.setState({ listings: res.data, propertyName: "", details: "", price: "", isActive: true, user: "" })

      )

      .catch(err => console.log(err));
  };



  render() {
    return (
      <div>
        <RenterNav />
        <RenterProperties
          listings={this.state.listings}
          propertyName={this.state.propertyName}
          detail={this.state.details}
          price={this.state.price}
          user={this.state.user}
        />
        <Footer />
      </div>
    );
  }
}

export default RenterLanding;


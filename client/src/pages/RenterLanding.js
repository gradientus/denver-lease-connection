import React, { Component } from "react";
import RenterNav from "../components/RenterNav";
import Greeting from "../components/GreetingContainer";
import ListingContainer from "../components/ListingContainer";
import Footer from "../components/Footer";
import API from "../util/APIListing";
import { Col, Row, Card } from "reactstrap";

class RenterLanding extends Component {
  state = {
    listings: [],
    propertyName: "",
    details: "",
    price: "",
    isActive: true
  };
  componentDidMount() {
    this.loadListings();
  }
  loadListings = () => {
    API.getListings()
      .then(res =>
        this.setState({ listings: res.data, propertyName: "", details: "", price: "", isActive: true })

      )
      .catch(err => console.error(err));
  };
  render() {
    return (
      <div>
        <RenterNav />
        <ListingContainer
          listings={this.state.listings}
          propertyName={this.state.propertyName}
          details={this.state.details}
          price={this.state.price}
        />
        <Footer />
      </div>
    );
  }
}

export default RenterLanding;

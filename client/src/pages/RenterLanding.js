import React, { Component } from "react";
import RenterNav from "../components/RenterNav";
import RenterProperties from "../components/RenterProperties";
import Footer from "../components/Footer";
import API from "../util/APIListing";
import APIUsers from "../util/APIUser";

class RenterLanding extends Component {
  state = {
    listings: [],
    propertyName: "",
    details: "",
    price: "",
    isActive: true,
    user: "",
    currentUser: ""
  };

  loadCurrentUser = () => {
    APIUsers.getCurrentUser()
      .then(res => this.setState({ currentUser: res.data.googleId }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadCurrentUser();
    this.loadListings();
  }

  loadListings = () => {
    API.getListings()
      .then(res =>
        this.setState({
          listings: res.data,
          propertyName: "",
          details: "",
          price: "",
          isActive: true,
          user: ""
        })
      )
      .catch(err => console.log(err));
  };

  handleChatClick = event => {
    event
      .preventDefault()
      .then((window.location.href = "/chat"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <RenterNav />
        <RenterProperties
          listings={this.state.listings}
          propertyName={this.state.propertyName}
          details={this.state.details}
          price={this.state.price}
          user={this.state.user}
          currentUser={this.state.currentUser}
          handleChatClick={this.state.handleChatClick}
        />
        <Footer />
      </div>
    );
  }
}

export default RenterLanding;

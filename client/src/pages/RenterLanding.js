import React, { Component } from "react";
import RenterNav from "../components/RenterNav";
import RenterProperties from "../components/RenterProperties";
import Footer from "../components/Footer";
import API from "../util/APIListing";
import APIUsers from "../util/APIUser";

class RenterLanding extends Component {
  state = {
    currentUser: ""
  };

  async loadCurrentUser() {
    await APIUsers.getCurrentUser()
      .then(res => this.setState({ currentUser: res.data._id }))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.loadCurrentUser();
  }

  render() {
    return (
      <div>
        <RenterNav />
        <RenterProperties currentUser={this.state.currentUser} />
        <Footer />
      </div>
    );
  }
}

export default RenterLanding;

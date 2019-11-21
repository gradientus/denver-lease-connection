import React, { Component } from "react";
import ChatApp from "../components/ChatApp";
import RenterNav from "../components/RenterNav";
import Footer from "../components/Footer";
import API from "../util/APIListing";
import APIUsers from "../util/APIUser";

class ChatLanding extends Component {
  state = {
    otherUser: "",
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
          otherUser: res.data.user
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <RenterNav />
        <ChatApp
          otherUser={this.state.otherUser}
          currentUser={this.state.currentUser}
        />
        <Footer />
      </div>
    );
  }
}

export default ChatLanding;

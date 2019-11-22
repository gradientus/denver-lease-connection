import React, { Component } from "react";
import ChatApp from "../components/ChatApp";
import RenterNav from "../components/RenterNav";
import Footer from "../components/Footer";
import axios from "axios";

class ChatLanding extends Component {
  state = {
    currentUser: ""
  };

  async componentDidMount() {
    const results = await axios.get("/api/current_user");
    const currentUser = await results.data.googleId;

    console.log(currentUser);
    this.setState({ currentUser: currentUser });
  }

  render() {
    return (
      <div>
        <RenterNav />
        <ChatApp currentUser={this.state.currentUser} />
        <Footer />
      </div>
    );
  }
}

export default ChatLanding;

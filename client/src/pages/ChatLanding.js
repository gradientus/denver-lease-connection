import React, { Component } from "react";
import ChatApp from "../components/ChatApp";
import RenterNav from "../components/RenterNav";
import Footer from "../components/Footer";

class ChatLanding extends Component {
  render() {
    return (
      <div>
        <RenterNav />
        <ChatApp />
        <Footer />
      </div>
    );
  }
}

export default ChatLanding;

import React, { Component } from "react";
import { ChatkitProvider, TokenProvider } from "@pusher/chatkit-client-react";
import axios from "axios";

import "./style.css";
import ChatBox from "../ChatBox";
// import UserList from './components/UserList';
// import chatkitLogo from "./chatkit-logo.svg";

const instanceLocator = "v1:us1:6fe6d324-55a1-4f08-9863-19b4c0fa51dc";

const tokenProvider = new TokenProvider({
  url:
    "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/6fe6d324-55a1-4f08-9863-19b4c0fa51dc/token"
});

// const results = axios.get("/api/current_user");
// console.log(results);
const userId = "116916979726097879247";
const otherUserId = "113647198101532205328";
// Barbara 113647198101532205328
// Phil 116916979726097879247
// Austin 108735557576994882532
class ChatApp extends Component {
  state = {
    userId: "",
    otherUserId: ""
  };

  // async componentDidMount() {
  //   const results = await axios.get("/api/current_user");
  //   const user = results.data.googleId;
  //   const otherUserId = "116916979726097879247";

  //   console.log(user);
  //   this.setState({ userId: user });
  // }

  componentDidMount() {
    axios
      .get("/api/current_user")
      .then(res => this.setState({ userId: res.data.googleId }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      // <div>Test Component</div>

      <div className="App">
        <div className="App__chatwindow">
          <ChatkitProvider
            instanceLocator={instanceLocator}
            tokenProvider={tokenProvider}
            userId={userId}
          >
            {/* <UserList userId={userId} /> */}
            <ChatBox otherUserId={otherUserId} />
          </ChatkitProvider>
        </div>

        <div className="App__backdrop">
          {/* <img
            className="App__backdrop__logo"
            src={chatkitLogo}
            alt="Chatkit logo"
          /> */}
        </div>
      </div>
    );
  }
}
export default ChatApp;

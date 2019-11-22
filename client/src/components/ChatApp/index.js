import React from "react";
import { ChatkitProvider, TokenProvider } from "@pusher/chatkit-client-react";
import axios from "axios";
import APIUsers from "../../util/APIUser";
import "./style.css";
import ChatBox from "../ChatBox";
// import UserList from './components/UserList';
// import chatkitLogo from "./chatkit-logo.svg";

const instanceLocator = "v1:us1:6fe6d324-55a1-4f08-9863-19b4c0fa51dc";

const tokenProvider = new TokenProvider({
  url:
    "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/6fe6d324-55a1-4f08-9863-19b4c0fa51dc/token"
});

function ChatApp(props) {
  // const results = axios.get("/api/current_user");
  // console.log(results);
  let userId = props.currentUser;
  let otherUserId = "751962868886328";
  // Austin 108735557576994882532
  console.log(userId);
  console.log(otherUserId);
  return (
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
export default ChatApp;

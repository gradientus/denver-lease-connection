import React from "react";
import { ChatkitProvider, TokenProvider } from "@pusher/chatkit-client-react";

import "./style.css";
import Chat from "./components/Chat";
import UserList from "./components/UserList";
// import chatkitLogo from "./chatkit-logo.svg";

const instanceLocator = "v1:us1:6fe6d324-55a1-4f08-9863-19b4c0fa51dc";

const tokenProvider = new TokenProvider({
  url:
    "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/6fe6d324-55a1-4f08-9863-19b4c0fa51dc/token"
});

function ChatApp() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("userId");
  const otherUserId = urlParams.get("otherUserId");

  return (
    <div className="App">
      <div className="App__chatwindow">
        <ChatkitProvider
          instanceLocator={instanceLocator}
          tokenProvider={tokenProvider}
          userId={userId}
        >
          <UserList userId={userId} />
          <Chat otherUserId={otherUserId} />
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

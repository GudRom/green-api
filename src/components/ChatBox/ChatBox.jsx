import React from "react";
import Chat from "./Chat/Chat";
import "./ChatBox.scss";
import IntroWindow from "./IntroWindow/IntroWindow";

const ChatBox = (props) => {
  return (
    <section className="chatbox">
      <Chat />
      {/* <IntroWindow /> */}
    </section>
  );
};

export default ChatBox;

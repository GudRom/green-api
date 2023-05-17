import React from "react";
import Chat from "./Chat/Chat";
import "./ChatBox.scss";
import IntroWindow from "./IntroWindow/IntroWindow";

const ChatBox = ({
  messages,
  setMessages,
  currentChat,
  apiToken,
  idInstance,
}) => {
  return (
    <section className="chatbox">
      {currentChat ? (
        <Chat
          messages={messages}
          setMessages={setMessages}
          currentChat={currentChat}
          apiToken={apiToken}
          idInstance={idInstance}
        />
      ) : (
        <IntroWindow />
      )}
    </section>
  );
};

export default ChatBox;

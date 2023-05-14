import React from "react";
import ChatCard from "./ChatCard/ChatCard";
import "./ChatList.scss";

const ChatList = (props) => {
  return (
    <ul className="chatlist">
      <li className="chatlist_item">
        <ChatCard />
      </li>
      <li className="chatlist_item">
        <ChatCard />
      </li>
      <li className="chatlist_item">
        <ChatCard />
      </li>
      <li className="chatlist_item">
        <ChatCard />
      </li>
      <li className="chatlist_item">
        <ChatCard />
      </li>
      <li className="chatlist_item">
        <ChatCard />
      </li>
      <li className="chatlist_item">
        <ChatCard />
      </li>
      <li className="chatlist_item">
        <ChatCard />
      </li>
      <li className="chatlist_item">
        <ChatCard />
      </li>
      <li className="chatlist_item">
        <ChatCard />
      </li>
      <li className="chatlist_item">
        <ChatCard />
      </li>
    </ul>
  );
};

export default ChatList;

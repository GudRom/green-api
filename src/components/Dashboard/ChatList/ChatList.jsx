import React from "react";
import ChatCard from "./ChatCard/ChatCard";
import "./ChatList.scss";

const ChatList = ({ chats, setCurrentChat }) => {
  return (
    <section className="chatlist">
      <ul className="chatlist__list">
        {chats.length > 0 ? (
          chats.map((chat) => {
            return (
              <li
                className="chatlist_item"
                key={chat.id.toString()}
                onClick={() => setCurrentChat(chat)}
              >
                <ChatCard chat={chat} />
              </li>
            );
          })
        ) : (
          <p className="chatlist__text">Пусто</p>
        )}
      </ul>
      <div className="chatlist__text-box">
        <p className="chatlist__text">
          🔒  Ваши личные сообщения защищены сквозным шифрованием
        </p>
      </div>
    </section>
  );
};

export default ChatList;

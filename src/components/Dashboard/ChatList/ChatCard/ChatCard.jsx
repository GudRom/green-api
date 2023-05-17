import React from "react";
import "./ChatCard.scss";
import defaultAvatar from "../../../../assets/icon-avatar.svg";

const ChatCard = ({ chat }) => {
  return (
    <article className="chat-card">
      <div className="chat-card__avatar-box">
        <img className="chat-card__avatar" src={defaultAvatar} alt="аватар" />
      </div>
      <div className="chat-card__chat-info">
        <div className="chat-card__main-info">
          <p className="chat-card__username">{`+7${chat.number}`}</p>
        </div>
      </div>
    </article>
  );
};

export default ChatCard;

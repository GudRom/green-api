import React from "react";
import "./ChatCard.scss";
import defaultAvatar from "../../../../assets/icon-avatar.svg";

const ChatCard = (props) => {
  return (
    <article className="chat-card">
      <div className="chat-card__avatar-box">
        <img className="chat-card__avatar" src={defaultAvatar} alt="аватар" />
      </div>
      <div className="chat-card__chat-info">
        <div className="chat-card__main-info">
          <p className="chat-card__username">Мое имя Vendetta</p>
          <p className="chat-card__date">10.12.2023</p>
        </div>
        <p className="chat-card__last-message">I write you because you're stupid. You've forget all words.</p>
      </div>
    </article>
  );
};

export default ChatCard;

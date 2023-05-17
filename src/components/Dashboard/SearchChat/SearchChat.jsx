import React, { useState } from "react";
import "./SearchChat.scss";
import { useFormField } from "../../../hooks/useFormField";

const SearchChat = ({ chats, setChats }) => {
  const phoneNumber = useFormField("");

  const createNewChat = (e) => {
    e.preventDefault();
    const condition =
      chats.find((item) => +item.number === +phoneNumber.value) ||
      phoneNumber.value.length !== 10;

    if (condition) return;
    setChats([
      ...chats,
      {
        number: phoneNumber.value,
        id: Date.now(),
      },
    ]);
    phoneNumber.setValue("");
  };

  return (
    <section className="search-chat">
      <form className="search-chat__form" onSubmit={createNewChat}>
        <div className="search-chat__phone-code">+7</div>
        <input
          className="search-chat__input"
          type="tel"
          placeholder="Найти или создать новый чат"
          onChange={phoneNumber.onChange}
          value={phoneNumber.value}
          maxLength={10}
        />
        <button className="search-chat__button-search">
          <div className="search-chat__button-img search-chat__button-img_search"></div>
        </button>
      </form>
      <button className="search-chat__sort-btn">
        <div className="search-chat__button-img search-chat__button-img_sort"></div>
      </button>
      {phoneNumber.value ? (
        <div className="search-chat__popup">
          <p className="search-chat__popup-text">
            Создать чат для {phoneNumber.value}?
          </p>
          <div className="search-chat__popup-btn-box">
            <button className="search-chat__popup-btn" onClick={createNewChat}>
              Да
            </button>
            <button
              className="search-chat__popup-btn search-chat__popup-btn_deny"
              onClick={() => phoneNumber.setValue("")}
            >
              Нет
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default SearchChat;

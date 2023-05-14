import React from "react";
import "./SearchChat.scss";

const SearchChat = (props) => {
  return (
    <section className="search-chat">
      <form className="search-chat__form">
        <button className="search-chat__button-search">
          <div className="search-chat__button-img search-chat__button-img_search"></div>
        </button>
        <input
          className="search-chat__input"
          type="text"
          placeholder="Поиск или создать новый"
        />
      </form>
      <button className="search-chat__sort-btn">
        <div className="search-chat__button-img search-chat__button-img_sort"></div>
      </button>
    </section>
  );
};

export default SearchChat;

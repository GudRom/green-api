import React from "react";
import "./Popup.scss";

const Popup = ({ children, closePopup, isOpen, title }) => {
  return (
    <div className={`popup ${isOpen ? "popup_open" : ""}`}>
      <div className="popup__header">
        <button className="popup__btn-close" onClick={closePopup}>
          <div className="popup__btn-img"></div>
        </button>
        <p className="popup__title">{title}</p>
      </div>
      <div className="popup__children-box">{children}</div>
    </div>
  );
};

export default Popup;

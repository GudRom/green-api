import React from "react";
import "./IntroWindow.scss";

const IntroWindow = (props) => {
  return (
    <div className="intro-window">
      <div className="intro-window__image"></div>
      <div className="intro-window__text-box">
        <h1 className="intro-window__title">WhatsApp Web</h1>
        <p className="intro-window__text">
          Отправляйте и&nbsp;получайте сообщения без необходимости оставлять
          телефон подключённым.
          <br />
          Используйте WhatsApp одновременно на&nbsp;четырёх связанных
          устройствах и&nbsp;одном телефоне.
        </p>
      </div>
      <p className="intro-window__info-text">Защищено сквозным шифрованием</p>
    </div>
  );
};

export default IntroWindow;

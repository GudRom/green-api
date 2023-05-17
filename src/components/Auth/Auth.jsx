import React from "react";
import "./Auth.scss";
import FormInfo from "../FormInfo/FormInfo";

const Auth = ({ setApiToken, setIdInstance }) => {
  return (
    <div className="auth">
      <div className="auth__welcome-box">
        <h1 className="auth__company">Green Api</h1>
        <p className="auth__welcome-text">Добро пожаловать!</p>
      </div>
      <FormInfo
        title={"Введите свои данные, чтобы продолжить:"}
        setApiToken={setApiToken}
        setIdInstance={setIdInstance}
      />
      <p className="auth__text">
        Если у вас их нет, зарегистрируйтесь на{" "}
        <a
          className="auth__link"
          href="https://green-api.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          green-api.com
        </a>
      </p>
    </div>
  );
};

export default Auth;

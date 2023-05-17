import React from "react";
import "./FormInfo.scss";
import { useFormField } from "../../hooks/useFormField";

const FormInfo = ({ setApiToken, setIdInstance, title }) => {
  const tokenField = useFormField("");
  const idField = useFormField("");
  let faultCondition = tokenField.isFault || idField.isFault;

  const submitForm = (evt) => {
    evt.preventDefault();
    setIdInstance(idField.value);
    setApiToken(tokenField.value);
    sessionStorage.setItem("idInstance", idField.value);
    sessionStorage.setItem("apiToken", tokenField.value);
    idField.setValue("");
    tokenField.setValue("");
  };
  return (
    <form className="form-info">
      <p className="form-info__text">{title}</p>
      <div className="form-info__input-box">
        <input
          className="form-info__input"
          type="text"
          id="id"
          name="id"
          placeholder="IdInstance"
          value={idField.value}
          onChange={idField.onChange}
          onBlur={idField.onBlur}
        />
        <input
          className="form-info__input"
          type="text"
          id="token"
          name="token"
          placeholder="ApiTokenInstance"
          value={tokenField.value}
          onChange={tokenField.onChange}
          onBlur={tokenField.onBlur}
        />
      </div>
      {faultCondition ? (
        <span className="form-info__error">Нужно заполнить все поля</span>
      ) : null}
      <button
        className={`form-info__btn ${
          faultCondition ? "form-info__btn_disable" : ""
        }`}
        disabled={faultCondition}
        onClick={submitForm}
      >
        Подтвердить
      </button>
    </form>
  );
};

export default FormInfo;

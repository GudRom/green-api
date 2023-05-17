import React, { useState } from "react";
import defaultAvatar from "../../../../assets/icon-avatar.svg";
import "./Profile.scss";
import FormInfo from "../../../FormInfo/FormInfo";

const Profile = ({ apiToken, idInstance, setApiToken, setIdInstance }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="profile">
      <div className="profile__img-box">
        <img className="profile__img" src={defaultAvatar} alt="профиль" />
      </div>
      <div className="profile__info">
        <p className="profile__id">id: {idInstance}</p>
        <p className="profile__number">token: {apiToken}</p>
      </div>
      <button
        className="profile__btn"
        onClick={() => setIsFormOpen(!isFormOpen)}
      >
        {isFormOpen ? "Скрыть" : "Изменить"}
      </button>
      {isFormOpen ? (
        <FormInfo
          title={"Внесите изменения и подтвердите:"}
          setApiToken={setApiToken}
          setIdInstance={setIdInstance}
        />
      ) : null}
    </div>
  );
};

export default Profile;

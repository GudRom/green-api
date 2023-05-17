import "./Header.scss";
import defaultAvatar from "../../assets/icon-avatar.svg";

const Header = ({ isChatHeader, openPopup, chatName, checkNotification }) => {
  return (
    <header className="header">
      <div className="header__profile" onClick={openPopup}>
        <div className="header__profile-img-box">
          <img
            className="header__profile-img"
            src={isChatHeader ? defaultAvatar : defaultAvatar}
            alt="профиль"
          />
        </div>
        {isChatHeader ? (
          <div className="header__profile-info">
            <p className="header__profile-name">{`+7${chatName}`}</p>
            <p className="header__profile-text">Данные контакта</p>
          </div>
        ) : null}
      </div>
      <ul className="header__button-box">
        {isChatHeader ? (
          <li className="header__button-item">
            <button
              className="header__button"
              title="Обновить"
              onClick={checkNotification}
            >
              <div className="header__button-img header__button-img_refresh"></div>
            </button>
          </li>
        ) : (
          <>
            <li className="header__button-item">
              <button className="header__button" title="Не работает">
                <div className="header__button-img header__button-img_group"></div>
              </button>
            </li>
            <li className="header__button-item">
              <button className="header__button">
                <div className="header__button-img header__button-img_new-chat"></div>
              </button>
            </li>
          </>
        )}

        <li className="header__button-item">
          <button className="header__button">
            <div className="header__button-img header__button-img_menu"></div>
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;

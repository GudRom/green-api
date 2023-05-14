import "./MessageForm.scss";

const MessageForm = () => {
  return (
    <footer className="footer">
      <form className="form" action="">
        <div className="form__button-box">
          <button className="form__button">
            <div className="form__button-img form__button-img_emoji"></div>
          </button>
          <button className="form__button">
            <div className="form__button-img form__button-img_clip"></div>
          </button>
        </div>
        <input
          className="form__input"
          type="text"
          name=""
          id=""
          placeholder="Введите сообщение"
        />
        <button className="form__button">
          <div className="form__button-img form__button-img_send"></div>
        </button>
      </form>
    </footer>
  );
};

export default MessageForm;

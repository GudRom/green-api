import "./MessageForm.scss";
import { useFormField } from "../../../../hooks/useFormField";
import { sendMessage } from "../../../../api/GreenApi";

const MessageForm = ({
  messages,
  setMessages,
  currentChat,
  apiToken,
  idInstance,
}) => {
  const message = useFormField("");

  const HandleMessageForm = (e) => {
    e.preventDefault();
    if (message.value) {
      const raw = JSON.stringify({
        chatId: `7${currentChat.number}@c.us`,
        message: message.value,
      });
      sendMessage(idInstance, apiToken, raw)
        .then((res) => {
          const newMessage = {
            id: res.idMessage,
            text: message.value,
            isOwn: true,
            timestamp: Date.now() / 1000,
          };
          setMessages([...messages, newMessage]);
        })
        .catch((err) => console.log(err));
    }
    message.setValue("");
  };

  return (
    <footer className="footer">
      <button className="footer__button" disabled title="Не работает">
        <div className="footer__button-img footer__button-img_emoji"></div>
      </button>
      <button className="footer__button" disabled title="Не работает">
        <div className="footer__button-img footer__button-img_clip"></div>
      </button>
      <form className="form" name="messageForm" onSubmit={HandleMessageForm}>
        <input
          className="form__input"
          type="text"
          name="message"
          id="message"
          value={message.value}
          onChange={message.onChange}
          placeholder="Введите сообщение"
        />
        <button className="footer__button">
          <div className="footer__button-img footer__button-img_send"></div>
        </button>
      </form>
    </footer>
  );
};

export default MessageForm;

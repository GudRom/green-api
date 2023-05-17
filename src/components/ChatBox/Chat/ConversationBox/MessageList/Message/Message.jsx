import "./Message.scss";

const Message = ({ message }) => {
  const timestamp = new Date(message.timestamp * 1000);
  const hours = timestamp.getHours();
  const min = timestamp.getMinutes();
  return (
    <div className={`message ${message.isOwn ? "message_own" : ""}`}>
      <p className="message__text">{message.text}</p>
      <p className="message__date">
        {hours}:{min}
      </p>
    </div>
  );
};

export default Message;

import Message from "./Message/Message";
import "./MessageList.scss";

const MessageList = ({ messages }) => {
  return (
    <ul className="message-list">
      {messages?.map((message) => (
        <li
          key={message.id}
          className={`message-list__element ${
            message.isOwn ? "message-list__element_own" : ""
          }`}
        >
          <Message message={message} />
        </li>
      ))}
    </ul>
  );
};

export default MessageList;

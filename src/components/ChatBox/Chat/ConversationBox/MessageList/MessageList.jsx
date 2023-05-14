import Message from "./Message/Message";
import "./MessageList.scss";

const MessageList = () => {
  return (
    <ul className="message-list">
      <li className="message-list__element">
        <Message />
      </li>
      <li className="message-list__element">
        <Message />
      </li>
      <li className="message-list__element">
        <Message />
      </li>
      
    </ul>
  );
};

export default MessageList;

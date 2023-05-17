import MessageList from "./MessageList/MessageList";
import "./ConversationBox.scss";

const ConversationBox = ({ messages }) => {
  return (
    <div className="conversation-box">
      <MessageList messages={messages} />
    </div>
  );
};

export default ConversationBox;

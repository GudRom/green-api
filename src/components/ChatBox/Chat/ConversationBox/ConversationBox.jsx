import MessageList from "./MessageList/MessageList";
import "./ConversationBox.scss";

const ConversationBox = () => {
  return (
    <div className="conversation-box">
      <MessageList />
    </div>
  );
};

export default ConversationBox;

import Header from "../../Header/Header";
import ConversationBox from "./ConversationBox/ConversationBox";
import MessageForm from "./MessageForm/MessageForm";

const Chat = () => {
  return (
    <>
      <Header isChatHeader={true} />
      <ConversationBox />
      <MessageForm />
    </>
  );
};

export default Chat;

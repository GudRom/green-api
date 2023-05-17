import { useEffect } from "react";
import { deleteNotification, getNotification } from "../../../api/GreenApi";
import Header from "../../Header/Header";
import ConversationBox from "./ConversationBox/ConversationBox";
import MessageForm from "./MessageForm/MessageForm";

const Chat = ({ messages, setMessages, currentChat, apiToken, idInstance }) => {
  
  useEffect(() => {
    checkNotification();
  }, []);

  function checkNotification() {
    getNotification(idInstance, apiToken)
      .then((data) => {
        if (data) {
          return data;
        }
      })
      .then((data) => {
        addNewMessage(data);
        return data;
      })
      .then((data) => {
        if (data) {
          return deleteNotification(idInstance, apiToken, data.receiptId);
        }
      })
      .then((res) => {
        if (res) console.log(res);
      })
      .catch((err) => console.log(err));
  }

  const addNewMessage = (data) => {
    if (data && data.body.messageData) {
      const newMessage = {
        id: data.body.idMessage,
        text: data.body.messageData.textMessageData.textMessage,
        timestamp: data.body.timestamp,
        isOwn: false,
      };
      setMessages([...messages, newMessage]);
    }
  };

  return (
    <>
      <Header
        chatName={currentChat.number}
        isChatHeader={true}
        checkNotification={checkNotification}
      />
      <ConversationBox messages={messages} />
      <MessageForm
        messages={messages}
        setMessages={setMessages}
        currentChat={currentChat}
        apiToken={apiToken}
        idInstance={idInstance}
      />
    </>
  );
};

export default Chat;

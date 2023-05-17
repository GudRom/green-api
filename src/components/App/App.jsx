import { useEffect, useState } from "react";
import "./App.scss";
import Dashboard from "../Dashboard/Dashboard";
import ChatBox from "../ChatBox/ChatBox";
import Auth from "../Auth/Auth";

function App() {
  const [messages, setMessages] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [idInstance, setIdInstance] = useState("");
  const [apiToken, setApiToken] = useState("");

  useEffect(() => {
    if (sessionStorage.length > 1) {
      setIdInstance(sessionStorage.getItem("idInstance"));
      setApiToken(sessionStorage.getItem("apiToken"));
    }
  }, []);

  return (
    <div className="app">
      {apiToken && idInstance ? (
        <>
          <Dashboard
            chats={chats}
            setChats={setChats}
            setCurrentChat={setCurrentChat}
            apiToken={apiToken}
            idInstance={idInstance}
            setApiToken={setApiToken}
            setIdInstance={setIdInstance}
          />
          <ChatBox
            messages={messages}
            setMessages={setMessages}
            currentChat={currentChat}
            apiToken={apiToken}
            idInstance={idInstance}
          />
        </>
      ) : (
        <Auth setApiToken={setApiToken} setIdInstance={setIdInstance} />
      )}
    </div>
  );
}

export default App;

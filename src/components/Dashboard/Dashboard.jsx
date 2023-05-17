import React, { useState } from "react";
import Header from "../Header/Header";
import SearchChat from "./SearchChat/SearchChat";
import ChatList from "./ChatList/ChatList";

import "./Dashboard.scss";
import Popup from "./Popup/Popup";
import Profile from "./Popup/Profile/Profile";

const Dashboard = ({
  chats,
  setChats,
  setCurrentChat,
  apiToken,
  idInstance,
  setApiToken,
  setIdInstance,
}) => {
  const [isProfilePopupOpen, setIsProfileOpen] = useState(false);

  return (
    <section className="dashboard">
      <Header isChatHeader={false} openPopup={() => setIsProfileOpen(true)} />
      <SearchChat chats={chats} setChats={setChats} />
      <ChatList chats={chats} setCurrentChat={setCurrentChat} />
      <Popup
        isOpen={isProfilePopupOpen}
        closePopup={() => setIsProfileOpen(false)}
        title={"Профиль"}
      >
        <Profile
          apiToken={apiToken}
          idInstance={idInstance}
          setApiToken={setApiToken}
          setIdInstance={setIdInstance}
        />
      </Popup>
    </section>
  );
};

export default Dashboard;

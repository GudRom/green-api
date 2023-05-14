import React from "react";
import Header from "../Header/Header";
import SearchChat from "./SearchChat/SearchChat";
import ChatList from "./ChatList/ChatList";

import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <Header isChatHeader={false} />
      <SearchChat />
      <ChatList />
      <div className="dashboard__text-box">
        <p className="dashboard__text">
          Ваши личные сообщения защищены сквозным шифрованием
        </p>
      </div>
    </section>
  );
};

export default Dashboard;

import { useState } from "react";
import "./App.scss";
import Dashboard from "../Dashboard/Dashboard";
import ChatBox from "../ChatBox/ChatBox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Dashboard />
      <ChatBox />
    </div>
  );
}

export default App;

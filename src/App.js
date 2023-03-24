import logo from "./logo.svg";
import "./App.css";
import ContentChat from "./ContentChat";
import { useState } from "react";

import ChatsList from "./ChatsList";
import Bell from "./Bell";

function App() {
  const [state, setState] = useState(0);
  return (
    <div className="App ">
      <p className="logo">Dawnstar Messenger</p>
      <div className="chatsLists"></div>
      <ContentChat />
    </div>
  );
}

export default App;

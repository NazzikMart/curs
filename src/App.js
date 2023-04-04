import "./App.css";
import ContentChat from "./ContentChat/ContentChat";
import { useState } from "react";

// import ChatsList from "./ChatsList/ChatsList";
// import Bell from "./Bell/Bell";

function App() {
  const [state, setState] = useState(0);
  return (
    <div className="App ">
      <div className="chatsLists"></div>
      <ContentChat />
      {/* <p className="logo">Dawnstar Messenger</p> */}
    </div>
  );
}

export default App;

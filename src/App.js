import logo from "./logo.svg";
import "./App.css";
import ContentChat from "./ContentChat";
import AddChats from "./AddChats";

function App() {
  return (
    <div className="App ">
      <p className="logo">Dawnstar Messenger</p>
      <AddChats />
      <ContentChat />
    </div>
  );
}

export default App;

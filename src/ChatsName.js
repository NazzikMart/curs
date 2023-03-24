import React from "react";
import "./App.css";
import BurgerMnenuComponent from "./BurgerMnenuComponent";
import { useState } from "react";

export default function ChatsName() {
  const [state, setState] = useState("");
  const [toogle, setToogle] = useState(false);
  function handleBurger() {
    console.log("burger");
    setState(<BurgerMnenuComponent />);
    setToogle(!toogle);
    console.log(toogle);
    if (toogle === false) {
      setState("");
    }
  }
  return (
    <div className="ChatsName">
      <header className="burger" onClick={handleBurger}>
        <div class="menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <input
        type="text"
        className="form-control inputItemsInfoChatHeader"
        id="inputPassword2"
        placeholder="Пошук"
        style={{
          width: "310px",
          position: "absolute",
          marginLeft: "70px",
        }}
      />
      <h1 className="showBurgerMenu">{state}</h1>
    </div>
  );
}

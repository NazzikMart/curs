import React from "react";
import "./App.css";
import BurgerMnenuComponent from "./BurgerMnenuComponent";
import { useState } from "react";

export default function ChatsName() {
  const [state, setState] = useState("");
  const [toogle, setToogle] = useState(true);

  function handleBurger() {
    console.log("burger");
    setState(<BurgerMnenuComponent />);
    setToogle(!toogle);

    console.log(toogle);
    if (toogle === false) {
      setState("");
    }
  }

  if (toogle === false) {
    return (
      <div className="ChatsName">
        <header className="burger" onClick={handleBurger}>
          <div class="menu-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
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
  } else if (toogle === true) {
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
        {/* <h1 className="showBurgerMenu">{state}</h1> */}
      </div>
    );
  }
}

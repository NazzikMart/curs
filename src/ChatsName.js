import React from "react";
import "./App.css";

export default function ChatsName() {
  return (
    <div className="ChatsName">
      <header className="burger">
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
    </div>
  );
}

import React from "react";
import "../App.css";

export default function MessageUserChatAdd() {
  return (
    <div className="MessageUserChatAdd">
      <div className="chat-input">
        <textarea
          className="chat-input__textarea"
          placeholder="Напишіть повідомлення"
        ></textarea>
        <button className="chat-input__button">Надіслати</button>
      </div>
    </div>
  );
}

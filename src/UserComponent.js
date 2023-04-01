import React from "react";
import "./App.css";
import { useState } from "react";
import InfoChatHeader from "./InfoChatHeader";
import MessageUserChatAdd from "./MessageUserChatAdd";

export default function UserComponent(props) {
  const [state, setState] = useState(false);
  const [infoname, setInfoName] = useState();
  function addChatUser() {
    setState(!state);
  }

  const users = [
    { id: 1, name: "John Doe", message: "Hello, how are you doing today?" },
    { id: 2, name: "Nazik Mart", message: "Hello" },
    { id: 2, name: "Dima Mart", message: "Hello Nazik" },
  ];
  if (state === false) {
    return (
      <div className="UserComponent">
        {users.map((item) => {
          return (
            <div className="chat__user" onClick={addChatUser}>
              <div className="chat__user-avatar">
                <img src="https://via.placeholder.com/50" alt="User Avatar" />
              </div>
              <div className="chat__user-info">
                <h4 className="chat__user-name">{item.name}</h4>
                <p className="chat__user-last-message">{item.message}</p>
                <p className="chat__user-last-time">
                  {new Date().toLocaleTimeString()}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="UserComponent">
        {users.map((item) => {
          return (
            <div className="chat__user" onClick={addChatUser}>
              <div className="chat__user-avatar">
                <img src="https://via.placeholder.com/50" alt="User Avatar" />
              </div>
              <div className="chat__user-info">
                <h4 className="chat__user-name">{item.name}</h4>
                <p className="chat__user-last-message">{item.message}</p>
                <p className="chat__user-last-time">
                  {new Date().toLocaleTimeString()}
                </p>
              </div>
            </div>
          );
        })}
        <InfoChatHeader />
        <MessageUserChatAdd />
      </div>
    );
  }
}

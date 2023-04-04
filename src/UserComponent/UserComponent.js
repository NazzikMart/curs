import React from "react";
import "../App.css";
import { useState } from "react";
import InfoChatHeader from "../InfoChatHeader/InfoChatHeader";
import MessageUserChatAdd from "../MessageUserChatAdd/MessageUserChatAdd";
import AddUserForm from "../AddUserForm/AddUserForm";

export default function UserComponent(props) {
  const [state, setState] = useState(false);
  const [infoname, setInfoName] = useState();

  const [state1, setState1] = useState("");
  const [toogle, setToogle] = useState(true);
  function addChatUser() {
    setState(true);
  }
  let usersnew = document.querySelectorAll(".chat__user");
  usersnew.forEach((card) => {
    card.addEventListener("click", () => {
      setInfoName(card.querySelector("h4").textContent);
    });
  });

  function addForm() {
    setState1(<AddUserForm closeAddFormUser={closeForm} />);
  }

  function closeForm() {
    setState1("");
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
        <div className="noMessageUser">
          <svg
            style={{
              // border: "2px solid black",
              padding: " 20px",
              // borderRadius: "50%",
              position: "relative",
              marginLeft: "60px",
              marginTop: "-30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="106"
            height="106"
            fill="currentColor"
            class="bi bi-send"
            viewBox="0 0 16 16"
          >
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
          </svg>
          <p className="messUserNoChats">Ваше повідомлення</p>
          <span className="messTwoUserNoChats">
            Надсилайте приватні світлини та повідомлення другу або групі.
          </span>
          <button className="btn-primary btnNewMessageUserNoChats">
            Написати повідомлення
          </button>
        </div>
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
        <InfoChatHeader
          name={
            <p
              className="nameUserChatUser"
              style={{
                display: "flex",
              }}
            >
              {" "}
              <div
                className="chat__user-avatar1"
                style={{
                  position: "relative",
                  width: "20px",
                  height: "20px",
                }}
              >
                <img src="https://via.placeholder.com/20" alt="User Avatar" />
              </div>
              <span className="newChatsName"> {infoname}</span>
            </p>
          }
        />
        <MessageUserChatAdd />
      </div>
    );
  }
}

import React from "react";
import "./App.css";

import { useState } from "react";
import UserComponent from "./UserComponent";
import AddUserForm from "./AddUserForm";

export default function ChatsName() {
  const [state, setState] = useState("");
  const [toogle, setToogle] = useState(true);

  function handleBurger() {
    console.log("burger");
    // setState(<BurgerMnenuComponent />);
    setToogle(!toogle);

    console.log(toogle);
    if (toogle === false) {
      setState("");
    }
  }
  function closeForm() {
    setState("");
  }
  function addForm() {
    setState(<AddUserForm closeAddFormUser={closeForm} />);
  }

  return (
    <div className="ChatsName">
      <input
        className="form-input"
        id="txt-input"
        type="text"
        placeholder="@UserName"
        required
      />
      <li>
        <a href="#" onClick={addForm}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="bi bi-plus "
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>{" "}
        </a>
      </li>

      {/* <h1 className="showBurgerMenu">{state}</h1> */}

      <UserComponent />

      {state}
    </div>
  );
}

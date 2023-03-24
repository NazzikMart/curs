import React from "react";
import "./App.css";
import { useState } from "react";
import AddUserForm from "./AddUserForm";

export default function BurgerMnenuComponent() {
  function closeForm() {
    setState("");
  }
  const [state, setState] = useState("");
  function addForm() {
    setState(<AddUserForm closeAddFormUser={closeForm} />);
  }
  return (
    <div className="+">
      <nav
        class="sidebar"
        style={{
          transition: "1s all",
        }}
      >
        <ul>
          <li>
            <a href="#" onClick={addForm}>
              Додати чат
            </a>
          </li>
          <li>
            <a href="#">Сповіщення</a>
          </li>
          <li>
            <a href="#">Ваш профіль</a>
          </li>
          <li>
            <a href="#">Налаштування</a>
          </li>
        </ul>
      </nav>
      {state}
    </div>
  );
}

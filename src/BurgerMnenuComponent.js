import React from "react";
import "./App.css";

export default function BurgerMnenuComponent() {
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
            <a href="#">Додати чат</a>
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
    </div>
  );
}

import React from "react";
import "./App.css";

export default function ItemsInfoChatHeader() {
  return (
    <div className="ItemsInfoChatHeader">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="33"
        fill="currentColor"
        class="bi bi-bell"
        viewBox="0 0 16 16"
      >
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="33"
        fill="currentColor"
        class="bi bi-paperclip"
        viewBox="0 0 16 16"
      >
        <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
      </svg>
      <input
        type="text"
        className="form-control inputItemsInfoChatHeader"
        id="inputPassword2"
        placeholder="Пошук"
      />
      <button className="btn-success buttonItemsInfoChatHeader">Знайти</button>
    </div>
  );
}

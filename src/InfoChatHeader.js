import React from "react";
import "./App.css";
import ItemsInfoChatHeader from "./ItemsInfoChatHeader";

export default function InfoChatHeader() {
  return (
    <div className="InfoChatHeader">
      <p className="userInfoChatHeader">@user</p>
      <ItemsInfoChatHeader />
    </div>
  );
}

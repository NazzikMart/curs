import React from "react";
import "./App.css";
import LeftMenu from "./LeftMenu";
import InfoChatHeader from "./InfoChatHeader";

export default function ContentChat() {
  return (
    <div className="ContentChat">
      <LeftMenu />
      <InfoChatHeader />
    </div>
  );
}

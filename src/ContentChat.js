import React from "react";
import "./App.css";
import LeftMenu from "./LeftMenu";
import InfoChatHeader from "./InfoChatHeader";
import InfoChatsStatistik from "./InfoChatsStatistik";

export default function ContentChat() {
  return (
    <div className="ContentChat">
      <LeftMenu />
      {/* <InfoChatHeader /> */}
      <InfoChatsStatistik />
    </div>
  );
}

import React from "react";
import "../App.css";
import LeftMenu from "../LeftMenu/LeftMenu";
import InfoChatHeader from "../InfoChatHeader/InfoChatHeader";
import InfoChatsStatistik from "../InfoChatsStatistik/InfoChatsStatistik";

export default function ContentChat() {
  return (
    <div className="ContentChat">
      <LeftMenu />
      {/* <InfoChatHeader /> */}
      <InfoChatsStatistik />
    </div>
  );
}

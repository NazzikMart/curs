import React from "react";
import "../App.css";
import UserComponent from "../UserComponent/UserComponent";

export default function InfoChatHeader(props) {
  return <div className="InfoChatHeader">{props.name}</div>;
}

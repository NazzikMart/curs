import React from "react";
import "./App.css";
import Profile from "../Profile";
import AddChats from "./AddChats";
import Bell from "./Bell";

export default function BurgerItems() {
  return (
    <div className="BurgerItems">
      <Profile />
      <AddChats />
      <Bell />
    </div>
  );
}

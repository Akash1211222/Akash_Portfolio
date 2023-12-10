import React from "react";
import "./Sidebar.scss";
import Links from "./links/Links";
import ToggleButton from "./toggleButtons/ToggleButton";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="bg">
        <Links />
      </div>
      <ToggleButton />
    </div>
  );
}

export default Sidebar;

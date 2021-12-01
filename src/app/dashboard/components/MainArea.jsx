import React from "react";
import "./css/MainArea.css";

function MainArea(props) {
  return <div className="MainArea">{props.children}</div>;
}

export default MainArea;

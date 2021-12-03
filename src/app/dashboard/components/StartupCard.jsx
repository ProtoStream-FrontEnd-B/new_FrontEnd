import React from "react";
import "./css/StartupCard.css";

function StartupCard({ heading, icon, para, btn }) {
  return (
    <div className="Startup-Card">
      <h1 className="head">{heading}</h1>
      <img src={icon} alt="" className="icon" />
      <p className="para">{para}</p>
      <button className="btn">{btn}</button>
    </div>
  );
}

export default StartupCard;

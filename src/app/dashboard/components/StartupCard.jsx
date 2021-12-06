import React from "react";
import "./css/StartupCard.css";

function StartupCard({ heading, icon, para, btn, link }) {
  return (
    <div className="Startup-Card">
      <h1 className="head">{heading}</h1>
      <img src={icon} alt="" className="icon" />
      <p className="para">{para}</p>
      <a className="btn" href={link}>
        <button className="btn-1">{btn}</button>
      </a>
    </div>
  );
}

export default StartupCard;

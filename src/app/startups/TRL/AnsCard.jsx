import React from "react";
import "./css/ansCard.css";

function AnsCard({ main, sub, run }) {
  return (
    <div className="AnsCard" onClick={run}>
      <h2 className="mhead">{main}</h2>
      <p className="sub">{sub}</p>
    </div>
  );
}

export default AnsCard;

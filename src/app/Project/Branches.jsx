import React from "react";
import "./css/Branches.css";

function Branches() {
  const branches = ["CSE", "IT", "ME", "EE", "CIVIL", "ECE", "EN", "PHARMA"];

  return (
    <div className="branches">
      <div className="head">Select Branch</div>
      <div className="branch-container">
        {branches.map((branch) => (
          <div className="branch-box">{branch}</div>
        ))}
      </div>
    </div>
  );
}

export default Branches;

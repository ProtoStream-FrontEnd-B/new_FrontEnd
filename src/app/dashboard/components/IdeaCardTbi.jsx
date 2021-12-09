import React from "react";
import "./css/IdeaCardTbi.css";

function IdeaCardTbi({ title, name, mentorship }) {
  return (
    <div className="ideacardtbi">
      <div className="col">
        <h3 className="label">Idea:</h3>
        <h3 className="ans">{title}</h3>
      </div>
      <div className="col">
        <h3 className="label">Student:</h3>
        <h3 className="ans">{name}</h3>
      </div>
      <div className="col">
        <h3 className="label">Mentorship:</h3>
        <h3 className="ans">{mentorship ? "Yes" : "No"}</h3>
      </div>
    </div>
  );
}

export default IdeaCardTbi;
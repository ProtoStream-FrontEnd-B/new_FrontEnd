import React, { useState } from "react";
import "./css/IdeaCard.css";
import arrow from "../../../Assets/icons/arrow.svg";

function IdeaCard({ title, name, email, link, year }) {
  const [hidden, setHidden] = useState(true);

  return (
    <div className={hidden ? "Ideacard" : "Ideacard expanded"}>
      <h1 className="head">
        {title}{" "}
        <button onClick={() => setHidden(!hidden)}>
          <img className="arrow" src={arrow}></img>
        </button>
      </h1>
      <div className="hidden-section">
        <div className="details">
          <div className="ques">
            <div className="question">Student Name: </div>
            <div className="question">E-mail Id: </div>
            <div className="question">Current Year: </div>
            <div className="question">Documents: </div>
          </div>
          <div className="ans">
            <div className="answers">{name}</div>
            <div className="answers">{email}</div>
            <div className="answers">{year}</div>
            <div className="answers">
              <a href={link}>{link}</a>
            </div>
          </div>
        </div>
        <div className="btns">
          <button className="btn">Dissmiss</button>
          <button className="btn">Review</button>
        </div>
      </div>
    </div>
  );
}

export default IdeaCard;

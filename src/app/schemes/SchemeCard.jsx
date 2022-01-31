import React from "react";
import "./css/SchemeCard.css";

function SchemeCard({ title, poster, link, details, starts, deadline }) {
  return (
    <div className="scheme-card">
      <div className="poster-sec">
        <div className="title">{title}</div>
        <img src={poster} alt="" className="poster" />
      </div>
      <div className="details-sec">
        <p className="field">
          Starts on: <span>{starts}</span>
        </p>
        <p className="field">
          Register before: <span>{deadline}</span>
        </p>
        <div className="btns">
          <a href={details} target="blank" className="link">
            <button>Details</button>
          </a>
          <a href={link} target="blank" className="link">
            <button>Register</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SchemeCard;

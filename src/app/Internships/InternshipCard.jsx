import React, { useState } from "react";
import "./css/InternshipCard.css";
import arrow from "../../Assets/icons/DownArrow.svg";

function InternshipCard({ company, job, positions, reward, link, details }) {
  const [hide, setHide] = useState(true);

  return (
    <div className={hide ? "internship-card" : "internship-card extended-card"}>
      <div className="head-sec">
        <h3 className="company-name">{company}</h3>
      </div>
      <div className="main-sec">
        <p className="field">
          Position Title: <span className="highlight">{job}</span>
        </p>
        <p className="field">
          Available Positions: <span className="highlight">{positions}</span>
        </p>
        <p className="field">
          Reward: <span className="highlight">{reward}</span>
        </p>
        <div
          className="hidden-sec"
          style={hide ? { display: "none" } : { display: "block" }}
        >
          <p className="details">{details}</p>
        </div>
      </div>
      <div className="foot">
        <button className="arrow" onClick={() => setHide(!hide)}>
          <img src={arrow} alt="" />
        </button>
        <a href={link} target="blank">
          <button>Register</button>
        </a>
      </div>
    </div>
  );
}

export default InternshipCard;

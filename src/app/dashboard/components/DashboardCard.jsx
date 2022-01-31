import React from "react";
import "./css/DashboardCard.css";

function DashboardCard({ icon, heading, para }) {
  return (
    <div className="DashboardCard">
      <img src={icon} alt="" />
      <h1 className="head">{heading}</h1>
      <p className="para">{para}</p>
    </div>
  );
}

export default DashboardCard;

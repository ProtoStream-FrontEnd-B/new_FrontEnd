import React from "react";
import "./css/YojanaCard.css";

function YojanaCard({ link, name, image }) {
  return (
    <a href={`${link}`} target="blank" className="yojana-card">
      <div className="new">
        <img src={image} alt="" className="scheme-poster" />
        <p className="para">{name}</p>
      </div>
    </a>
  );
}

export default YojanaCard;

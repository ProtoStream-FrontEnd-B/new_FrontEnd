import React from "react";
import "./css/section.css";

function Asection({ heading, subHeading, span, btnText, imageSrc, link }) {
  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="hero-image">
            <img src={imageSrc} alt="" className="image" />
          </div>
          <div className="hero-details">
            <h1 className="heading">{heading}</h1>
            <div className="span">{span}</div>
            <p className="sub-head">{subHeading}</p>
            {/* <NavLink to={link}> */}
            <a href={link}>
              <button className="btn">{btnText}</button>
            </a>
            {/* </NavLink> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Asection;

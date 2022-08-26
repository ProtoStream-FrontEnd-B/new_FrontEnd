import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./css/section.css";
function Section({
  heading,
  subHeading,
  classname,
  sec_btn_txt,
  sec_link,
  span,
  btnText,
  imageSrc,
  link,
  below_txt,
}) {
  return (
    <div>
      <div className={classname}>
        <div className="container">
          <div className="hero-details">
            <h1 className="heading">{heading}</h1>
            <p className="sub-head">{subHeading}</p>
            <div className="span">{span}</div>
            <NavLink to={link}>
              <button className="btn">{btnText}</button>
              {below_txt ? <p className="sub-head">{below_txt}</p> : ""}
            </NavLink>
            {sec_link ? (
              <NavLink to={sec_link}>
                <button className="btn">{sec_btn_txt}</button>
              </NavLink>
            ) : (
              ""
            )}
          </div>
          <div className="hero-image">
            <img src={imageSrc} alt="" className="image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;

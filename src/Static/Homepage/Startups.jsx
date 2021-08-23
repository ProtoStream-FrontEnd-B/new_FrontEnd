import React from "react";
import "./css/startup.css";
import roxet from '../../Assets/icons/roxet.svg'
import sploosh from '../../Assets/icons/sploosh.svg'
import redux from '../../Assets/icons/redux.svg'
import bookstorm from '../../Assets/icons/bookstorm.svg'
import { carouselData } from "../../data/startup_carousel";

function Startups() {
  return (
    <div className="startups">
      <div className="heading">Startups</div>
      <div className="container">
        {/* <div className="box">
          <img src={roxet} alt="" className="startup-icon" />
          <span>Roxet</span>
        </div>
        <div className="box">
          <img src={sploosh} alt="" className="startup-icon" />
          <span>Sploosh</span>
        </div>
        <div className="box">
          <img src={redux} alt="" className="startup-icon" />
          <span>Redux Motors</span>
        </div>
        <div className="box">
          <img src={bookstorm} alt="" className="startup-icon" />
          <span>BookStorm</span>
        </div> */}

        {carouselData.map(({ imgSrc, spanText }) => {
          return (
            <div className="box">
              <img src={imgSrc} alt="" className="startup-icon" />
              <span>{spanText}</span>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Startups;

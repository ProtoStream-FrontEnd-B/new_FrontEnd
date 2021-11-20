import React, { useState } from "react";
import { useHistory } from "react-router";
import "./css/StartupCard.css";
const StartupCard = ({ btn1, btn2, head, para, route1, route2 }) => {
  const history = useHistory();

  const onBtnClick = (route) => {
    console.log("btn clicked");
    history.push(route);
  };

  const [hoverBtn, setHoverBtn] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setHoverBtn(!hoverBtn);
      }}
      onMouseLeave={() => {
        setHoverBtn(!hoverBtn);
      }}
      className="Startup_card"
    >
      <div className="container">
        <h1 className="head">{head}</h1>
        <p className="para">{para}</p>
        <div className="btn_div">
          <div onClick={()=>{onBtnClick(route1)}} className={hoverBtn ? "btnhover" : "btn"}>
            {btn1}
          </div>
          <div onClick={()=>{onBtnClick(route2)}} className={hoverBtn ? "btnhover" : "btn"}>
            {btn2}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupCard;

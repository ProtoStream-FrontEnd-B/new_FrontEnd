import React from "react";
import { useHistory } from "react-router";
import "./css/StartupCard.css";

function StartupCard({ heading, icon, para, btn  ,link}){
  const history = useHistory();
  

  const onClickHandle = (link)=>{
history.push(link);
  }
  return (
    <div className="Startup-Card">
      <h1 className="head">{heading}</h1>
      <img src={icon} alt="" className="icon" />
      <p className="para">{para}</p>
      <button onClick = {()=>{onClickHandle(link)}}className="btn">{btn}</button>
    </div>
  );
}

export default StartupCard;

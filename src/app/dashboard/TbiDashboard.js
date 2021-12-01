import React, { useState } from "react";
import MainArea from "./components/MainArea";
import profile from "../../Assets/icons/profile.svg";
import Badge from "../../Assets/icons/Badge.svg";
import "./css/TbiDashboard.css";
import { signout } from "../../auth";
import { useHistory } from "react-router-dom";

const TbiDashboard = () => {
  const [active, setActive] = useState("hackathon");

  const history = useHistory();

  const onClickLogout = () => {
    signout(() => {
      history.push("/");
      window.location.reload();
    });
  };

  const getPage = () => {
    if (active == "hackathon") return <div>Hackathon Page</div>;
    else if (active == "schemes") return <div>Schemes page</div>;
    else if (active == "internship") return <div>Internship page</div>;
    else if (active == "startups") return <div>Startups</div>;
  };

  return (
    <div className="Tbi-dashboard">
      <div className="main-container">
        <div className="sidebar">
          <div className="info">
            <img src={profile} alt="" />
            <p className="name">
              TBI <span>KIET</span>
            </p>
          </div>
          <div className="btns">
            <button
              onClick={() => setActive("hackathon")}
              className={
                active == "hackathon" ? "section-btn active" : "section-btn"
              }
            >
              Hackathons
            </button>
            <button
              onClick={() => setActive("schemes")}
              className={
                active == "schemes" ? "section-btn active" : "section-btn"
              }
            >
              Schemes
            </button>
            <button
              onClick={() => setActive("internship")}
              className={
                active == "internship" ? "section-btn active" : "section-btn"
              }
            >
              Internships
            </button>
            <button
              onClick={() => setActive("startups")}
              className={
                active == "startups" ? "section-btn active" : "section-btn"
              }
            >
              Startups
            </button>
          </div>
          <div className="logout">
            <button className="log-out" onClick={onClickLogout}>
              <i className="fas fa-sign-out-alt"></i> Log Out
            </button>
          </div>
        </div>
        <MainArea>
          <div className="admin">
            <img src={Badge} alt="" className="badge" />
            <p className="subhead">Admin Panel</p>
          </div>
          <div className="container">{getPage()}</div>
        </MainArea>
      </div>
    </div>
  );
};

export default TbiDashboard;

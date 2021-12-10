import React, { useState } from "react";
import MainArea from "./components/MainArea";
import DashboardCard from "./components/DashboardCard";
import StartupCard from "./components/StartupCard";
import { signout } from "../../auth";
import { Logout } from "../../redux/actions/authAction";
import "./css/TbiDashboard.css";
import { useDispatch , useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// adding icons
import profile from "../../Assets/icons/profile.svg";
import Badge from "../../Assets/icons/Badge.svg";
import plus from "../../Assets/icons/plus.svg";
import trophy from "../../Assets/icons/trophy-icon.svg";
import idea from "../../Assets/icons/idea-icon.svg";
import erase from "../../Assets/icons/Erase-icon.svg";
import slot from "../../Assets/icons/slot-icon.svg";

const TbiDashboard = () => {
  const [active, setActive] = useState("hackathon");
const dispatch = useDispatch();

  const history = useHistory();

  const onClickLogout = () => {
    // signout(() => {
    //   history.push("/");
    //   window.location.reload();
    // });
    dispatch(Logout());
  };

  const getPage = () => {
    if (active == "hackathon")
      return (
        <div className="subpage">
          <DashboardCard
            icon={plus}
            heading={"Add Hackathon"}
            para={"create a new category for Hackathon for the current year"}
          />
          <DashboardCard
            icon={trophy}
            heading={"Choose Winner"}
            para={
              "Choose a Winner for Hackathon or Assign Positions to Winning Project"
            }
          />
          <DashboardCard
            icon={idea}
            heading={"Add/Remove Project"}
            para={
              "Add or Remove any project that violates the rules or is disqualified ."
            }
          />
          <DashboardCard
            icon={erase}
            heading={"Edit/Remove Hackathon"}
            para={"create a new category for Hackathon for the current year"}
          />
        </div>
      );
    else if (active == "schemes")
      return (
        <div className="subpage">
          <DashboardCard
            icon={plus}
            heading={"Add Scheme"}
            para={"Create a New Scheme or  Competition"}
          />
          <DashboardCard
            icon={erase}
            heading={"Remove/Archive Scheme"}
            para={"Remove or Archive any Scheme."}
          />
          <DashboardCard
            icon={idea}
            heading={"Edit/Update Scheme"}
            para={
              "Increase /Decrease Deadlines.Add Files or Google Forms to Fill"
            }
          />
        </div>
      );
    else if (active == "internship")
      return (
        <div className="subpage">
          <DashboardCard
            icon={plus}
            heading={"Add Internship"}
            para={"Create a New Internship"}
          />
          <DashboardCard
            icon={erase}
            heading={"Remove/Archive Internship"}
            para={"Remove or Archive any Internship."}
          />
          <DashboardCard
            icon={idea}
            heading={"Edit/Update Internship"}
            para={
              "Increase /Decrease Deadlines.Add Files or Google Forms to Fill"
            }
          />
        </div>
      );
    else if (active == "startups")
      return (
        <div className="subpage">
          <StartupCard
            heading="List of Ideas"
            icon={idea}
            para="Here you can verify, dismiss and delete anideas submit by students."
            btn="Check List"
            link={"/tbi-dashboard/IdeaList"}
          />
          <StartupCard
            heading="Book Slot/ Attendance"
            icon={slot}
            para="Book slot for ideas evaluation by calling students to TBI for face to facemeeting with them."
            btn="Check Slot"
            link={"/tbi-dashboard/Attendence"}
          />
        </div>
      );
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

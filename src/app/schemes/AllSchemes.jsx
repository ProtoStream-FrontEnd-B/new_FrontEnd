import React, { useState } from "react";
import "./css/AllSchemes.css";
import Schemes from "./Schemes";
import SchemeCard from "./SchemeCard";

function AllSchemes() {
  const [active, setActive] = useState("live");
  const [countLive, setCountLive] = useState();
  const [countPrev, setCountPrev] = useState();
  const [countUpcoming, setCountUpcoming] = useState();

  return (
    <div className="all-schemes">
      <div className="header-sec">
        <h1 className="head">Schemes, Hackathons and Internships</h1>
        <div className="filter">
          <button
            onClick={() => setActive("live")}
            className={active == "live" ? "btn-filter active" : "btn-filter"}
          >
            Live
            {countLive != null ? <p className="count">{countLive}</p> : null}
          </button>
          <button
            onClick={() => setActive("upcoming")}
            className={
              active == "upcoming" ? "btn-filter active" : "btn-filter"
            }
          >
            Upcoming
            {countUpcoming != null ? (
              <p className="count">{countUpcoming}</p>
            ) : null}
          </button>
          <button
            onClick={() => setActive("prev")}
            className={active == "prev" ? "btn-filter active" : "btn-filter"}
          >
            Previous
            {countPrev != null ? <p className="count">{countPrev}</p> : null}
          </button>
        </div>
      </div>
      <div className="scheme-container">
        {Schemes.map((item) => (
          <SchemeCard
            title={item.title}
            poster={item.poster}
            starts={item.starts}
            deadline={item.Deadline}
            link={item.registrationLink}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}

export default AllSchemes;

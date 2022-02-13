import React, { useState } from "react";
import "./css/AllSchemes.css";
import Schemes from "./Schemes";
import SchemeCard from "./SchemeCard";
import YojanaCard from "./YojanaCard";

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
        <div className="static-schemes">
          <YojanaCard
            name="NIDHI-EIR"
            link="/schemes/NidhiEir"
            image="http://www.tbi-kiet.in/assets/images/nidhi-banner.jpg"
          />
          <YojanaCard
            name="NIDHI-PRAYAS"
            link="/schemes/NidhiPrayas"
            image="http://www.tbi-kiet.in/assets/images/prayas-banner.jpg"
          />
          <YojanaCard
            name="IT & Security Policy"
            link="/schemes/it_policy"
            image="http://www.tbi-kiet.in/assets/images/image.jpg"
          />
          <YojanaCard
            name="MEITY STARTUP"
            link="http://www.tbi-kiet.in/uploads/tide2.pdf"
            image="http://www.tbi-kiet.in/assets/images/MeitYtbi2.jpg"
          />
        </div>
        <div className="all-schemes">
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
    </div>
  );
}

export default AllSchemes;

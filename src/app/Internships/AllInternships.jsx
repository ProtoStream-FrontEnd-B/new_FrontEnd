import React from "react";
import "./css/Internships.css";
import Internships from "./Internships.js";
import InternshipCard from "./InternshipCard.jsx";

function AllInternships() {
  return (
    <div className="internships">
      <div className="header-sec">
        <h1 className="head">Internships</h1>
      </div>
      <div className="internship-container">
        {Internships.map((item) => (
          <InternshipCard
            company={item.company}
            job={item.job}
            positions={item.positions}
            reward={item.rewards}
            link={item.link}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}

export default AllInternships;

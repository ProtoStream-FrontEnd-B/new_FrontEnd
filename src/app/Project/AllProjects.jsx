import React, { useState } from "react";
import "./css/AllProjects.css";
import { DeskProjectCard } from "../../Components/Cards/ProjectCard";

function AllProjects() {
  const projects = [
    {
      title: "ProtoStream",
      leader: "Siddhant Siwach",
      branch: "CSE",
      total_members: "4",
      summary:
        "New Technique for Rain water harvesting and Saline Water Use as Coolant in Nuclear Power Plants",
      submission: "20/dec/2020",
      members: [
        {
          name: "Himanshu Pandey",
          branch: "CSE",
          roll: "1900290100073",
          mob: "8476090539",
        },
        {
          name: "Ujjwal Kumar",
          branch: "C0",
          roll: "1900290100071",
          mob: "8476090539",
        },
        {
          name: "Ayushman Vashist",
          branch: "CSE",
          roll: "1900290100072",
          mob: "8476090539",
        },
      ],
    },
    {
      title: "ProtoStream",
      leader: "Siddhant Siwach",
      branch: "CSE",
      total_members: "4",
      summary:
        "New Technique for Rain water harvesting and Saline Water Use as Coolant in Nuclear Power Plants",
      submission: "20/dec/2020",
      members: [
        {
          name: "Himanshu Pandey",
          branch: "CSE",
          roll: "1900290100073",
          mob: "8476090539",
        },
        {
          name: "Ujjwal Kumar",
          branch: "C0",
          roll: "1900290100071",
          mob: "8476090539",
        },
        {
          name: "Ayushman Vashist",
          branch: "CSE",
          roll: "1900290100072",
          mob: "8476090539",
        },
      ],
    },
  ];
  const [currValue, setCurrValue] = useState(2019);
  const years = [2019, 2020, 2021];

  const handleYears = (year) => {
    setCurrValue(year);
  };

  return (
    <div className="projects">
      <h2 className="heading">Hackathons Projects</h2>
      <div className="projects-sec">
        <div className="project-header">
          <div className="years">
            {years.map((year) => (
              <button
                onClick={() => handleYears(year)}
                className={currValue == year ? "active year" : "year"}
              >
                {year}
              </button>
            ))}
          </div>
          <div className="search">
            <input type="text" placeholder="Search Projects" />
          </div>
        </div>
        <div className="projects-container">
          {projects.map((project) => (
            <DeskProjectCard
              head={project.title}
              para={project.summary}
              branch={project.branch}
              members={project.total_members}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProjects;

import React, { useState } from "react";
import "./css/AllProjects.css";
import { DeskProjectCard } from "../../Components/Cards/ProjectCard";
import ProjectModal from "../../Components/Modal/ProjectModal";

function AllInnotech() {
  const projects = [
    {
      title: "ProtoStream",
      id: 0,
      phone: 8476090539,
      roll: 1900290100073,
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
      title: "Roxet",
      id: 1,
      phone: 8476090539,
      roll: 1900290100073,
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
  const [showModal, setShowModal] = useState(false);
  const [curr, setCurr] = useState(projects[0]);

  const handleYears = (year) => {
    setCurrValue(year);
  };

  const handleModal = (id) => {
    setShowModal(true);
    setCurr(projects[id]);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="projects">
      {showModal ? (
        <ProjectModal
          title={curr.title}
          leader={curr.leader}
          branch={curr.branch}
          phone={curr.phone}
          total={curr.total_members}
          members={curr.members}
          date={curr.submission}
          roll={curr.roll}
          summary={curr.summary}
          closeModal={handleClose}
        />
      ) : null}
      <h2 className="heading">Innotech Projects</h2>
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
              id={project.id}
              modal={() => handleModal(project.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllInnotech;

import React from "react";
import { NavLink } from "react-router-dom";
import "./css/ProjectCard.css";

export const DeskProjectCard = ({
  src,
  head,
  para,
  branch,
  members,
  link,
  modal,
}) => {
  return (
    <div className="project-container" onClick={modal}>
      <div className="project_head_div">
        <h2 className="project_head">{head}</h2>
      </div>
      <div className="project_content">
        <p className="project_para">{para}</p>
      </div>
      <div className="project_link">
        <div className="branch">{branch}</div>
        <span>{`${members} Members`}</span>

        <button className="project_btn" onClick={modal}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export const MobProjectCard = ({ src, head, para, branch, members, link }) => {
  return (
    <div className="project-container">
      <div className="head">
        <img src={src} alt="" />
        <h2 className="head"></h2>
      </div>
    </div>
  );
};

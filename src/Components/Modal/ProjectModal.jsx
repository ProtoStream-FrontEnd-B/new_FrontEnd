import React from "react";
import "./css/ProjectModal.css";

function ProjectModal({
  title,
  leader,
  branch,
  phone,
  total,
  members,
  date,
  roll,
  summary,
  closeModal,
}) {
  return (
    <div className="project-modal-container">
      <div className="project-modal">
        <div className="close" onClick={closeModal}>
          x
        </div>
        <div className="title">{title}</div>
        <div className="details">
          <div className="left">
            <div className="ques">
              <div className="que">Leader name: </div>
              <div className="que">Branch: </div>
              <div className="que">Phone: </div>
              <div className="que">Roll No: </div>
              <div className="que">Total Members: </div>
              <div className="que">Submission Date: </div>
            </div>
            <div className="answers">
              <div className="ans">{leader}</div>
              <div className="ans">{branch}</div>
              <div className="ans">{phone}</div>
              <div className="ans">{roll}</div>
              <div className="ans">{total}</div>
              <div className="ans">{date}</div>
            </div>
          </div>
          <div className="right">
            <div className="field">
              <div className="que">Project Overview: </div>
              <div className="ans">{summary}</div>
            </div>
            <div className="members">
              <div className="row">
                <div className="col que">Name</div>
                <div className="col que">Branch</div>
                <div className="col que">Roll No</div>
              </div>
              {members.map((member) => (
                <div className="row">
                  <div className="col">{member.name}</div>
                  <div className="col">{member.branch}</div>
                  <div className="col">{member.roll}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;

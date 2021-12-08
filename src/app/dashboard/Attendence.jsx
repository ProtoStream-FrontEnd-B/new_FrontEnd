import React from "react";
import ideasList from "./Ideas";
import "./css/Attendence.css";

function Attendence() {
  const ideas = ideasList;
  return (
    <div className="attendence-section">
      <header className="header-sec">
        <div className="btns">
          <button className="tab">Attendence</button>
          <button className="tab">Create Next Slot</button>
        </div>
        <form action="" className="slots">
          <label htmlFor="slot">Meeting Slot</label>
          <input type="text" name="slot" id="slot" />
          <button type="submit">Submit</button>
        </form>
      </header>
      <div className="container">
        {ideas.map((idea) => (
          <div className="idea-field">
            <div className="idea-card">
              <p className="name">{idea.title}</p>
              <div className="attendence-record">
                {idea.attendence.map((att) => (
                  <p className="att">{att.val ? "P" : "A"}</p>
                ))}
              </div>
            </div>
            <div className="btns">
              <button className="btn" id="present">
                Present
              </button>
              <button className="btn" id="absent">
                Absent
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Attendence;

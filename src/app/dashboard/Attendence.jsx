import React, { useState } from "react";
import ideasList from "./Ideas";
import { useSelector } from "react-redux";
import "./css/Attendence.css";

const Attendence = () => {
  const [active, setActive] = useState("attendence");
  

  const ideaData =  useSelector(state=> state.tbi);
  const ideas = ideasList;
  return (
    <div className="attendence-section">
      <header className="header-sec">
        <div className="btns">
          <button
            onClick={() => setActive("attendence")}
            className={active == "attendence" ? "tab active" : "tab"}
          >
            Attendence
          </button>
          <button
            onClick={() => setActive("create")}
            className={active == "create" ? "tab active" : "tab"}
          >
            Create Slot
          </button>
        </div>
        <form action="" className="slots">
          <label htmlFor="slot">Meeting Slot</label>
          <input type="text" name="slot" id="slot" />
          <button type="submit">Submit</button>
        </form>
      </header>

      {active == "attendence" ? (
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
                  P
                </button>
                <button className="btn" id="absent">
                  A
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
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
                <button
                  onClick={()=>{console.log("Hye its working")}}
                  className="btn"
                  id="present"
                >
                  Invite
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Attendence;

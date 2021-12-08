import React from "react";
import IdeaCardTbi from "./components/IdeaCardTbi";
import "./css/IdeaList.css";
import ideasList from "./Ideas";

function IdeaList() {
  const ideas = ideasList;
  const feedbacks = [
    {
      title: "Roxet",
      feedback: "haha gotcha",
    },
    {
      title: "Roxet",
      feedback: "haha gotcha",
    },
    {
      title: "Roxet",
      feedback: "haha gotcha",
    },
    {
      title: "Roxet",
      feedback: "haha gotcha",
    },
  ];
  return (
    <div className="idea-list">
      <div className="header">
        <h1 className="head">Startup Ideas</h1>
      </div>
      <div className="main">
        <div className="main-container">
          <div className="ideas">
            {ideas.map((idea) => (
              <IdeaCardTbi
                title={idea.title}
                name={idea.name}
                mentorship={idea.mentorship}
              />
            ))}
          </div>
        </div>
        {/* <form className="filter-box">
          <h2 className="head">Filter by:</h2>
          <div className="field">
            <label htmlFor="dept">Department</label>
            <input name="dept" id="dept" type="text" />
          </div>
          <div className="field">
            <label htmlFor="ment">Mentorship</label>
            <input name="ment" id="ment" type="text" />
          </div>
          <button type="submit">Search</button>
        </form> */}

        <div className="filter-box">
          <h2 className="head">Student Feedbacks:</h2>
          <div className="feedback-container">
            {feedbacks.map((feedback) => (
              <div className="feedback">
                <p className="name">{feedback.title}</p>
                <p className="feed">{feedback.feedback}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdeaList;

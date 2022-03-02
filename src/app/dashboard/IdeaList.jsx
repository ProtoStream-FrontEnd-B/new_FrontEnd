import React, { useEffect, useState } from "react";
import IdeaCardTbi from "./components/IdeaCardTbi";
import "./css/IdeaList.css";
import { useDispatch, useSelector } from "react-redux";
import { setJson } from "../../Global/Helper";
import { GetAllIdea } from "../../redux/actions/tbiAction";

function IdeaList() {
  const state = useSelector((state) => state.tbi);

  const dispatch = useDispatch();
  const userid = setJson(localStorage.getItem("user"));
  console.log(userid._id);
  useEffect(() => {
    console.log("use")
    dispatch(GetAllIdea(userid._id));
  },[]);
const Ideas = state.Ideas;

console.log(Ideas);


  return (
    <div className="idea-list">
      <div className="header">
        <h1 className="head">Startup Ideas</h1>
      </div>
      <div className="main">
        <div className="main-container">
          <div className="ideas">
            {Ideas!=null && Ideas!=undefined && Ideas.map((idea) => (
              <IdeaCardTbi
                title={idea.PAN}
                name={idea.Aadhar}
                id = {userid._id}
                ideaId={idea._id}
                verify = {idea.verify}
              />
            ))}
          </div>
        </div>
        <form className="filter-box">
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
        </form>
      </div>
    </div>
  );
}

export default IdeaList;

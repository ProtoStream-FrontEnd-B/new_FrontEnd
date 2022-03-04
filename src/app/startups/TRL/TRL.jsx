import React, { useEffect, useState } from "react";
import questions from "./Questions.json";
import { useDispatch } from "react-redux";
import QuestionsContainer from "./QuestionsContainer";
import "./css/TRL.css";
import { useReducer } from "react";
import { setJson } from "../../../Global/Helper";
import { UpdateTRL } from "../../../redux/actions/startupAction";
import { useHistory } from "react-router";

function TRL() {
const history = useHistory();
  const dispatch = useDispatch();
  const userid = setJson(localStorage.getItem("user"));
  const ques = questions.Questions;
  const [current, setCurrent] = useState(0);
  const [length, setLength] = useState(0);
  const progress = useReducer();
  var currQue = ques[current];

  const handleProgression = () => {
    var progressBarWidth = progress.current.clientWidth;
    if (length < progressBarWidth)
      setLength(length + progressBarWidth / ques.length);
  };

  const changeCurrent = () => {
    console.log(current);
    handleProgression();
    // if (current < 7)
    setCurrent(current + 1);
  };

  const onTrlSubmit = (e) => {
    e.preventDefault();
    const id = userid._id;
    const trl_data = {
      id,
      trl_value: {
        TRL_Test: "pass",
      },
    };
    dispatch(UpdateTRL(trl_data));
    history.push('/user-dashboard');

  };



  return (
    <div className="trl">
      <div className="progress-bar" ref={progress}>
        <div className="progress" style={{ width: `${length}px` }}>
          {" "}
        </div>
      </div>
      {current <= 7 ? (
        <QuestionsContainer
          question={currQue.Question}
          info={currQue.info}
          ans={currQue.Answers}
          key={currQue.id}
          change={() => changeCurrent()}
        />
      ) : (
        <div className="completion">
          <div className="content">
            <div className="head">
              you've successfully completed the TRL test
            </div>
            <a href="/startups">
              <button onClick = {onTrlSubmit} className="continue">Register Idea</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default TRL;

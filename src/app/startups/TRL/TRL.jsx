import React, { useState } from "react";
import questions from "./Questions.json";
import QuestionsContainer from "./QuestionsContainer";
import "./css/TRL.css";
import { useReducer } from "react";

function TRL() {
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
    if (current < 7) setCurrent(current + 1);
  };

  return (
    <div className="trl">
      <div className="progress-bar" ref={progress}>
        <div className="progress" style={{ width: `${length}px` }}>
          {" "}
        </div>
      </div>
      <QuestionsContainer
        question={currQue.Question}
        info={currQue.info}
        ans={currQue.Answers}
        key={currQue.id}
        change={() => changeCurrent()}
      />
    </div>
  );
}

export default TRL;
import React from "react";
import AnsCard from "./AnsCard";

function QuestionsContainer({ question, info, ans, change }) {
  const answer = ans;

  return (
    <div className="question-container">
      <div className="question">
        <p className="que">{question}</p>
        <p className="subque">{info}</p>
      </div>
      <div className="ans-container">
        {answer.map((a) => (
          <AnsCard
            main={a.answer}
            key={a.value}
            sub={a.info}
            run={() => change()}
          />
        ))}
      </div>
    </div>
  );
}

export default QuestionsContainer;

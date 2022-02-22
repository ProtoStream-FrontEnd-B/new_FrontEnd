import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./css/IdeaCardTbi.css";
import { OpenIdea } from "../../../redux/actions/tbiAction";

function IdeaCardTbi({ title, name, mentorship, ideaId ,id , verify }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const onHandleClick = (ideaId, id) => {
    dispatch(OpenIdea({ id , ideaId }));
    history.push("/dev");
  };

  return (
    <div  onClick={()=>onHandleClick(ideaId ,id )} className={verify==0?"ideacardtbi":"hidden"}>
      <div className="col">
        <h3 className="label">Idea:</h3>
        <h3 className="ans">{title}</h3>
      </div>
      <div className="col">
        <h3 className="label">Student:</h3>
        <h3 className="ans">{name}</h3>
      </div>
      <div className="col">
        <h3 className="label">Mentorship:</h3>
        <h3 className="ans">{mentorship ? "Yes" : "No"}</h3>
      </div>
    </div>
  );
}

export default IdeaCardTbi;

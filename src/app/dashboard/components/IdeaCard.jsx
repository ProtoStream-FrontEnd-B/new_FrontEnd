import React, { useEffect, useState } from "react";
import "./css/IdeaCard.css";
import { useDispatch, useSelector } from "react-redux";
import { EditIdea, SelectIdea } from "../../../redux/actions/mentorAction";
import arrow from "../../../Assets/icons/arrow.svg";
import { setJson } from "../../../Global/Helper";

function IdeaCard({ title, name, email, link, year , id , Step2_id , accept , review }) {
  const [hidden, setHidden] = useState(true);
  const dispatch = useDispatch();
 

  const onClickHandle=(ideaId)=>{
    const user_id = setJson(localStorage.getItem("user"));
    const userid = user_id._id;
console.log(user_id._id);


const body ={
  id: userid,
  ideaId: ideaId
}
dispatch(SelectIdea(body));
  }
const state = useSelector((state) => state.mentor);


const onAccept = (id)=>{
  const user_id = setJson(localStorage.getItem("user"));
  const userId = user_id._id;
  console.log(userId);
const body = {
  id: userId,
  value: "approved",
  ideaId: id,
}
console.log(id);
dispatch(EditIdea(body));
}




  return (
    <div className={hidden ? "Ideacard" : "Ideacard expanded"}>
      <h1 className="head">
        {title}{" "}
        <button onClick={() => setHidden(!hidden)}>
          <img className="arrow" src={arrow}></img>
        </button>
      </h1>
      <div className="hidden-section">
        <div className="details">
          <div className="ques">
            <div className="question">Student Name: </div>
            <div className="question">E-mail Id: </div>
            <div className="question">Current Year: </div>
            <div className="question">Documents: </div>
          </div>
          <div className="ans">
            <div className="answers">{name}</div>
            <div className="answers">{email}</div>
            <div className="answers">{year}</div>
            <div className="answers">
              <a href={link}>{link}</a>
            </div>
          </div>
        </div>
        <div className="btns">
       {review&& accept&& <p>Press "Review" before "Accept"</p>}
          <button  className="btn">Dissmiss</button>
          {review&&<button onClick ={()=>{onClickHandle(id)}} className="btn">Review</button>}
         
        {accept&&<button onClick={ ()=>{onAccept(state.Step2.Step2._id)}} className="btn">Accept</button>}  
        </div>
      </div>
    </div>
  );
}

export default IdeaCard;

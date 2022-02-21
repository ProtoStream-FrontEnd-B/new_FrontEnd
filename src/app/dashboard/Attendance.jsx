import React, { useEffect, useState } from "react";
import ideasList from "./Ideas";
import "./css/Attendence.css";
import { setJson } from "../../Global/Helper";
import {useDispatch, useSelector} from "react-redux";
import { CreateSlot , Get_Ideas_for_Tbi , CheckAttendanceSlot, ClearState } from "../../redux/actions/tbiAction";

function Attendence() {
  const [active, setActive] = useState("attendence");
  const [ideas , setIdeas] = useState([]);
  const [slot , setSlot ] = useState(null);
  const [submitSlot , setSubmitSlot] = useState(null);
 const dispatch = useDispatch();
 const state =  useSelector(state=> state.tbi);
 const userid = setJson(localStorage.getItem("user"));
 const onHandleChange = (e) => {
  setSlot(e.target.value);
};

const handleSubmit = (e)=>{
e.preventDefault();
console.log(slot);

const id = userid._id;

if(active==="attendence"){
  console.log("HEY THER ")
  const check_slot = slot;
  dispatch(CheckAttendanceSlot({id , check_slot}));
}
setSubmitSlot(slot);
}

 useEffect(()=>{
 
  const body = {
    id: userid._id
  }

 
  if(active==="attendence"){
    dispatch(ClearState());
  }else{
    dispatch(Get_Ideas_for_Tbi(body));
  }

 },[active])
  const onInvite = (ideaId , Slot) => {
    const id = userid._id;
 dispatch(CreateSlot({id ,ideaId , Slot }));


   console.log(state);
  };

useEffect(()=>{
  if(state.Ideas!=null && state.Ideas!=undefined ){
    setIdeas(state.Ideas.Ideas)
  }

},[state])

console.log(state);
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
          <input onChange={onHandleChange} type="number" name="slot" id="slot" />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </header>

      {active == "attendence" ? (
        <div className="container">
          {ideas!=null && ideas!=undefined &&ideas.map((idea) => (
            <div className="idea-field">
              <div className="idea-card">
                <p className="name">{idea.title}</p>
                <div className="attendence-record">
                  { idea.Session!=null && idea.Session!=undefined && idea.Session.length>0 && idea.Session.map((att) => (
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
          {ideas!=null && ideas!=undefined &&ideas.map((idea) => (
            <div className="idea-field">
              <div className="idea-card">
                <p className="name">{idea.title}</p>
                <div className="attendence-record">
                  { idea.Session!=null && idea.Session!=undefined && idea.Session.length>0 && idea.Session.map((att) => (
                    <p className="att">{att.val ? "P" : "A"}</p>
                  ))}
                </div>
              </div>
              <div className="btns">
               {submitSlot!=null && <button   onClick={()=>{onInvite(idea.Step3 , submitSlot)}} className="btn" id="present">
                  Invite 
                </button>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Attendence;
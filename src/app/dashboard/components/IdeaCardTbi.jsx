import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch  , useSelector} from "react-redux";
import "./css/IdeaCardTbi.css";
import { OpenIdea, SelectIdea } from "../../../redux/actions/tbiAction";

function IdeaCardTbi({ title, name, mentorship, ideaId ,id , verify }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.tbi);
  const onHandleClick =( id , ideaId) => {
    console.log(ideaId);
    console.log("gapppppp");
    console.log(id);
    dispatch(SelectIdea({ id , ideaId }));
   
  };

  const onHandlestate = ()=>{
if(state.Idea!=null && state.Idea!=undefined){
  history.push('/dev');
}
  }


  useEffect(()=>{
onHandlestate();
  },[state])



  return (
    <div  onClick={()=>onHandleClick(id ,ideaId )} className={verify==0?"ideacardtbi":"hidden"}>
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

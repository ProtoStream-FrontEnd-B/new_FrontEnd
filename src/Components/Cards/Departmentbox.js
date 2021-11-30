import React from "react";
import "./css/DepartmentBox.css";
import { useHistory } from "react-router";
import { useDispatch , useSelector } from "react-redux";
import { ChooseBranch } from "../../redux/actions/startupAction";
const DepartmentBox = ({ name }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  let user = localStorage.getItem("user");
  const userid = JSON.parse(localStorage.getItem("user"));
  const id = userid._id;
  const startup_details = useSelector((state) => state.startup);
  
  const onBtnClick = (Bname) => {
    console.log(Bname);
    if(startup_details.Idea.status==="new-idea-created"){
        const trl_data = {
            id,
            trl_value: {
              branch: Bname,
            },
          }; 

          dispatch(ChooseBranch(trl_data))
          history.push("/startups/Register");
    }

  
  };
  return (
    <div onClick={() => {
        onBtnClick(name);
      }} className="DepartmentBox">
      <h2
        
        className="head"
      >
        {name}
      </h2>
    </div>
  );
};

export default DepartmentBox;

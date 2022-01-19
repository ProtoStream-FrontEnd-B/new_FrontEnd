import React from "react";
import { useEffect } from "react";
import DepartmentBox from "../../Components/Cards/Departmentbox.js";
import "./css/Cdepartment.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CreateIdea } from "../../redux/actions/startupAction.js";
import { useHistory } from "react-router";
import { GetIdea } from "../../redux/actions/startupAction.js";
import { setJson } from "../../Global/Helper.js";
const Cdepartment = () => {
  const history = useHistory();

  const startup_details = useSelector((state) => state.startup);
  const dispatch = useDispatch();
  console.log(startup_details)
  const value = startup_details.Trl_value;
  const userid =  setJson(localStorage.getItem("user"));;
  const id = userid._id;
  const HandleOnLoad = (value) => {

    if(startup_details.Idea!=null){
      console.log("y this is not running")
     history.push('/startups/Register')
    }
   else if (value == "pass" && startup_details.Idea===null) {
        console.log("heyy")
       
        
      dispatch(CreateIdea(id));
    } else {
        console.log("heee")
      history.push("/");
    }
  };

  useEffect(() => {
      HandleOnLoad(value);
  }, [])

  return (
    <div className="Cdepartment">
      <div className="option-header">
        <h2 className="head">Choose your department</h2>
      </div>
      <div className="container">
        <DepartmentBox name="cse" />
        <DepartmentBox name="co" />
        <DepartmentBox name="it" />
        <DepartmentBox name="csit" />

        <DepartmentBox name="me" />
        <DepartmentBox name="eee" />
        <DepartmentBox name="ece" />
        <DepartmentBox name="civil" />
        <DepartmentBox name="pharma" />
      </div>
    </div>
  );
};

export default Cdepartment;

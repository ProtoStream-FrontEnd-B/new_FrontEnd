import React from "react";
import { useEffect } from "react";
import DepartmentBox from "../../Components/Cards/Departmentbox.js";
import "./css/Cdepartment.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CreateIdea } from "../../redux/actions/startupAction.js";
import { useHistory } from "react-router";
import { GetIdea } from "../../redux/actions/startupAction.js";
const Cdepartment = () => {
  const history = useHistory();

  const startup_details = useSelector((state) => state.startup);
  const dispatch = useDispatch();
  console.log(startup_details)
  const value = startup_details.Trl_value;
  const userid =  JSON.parse(localStorage.getItem("user"));;
  const id = userid._id;
  const HandleOnLoad = (value) => {
    if (value == "pass") {
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
        <DepartmentBox name="CSE" />
        <DepartmentBox name="CO" />
        <DepartmentBox name="IT" />
        <DepartmentBox name="CSIT" />
        <DepartmentBox name="EC" />
        <DepartmentBox name="ME" />
        <DepartmentBox name="EN" />
        <DepartmentBox name="ECE" />
        <DepartmentBox name="CIVIL" />
        <DepartmentBox name="PHARMA" />
      </div>
    </div>
  );
};

export default Cdepartment;

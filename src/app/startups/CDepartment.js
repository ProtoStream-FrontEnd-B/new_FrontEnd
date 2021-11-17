import React from "react";
import DepartmentBox from "../../Components/Cards/Departmentbox.js";
import "./css/Cdepartment.css"

const Cdepartment = () => {




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
    )


}



export default Cdepartment;
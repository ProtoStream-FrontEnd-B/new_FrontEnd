import React from "react";
import "./css/DepartmentBox.css"




const DepartmentBox = ({ name }) => {


    return (
        <div className="DepartmentBox">

            <h2 className="head">
                {name}
            </h2>
        </div>
    )
}



export default DepartmentBox;
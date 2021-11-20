import React from "react";
import "./css/DepartmentBox.css"
import { useHistory } from "react-router";




const DepartmentBox = ({ name }) => {

    const history = useHistory();
const onBtnClick= (Bname)=>{
console.log(Bname);
history.push('/startups/Register')

}
    return (
        <div  className="DepartmentBox">
            <h2 onClick = {()=>{onBtnClick(name)}} className="head">
                {name}
            </h2>
        </div>
    )
}



export default DepartmentBox;
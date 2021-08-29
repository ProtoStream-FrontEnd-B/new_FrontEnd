
import React from "react"
import "./css/DashboardCard.css"


const DashboardCard = (props) => {

    return (
        <div className="dashboard-card">

            {props.children}
        </div>
    )


}


export default DashboardCard
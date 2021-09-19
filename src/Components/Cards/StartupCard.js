import React, { useState } from 'react'
import "./css/StartupCard.css"
const StartupCard = ({ btn1, btn2, head, para }) => {



    const [hoverBtn, setHoverBtn] = useState(false)
    return (
        <div onMouseEnter={() => {
            setHoverBtn(!hoverBtn)
        }} onMouseLeave={() => {
            setHoverBtn(!hoverBtn)
        }} className="Startup_card">
            <div className="container">
                <h1 className="head">{head}</h1>
                <p className="para">{para}</p>
                <div className="btn_div">
                    <div className={hoverBtn ? "btnhover" : "btn"}>{btn1}</div>
                    <div className={hoverBtn ? "btnhover" : "btn"}>{btn2}</div>
                </div>
            </div>
        </div>
    )
}

export default StartupCard

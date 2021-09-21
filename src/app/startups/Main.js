import React from 'react'

import "./css/Main.css"
import StartupCard from '../../Components/Cards/StartupCard'



const Main = () => {
    return (
        <div className="start_page">
            <StartupCard head="Startup" para=" “Innovation distinguishes between a leader and a follower.” " btn1="Know about Startup" btn2="Register Startup Idea" />
            <StartupCard head="Evaluate" para=" “Evaluate your startup potential and check the viability of you product by using the TRL Test created by NASA to assess the potential and state of a startup idea or prototype.”  " btn2="Take TRL Test" />
        </div>
    )
}

export default Main

import React from 'react'

import "./css/Main.css"
import StartupCard from '../../Components/Cards/StartupCard'



const Main = () => {
    return (
        <div className="start_page">
            <StartupCard route1 = "/resorces" route2 = "/startups/CYB" head="Startup" para=" “Innovation distinguishes between a leader and a follower.” " btn1="Know about Startup" btn2="Register Startup Idea"  route2= "/startups/CYB" route1 = "/resources"/>
            <StartupCard route1= "/" route2 ="" head="Evaluate" para=" “Evaluate your startup potential and check the viability of you product by using the TRL Test created by NASA to assess the potential and state of a startup idea or prototype.”  " btn2="Take TRL Test" />
        </div>
    )
}

export default Main

import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getTrl } from '../../redux/actions/startupAction'
import { useDispatch } from 'react-redux'
import "./css/Main.css"
import StartupCard from '../../Components/Cards/StartupCard'
import { useHistory } from 'react-router'



const Main = () => {
    const userid =  JSON.parse(localStorage.getItem("user"));;
    const id = userid._id;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTrl(id));
    }, [])

    const startup_data = useSelector(state=>state.startup);
    console.log(startup_data)

    const route2 = startup_data.Trl_value=='PASS' ? "/startups/CYB" : "/";
    return (
        <div className="start_page">
            <StartupCard route1 = "/resorces" route2 = {route2} head="Startup" para=" “Innovation distinguishes between a leader and a follower.” " btn1="Know about Startup" btn2="Register Startup Idea" />
            <StartupCard route1= "/" route2 ="" head="Evaluate" para=" “Evaluate your startup potential and check the viability of you product by using the TRL Test created by NASA to assess the potential and state of a startup idea or prototype.”  " btn2="Take TRL Test" />
        </div>
    )
}

export default Main

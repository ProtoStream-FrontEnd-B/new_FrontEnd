import React from 'react'
import './css/Card.css'
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';

const Card = (props) => {

    const history = useHistory();

    const onUserClick = (route) => {
        console.log("Hy")
        console.log(route)
        history.push(route)
    }
    return (

        <div onClick={()=>{onUserClick(props.route)}} className="box-container" >
            <div className="box">

                <h2 className="heading">{props.heading}</h2>
                <p className="para">{props.para}</p>
                <i className={props.icon}></i>
            </div>
        </div>

    );
}

export default Card;
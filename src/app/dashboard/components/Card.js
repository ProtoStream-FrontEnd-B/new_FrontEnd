import React from 'react'
import './css/Card.css'

const Card = (props) => {
    return (
        <div className="box-container" >
            <div className="box">
                <h2 className="heading">{props.heading}</h2>
                <p className="para">{props.para}</p>
                <i className={props.icon}></i>
            </div>
        </div>
    );
}

export default Card;
import React from 'react';
import '../css/Cards.css';
import '../visa.png'

const Card = (props) => {

    return(
        <div onClick={props.handleClick} className={props.className}>
            <p className="number-input">{props.number}</p>
            <p className="name-input">{props.name}</p>
            <p className="date-input">{props.date}</p>
            <img src={props.logo} alt="logo cb" />
        </div>
    )
}

export default Card
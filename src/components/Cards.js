import React from 'react';
import '../css/Cards.css'

const Card = (props) => {
    return(
        <div className="card">
            <p className="number-input">{props.number}</p>
            <p className="name-input">{props.name}</p>
            <p className="date-input">{props.date}</p>
        </div>
    )
}

export default Card
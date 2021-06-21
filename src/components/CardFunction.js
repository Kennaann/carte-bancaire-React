import React from 'react';
import Card from './Cards';
import '../css/CardFunction.css';

function CardFunction(props) {


    return (
        <div className="card-function">
            <p>
                Carte de {props.name}: 
            </p>
            <Card 
                name={props.name} 
                number={props.number} 
                date={props.date}
                logo={props.logo}
                className="card active"
            />
        </div>

        
    )
}

export default CardFunction

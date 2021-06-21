import React from 'react';
import Card from './Cards';
import { Link, NavLink } from 'react-router-dom';

import '../css/Repository.css';


const RepList = (props) => {

    return(
        
        <div className="rep-wrapper">
           <div id="list" className="rep-list">
        
            
                {
                    props.cards.map((card, index) => {

                        return(
                            <NavLink key={index} exact to="/CardFunction" onClick={ props.getClikedCard }>
                                <Card
                                    key={index} 
                                    name={card.cardName} 
                                    number={card.cardNumber} 
                                    date={card.cardDate} 
                                    logo={card.cardLogo}
                                    className={card.className}
                                />           
                            </NavLink>
                        )
                    })
                }
 
            

        </div>
            <Link to="/">
                <div className="rep-button">
                    <span className="add-logo">+</span>
                    <p>Add a card</p>
                </div>
            </Link>
        </div>
        
    )
}

export default RepList
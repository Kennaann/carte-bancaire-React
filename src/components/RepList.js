import React from 'react';
import Card from './Cards';

// import addLogo from '../add.png'

const RepList = (props) => {

    return(
        
        <div className="rep-wrapper">
           <div id="list" className="rep-list">

            {
                props.CardState.map((card, index) => {

                    return(
                        <Card
                            key={index} 
                            name={card.cardName} 
                            number={card.cardNumber} 
                            date={card.cardDate} 
                            logo={card.cardLogo} 
                        />
                    )
                })
            }

        </div>
            <div className="rep-button">
                <span className="add-logo">+</span>
                <p>Add a card</p>
            </div> 
        </div>
        
    )
}

export default RepList
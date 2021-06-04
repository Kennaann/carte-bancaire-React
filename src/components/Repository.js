import React, { Component } from 'react';
import Card from './Cards';


class Repository extends Component {

    

    state = {
        cards: [
            {cardName: "carte n°1"},
            {cardName: "carte n°2"},
            {cardName: "carte n°3"},
            {cardName: "carte n°4"}
        ], 

        changedCard: {cardName: 'carte n°'}
        
    }

    createCardName = (e) => {
       this.setState({
        changedCard: {cardName: e.target.value}
       })
    }
    
    createCard = () => {
        let changedName = this.state.changedCard.cardName
        
        let stateArray = this.state.cards
        let changedArray = [{cardName: changedName}]
        let finalArray = changedArray.concat(stateArray)
        
        this.setState({
            cards: finalArray
        })
    }

    render() {
        return(
            <div className="repository">
                
                <div id="list" className="repList">

                    {
                        this.state.cards.map((card, index) => {
                            return(
                                <Card key={index} name={card.cardName} />
                            )
                        })
                    }
                
                </div>

                <div className="addCard">
                    
                    <Card name={this.state.changedCard.cardName}></Card>

                    <input type="text" value={this.state.changedCard.cardName} onChange={this.createCardName}/>
                    
                    <button onClick={this.createCard}>Ajouter une carte</button>
                </div>
            </div>
        )
    }
}

export default Repository
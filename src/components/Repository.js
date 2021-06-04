import React, { Component } from 'react';
import Card from './Cards';
import '../css/Repository.css';


class Repository extends Component {

    state = {
        cards: [], 
        
        changedCard: {
            cardName: '', 
            cardNumber: '',
            cardDate: ''
        }
    }

    createCard = () => {
        let changedName = this.state.changedCard.cardName
        let changedNumber = this.state.changedCard.cardNumber
        let changedDate = this.state.changedCard.cardDate
        
        let stateArray = this.state.cards
        let changedArray = [{cardName: changedName,
                            cardNumber: changedNumber,
                            cardDate: changedDate}]
        let finalArray = changedArray.concat(stateArray)
        
        this.setState({
            cards: finalArray
        })
    }

    changeCard = () => {

        const name = document.getElementById('name')
        const number = document.getElementById('number')
        const date = document.getElementById('date')

        this.setState({
            changedCard: {
                cardName: name.value,
                cardNumber: number.value,
                cardDate: date.value
            }
       })
    }

    render() {
        return(
            <div className="repository">
                
                <div id="list" className="repList">

                    {
                        this.state.cards.map((card, index) => {
                            return(
                                <Card key={index} name={card.cardName} number={card.cardNumber} date={card.cardDate} />
                            )
                        })
                    }

                </div>
                <div className="addCard">
                    <form className="form">
                        <input id="name" type="text" placeholder="Entrez votre nom" value={this.state.changedCard.cardName} onChange={this.changeCard} />
                        <input id="number" type="text" placeholder="Entrez votre numero de carte" value={this.state.changedCard.cardNumber} onChange={this.changeCard} />
                        <input id="date" type="text" placeholder="MM/AA" value={this.state.changedCard.cardDate} onChange={this.changeCard} />
                    </form>
                    
                    <Card name={this.state.changedCard.cardName} number={this.state.changedCard.cardNumber} date={this.state.changedCard.cardDate}></Card>

                    <button onClick={this.createCard}>Ajouter une carte</button>
                </div>
            </div>
        )
    }
}

export default Repository
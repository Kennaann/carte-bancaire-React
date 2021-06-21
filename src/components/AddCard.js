import React, { Component } from 'react';
import Card from './Cards';
import RepList from './RepList';
import CardFunction from './CardFunction';

import '../css/AddCard.css';

import visa from '../visa.png';
import mastercard from '../mastercard.png';
import discover from '../discover.png';

import { BrowserRouter, Route } from 'react-router-dom';

class AddCard extends Component {
    
    state = {
        cards: [
            // {cardName: 'Léa POTIER',
            // cardNumber: '0000 0000 0000 0000',
            // cardDate: '00/00',
            // cardLogo: mastercard,
            // className: 'card'},
            
            // {cardName: 'Bertrand DUBOIS',
            // cardNumber: '1234 1234 1234 1234',
            // cardDate: '12/12',
            // cardLogo: visa,
            // className: 'card'},
        
            // {cardName: 'Quentin CARDON',
            // cardNumber: '4321 4321 4321 4321',
            // cardDate: '09/00',
            // cardLogo: discover,
            // className: 'card'}
        ], 
        
        changedCard: {
            cardName: '', 
            cardNumber: '',
            cardDate: '',
            cardLogo: visa,
            className: 'card active'
        },

        cardFunction: {
            name: "",
            number: "",
            date: "",
            logo: "",
            className: "card active",
        }
    }

    createCard = () => {
        
        const stateArray = this.state.cards

        const changedName = this.state.changedCard.cardName
        const changedNumber = this.state.changedCard.cardNumber
        const changedDate = this.state.changedCard.cardDate
        const changedLogo = this.state.changedCard.cardLogo
        const changedClass = 'card'
        
        const changedArray = [{cardName: changedName,
                            cardNumber: changedNumber,
                            cardDate: changedDate,
                            cardLogo: changedLogo,
                            className: changedClass}]
        
        const finalArray = changedArray.concat(stateArray)
        
        // if(changedName === "" 
        // && changedNumber === "" 
        // && changedDate === "") {
            
        //     alert('Veuillez remplir le formulaire')
        
        // } else if(changedName === "" 
        // || changedNumber === "" 
        // || changedDate === ""
        // || changedName.length < 4
        // || changedNumber.length < 19
        // || changedDate.length < 5) {
            
        //     alert("L'un des champs du formulaire est mal renseigné")
        
        // } else {
            
            this.setState({
                cards: finalArray,
               
                //Reset le formulaire
                changedCard: {
                    cardName: "",
                    cardNumber: "",
                    cardDate: "",
                    cardLogo: this.state.changedCard.cardLogo,
                    className: this.state.changedCard.className
                }})
        

        // }

    }

    changeCard = () => {

        const name = document.getElementById('name').value
        const number = document.getElementById('number').value
        const date = document.getElementById('date').value
        const logo = this.state.changedCard.cardLogo
        const cardClass = this.state.changedCard.className
        
        if(name.match("^[add-zA-Zéèâêîôû ]*$") !== null 
        && number.match("^[0-9 ]*$") !== null 
        && date.match("^[0-9/]*$") !== null) {
            this.setState({
                changedCard: {
                    cardName: name,
                    cardNumber: number.replace(/(\d{4})(\d+)/g, '$1 $2'),
                    cardDate: date.replace(/(\d{2})(\d+)/g, '$1/'),
                    cardLogo: logo,
                    className: cardClass
                }
            })
        }
        
    }

    changeImg = (e) => {
        
        //change la classe de l'image cliquée
        const logo = e.target
        const visa = document.getElementById('visa')
        const mastercard = document.getElementById('mastercard')
        const discover = document.getElementById('discover')

        visa.classList.remove('active')
        mastercard.classList.remove('active')
        discover.classList.remove('active')
        logo.classList.add('active')
        
        //change l'image dynamiquement
        const name = document.getElementById('name').value
        const number = document.getElementById('number').value
        const date = document.getElementById('date').value
        const cardClass = this.state.changedCard.className
        
        this.setState({
            changedCard: {
                cardName: name,
                cardNumber: number,
                cardDate: date,
                cardLogo: logo.src,
                className: cardClass
            }
        })
    }

    // Permet de récupérer la carte clickée puis l'affiche dans une nouvelle page
    getClikedCard = (e) => {

        //currentTarget me permet de viser l'element parent de l'event.target
        const name = e.currentTarget.getElementsByClassName('name-input')[0].innerHTML
        const number = e.currentTarget.getElementsByClassName('number-input')[0].innerHTML
        const date = e.currentTarget.getElementsByClassName('date-input')[0].innerHTML
        const logo = e.currentTarget.querySelector('img').src
        
            this.setState({
                cardFunction: {
                    name: name,
                    number: number,
                    date: date,
                    logo: logo
                }
            })
    }


    render() {

        return(
            <BrowserRouter>
                <div className="repository">
                
                    <RepList 
                        cards={this.state.cards} 
                        getClikedCard={this.getClikedCard}
                        />
                    
                    <Route exact path="/">
                        <div className="add-card">
                            <form className="form" id="form" >
                                <input 
                                    id="name" 
                                    type="text" 
                                    placeholder="Entrez votre nom" 
                                    value={this.state.changedCard.cardName} 
                                    onChange={this.changeCard}
                                />
                                <input 
                                    id="number" 
                                    type="text" 
                                    placeholder="Entrez votre numero de carte" 
                                    maxLength="19" 
                                    value={this.state.changedCard.cardNumber} 
                                    onChange={this.changeCard}
                                />
                                <input 
                                    id="date" 
                                    type="text" 
                                    placeholder="MM/AA" 
                                    maxLength="5" 
                                    value={this.state.changedCard.cardDate} 
                                    onChange={this.changeCard} 
                                />
                            </form>
                            
                            <div className="img-wrapper">
                                <img 
                                    id="visa"
                                    className="active"
                                    src={visa} 
                                    alt="logo visa" 
                                    onClick={this.changeImg} 
                                />
                                <img
                                    id="mastercard"
                                    src={mastercard} 
                                    alt="logo mastercard" 
                                    onClick={this.changeImg}
                                />
                                <img 
                                    id="discover"
                                    src={discover} 
                                    alt="logo discover" 
                                    onClick={this.changeImg}
                                />
                            </div>

                            <Card 
                                name={this.state.changedCard.cardName} 
                                number={this.state.changedCard.cardNumber} 
                                date={this.state.changedCard.cardDate}
                                logo={this.state.changedCard.cardLogo}
                                className={this.state.changedCard.className}
                            />

                            <button className="add-button" onClick={this.createCard}>Ajouter une carte</button>
                        </div>
                    </Route>

                    <Route path="/CardFunction">
                        <CardFunction 
                            name={this.state.cardFunction.name} 
                            number={this.state.cardFunction.number} 
                            date={this.state.cardFunction.date} 
                            logo={this.state.cardFunction.logo}
                        />
                    </Route>
                    
                </div>
            </BrowserRouter>
            
        )
    }
}

export default AddCard
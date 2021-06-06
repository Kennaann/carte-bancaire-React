import React, { Component } from 'react';
import Card from './Cards';
import RepList from './RepList';

import '../css/Repository.css';
import '../css/AddCard.css';

import visa from '../visa.png';
import mastercard from '../mastercard.png';
import discover from '../discover.png';

class AddCard extends Component {

    
    state = {
        cards: [
            {cardName: 'Léa POTIER',
            cardNumber: '0000 0000 0000 0000',
            cardDate: '00/00',
            cardLogo: mastercard},
            
            {cardName: 'Bertrand DUBOIS',
            cardNumber: '1234 1234 1234 1234',
            cardDate: '12/12',
            cardLogo: visa},
        
            {cardName: 'Quentin CARDON',
            cardNumber: '4321 4321 4321 4321',
            cardDate: '09/00',
            cardLogo: discover}], 
        
        changedCard: {
            cardName: '', 
            cardNumber: '',
            cardDate: '',
            cardLogo: visa
        }
    }

    createCard = () => {
        let changedName = this.state.changedCard.cardName
        let changedNumber = this.state.changedCard.cardNumber
        let changedDate = this.state.changedCard.cardDate
        let changedLogo = this.state.changedCard.cardLogo
        
        let stateArray = this.state.cards
        let changedArray = [{cardName: changedName,
                            cardNumber: changedNumber,
                            cardDate: changedDate,
                            cardLogo: changedLogo}]
        
        let finalArray = changedArray.concat(stateArray)
        
        if(changedName === "" 
        && changedNumber === "" 
        && changedDate === "") {
            
            alert('Veuillez remplir le formulaire')
        
        } else if(changedName === "" 
        || changedNumber === "" 
        || changedDate === ""
        || changedName.length < 4
        || changedNumber.length < 19
        || changedDate.length < 5) {
            
            alert("L'un des champs du formulaire est mal renseigné")
        
        } else {
            
            this.setState({
            cards: finalArray
            })
        }
    }

    changeCard = () => {

        const name = document.getElementById('name').value
        const number = document.getElementById('number').value
        const date = document.getElementById('date').value
        const logo = this.state.changedCard.cardLogo
        
        if(name.match("^[add-zA-Zéèâêîôû ]*$") !== null 
        && number.match("^[0-9 ]*$") !== null 
        && date.match("^[0-9/]*$") !== null) {
            this.setState({
                changedCard: {
                    cardName: name,
                    cardNumber: number.replace(/(\d{4})(\d+)/g, '$1 $2'),
                    cardDate: date.replace(/(\d{2})(\d+)/g, '$1/'),
                    cardLogo: logo
                }
            })
        }
        
    }

    changeImg = (e) => {
        
        //change la classe de l'image cliquée
        const target = e.target
        const visa = document.getElementById('visa')
        const mastercard = document.getElementById('mastercard')
        const discover = document.getElementById('discover')
        
        visa.classList.remove('active')
        mastercard.classList.remove('active')
        discover.classList.remove('active')
        target.classList.add('active')
        
        //change l'image dynamiquement
        const name = document.getElementById('name').value
        const number = document.getElementById('number').value
        const date = document.getElementById('date').value
        
        
        this.setState({
            changedCard: {
                cardName: name,
                cardNumber: number,
                cardDate: date,
                cardLogo: target.src
            }
        })
    }


    render() {

        return(
            <div className="repository">
                
                <RepList CardState={this.state.cards} />

                <div className="add-card">
                    <form className="form">
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
                    />

                    <button className="add-button" onClick={this.createCard}>Ajouter une carte</button>
                </div>
            </div>
        )
    }
}

export default AddCard
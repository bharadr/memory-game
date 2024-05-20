import { useState } from 'react'
import '../App.css'
import _ from 'lodash';


const names = ["Emily", "Michael", "Sarah", "James", "Jessica", "David", "Ashley", "Daniel", "Megan", "Joshua", "Amanda", "Christopher"];

function MemoryCard({name, handleCard}) {
    return (
        <div className="card" onClick={handleCard}>{name}</div>
    )
}

function MemoryBoard({handleCard}) {

    // Initialize an array to hold the MemoryCard components
    const cards = [];
    for (let i = 0; i < 12; i++) {
        cards.push(<MemoryCard key={names[i]} name={names[i]} handleCard={handleCard}/>);
    }
    // Shuffle Cards
    const shuffledCards = _.shuffle(cards);

    return (
        <div id="memoryboard-section">
            {shuffledCards}
        </div>
    )
}




export { MemoryBoard };
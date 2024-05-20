import { useState, useEffect} from 'react'
import '../App.css'
import _ from 'lodash';


const pokemon = ["Garchomp", "Hydreigon", "Goodra", "Metagross", "Dragonite", "Salamence", "Tyranitar", "Mew", "Mewtwo", "Flygon", "Volcarona", "Swampert"];

function lowercaseFirstLetter(str) {
    if (!str) return str; // Handle empty string
    return str.charAt(0).toLowerCase() + str.slice(1);
  }
  

function MemoryCard({name, handleCard}) {
    const [imageSrc, setImageSrc] = useState('');
  
    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon/" + lowercaseFirstLetter(name);
        const fetchImage = async () => {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setImageSrc(data.sprites.front_default);
        };
        fetchImage();
    }, [name]);
      
    return (
        <div className="card" onClick={() => handleCard(name)}>
            <img src={imageSrc} alt="Loaded from API" />
            <p>{name}</p>
        </div>
    )
}

function MemoryBoard({handleCard}) {

    // Initialize an array to hold the MemoryCard components
    const cards = [];
    for (let i = 0; i < 12; i++) {
        cards.push(<MemoryCard key={pokemon[i]} name={pokemon[i]} handleCard={handleCard}/>);
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
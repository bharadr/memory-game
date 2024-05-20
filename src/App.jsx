import { useState } from 'react'
import './App.css'
import { Scoreboard } from './components/Scoreboard'
import { MemoryBoard } from './components/MemoryBoard'

const defaultState = [0, 0, new Set()];


function App() {
  const [state, setState] = useState(defaultState);

  const handleCard = (name) => {
    if (state[2].has(name)) {
      let resetState = [0, state[1], new Set()];
      setState(resetState);
    } else {
      const newSet = new Set(state[2]);
      newSet.add(name);
      let newState = [state[0] + 1, state[1], newSet];
      if (state[0] + 1 > state[1]) {
        newState[1] = state[0] + 1;
      }
      setState(newState);
    }
  }

  return (
      <div id="overallLayout">
        <div id="header-section">
          <p id="header">The Memory Game</p>
          <p id="description">Get points by clicking on an image but don't click on any entry more than once!</p>
        </div>
        <Scoreboard currentScore={state[0]} bestScore={state[1]}></Scoreboard>
        <MemoryBoard handleCard={handleCard}></MemoryBoard>
      </div>
  )
}

export default App

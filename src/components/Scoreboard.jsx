
import '../App.css'

function Scoreboard({currentScore, bestScore}) {
    return (
        <div id="scoreboard-section">
            <p className="score">Current Score: {currentScore}</p>
            <p className="score">Best Score: {bestScore}</p>
        </div>
    )
}




export { Scoreboard };
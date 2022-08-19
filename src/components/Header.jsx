import { useEffect } from "react";

function Header({handleNewGame , wins}){

    useEffect(()=> {document.title = wins + "wins"}, [wins])

    return (
        <div className="header">
            <h1>TILES MATCH</h1>
            <div className="score-container">
                <h2>{wins} Wins</h2>
                <button className="new-game" onClick={handleNewGame}>New Game</button>
            </div>
        </div>
    )
}
export default Header
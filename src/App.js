import React, { useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ScoreBoard from './Components/ScoreBoard/ScoreBoard';

const App = () => {
  const [activePlayerName, setActivePlayerName] = useState("");
  const [activePlayer, setActivePlayer] = useState(1);
  const [scoreO, setScoreO] = useState(0);
  const [scoreX, setScoreX] = useState(0);
  const [gameActive, setGameActive] = useState(false);

  const arr = Array.from({ length: 9 }, (v, i) => i + 1);

  const gameState = [2, 2, 2, 2, 2, 2, 2, 2, 2];
  const winPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]


  const handelClick = (id) => {
    console.log(id);
    let btn = document.getElementById(`btn-${id}`);
    if (!gameActive) {
      gameRestart();
    }
  };

  useEffect(() => {
    if (activePlayer === 1) {
      setActivePlayerName("X's");
    }
    else {
      setActivePlayerName("O's");
    }
  }, [activePlayer]);

  const gameRestart = () => { };

  return (
    <>
      <Header />
      <div className="container">
        <div className="score-board">
          <ScoreBoard label="PLAYER X" score={scoreX} />
          <ScoreBoard label="PLAYER Y" score={scoreO} />
        </div>
        <div className="d-flex align-content-center justify-content-center mt-3">
          <div className="game-board">
            {arr.map((item, index) => {
              return <button key={index} className='blank-btn' id={`btn-${item}`} onClick={() => handelClick(item)}>{ }</button>
            })}

          </div>
        </div>
        <div className="footer">
          <p id="curentplayer"><span id='player-status'>{activePlayerName}</span> turn</p>
          <button className='reset-btn' onClick={gameRestart}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default App
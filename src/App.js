import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ScoreBoard from "./Components/ScoreBoard/ScoreBoard";

const App = () => {
  const [activePlayerName, setActivePlayerName] = useState("");
  const [activePlayer, setActivePlayer] = useState(1);
  const [scoreO, setScoreO] = useState(0);
  const [scoreX, setScoreX] = useState(0);
  const [gameActive, setGameActive] = useState(true);

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
  ];

  const handelClick = (id) => {
    console.log(id);
    let btn = document.getElementById(`btn-${id}`);
    if (!gameActive) {
      gameRestart();
    }
    if (gameState[id] === 2) {
      gameState[id] = activePlayer;
      if (activePlayer === 0) {
        setActivePlayer(1);
        btn.innerText = "O";
      }
      if (activePlayer === 1) {
        setActivePlayer(0);
        btn.innerText = "X";
      }
    }

    // check win
    winPositions.forEach((element) => {
      if (
        gameState[winPositions[0]] === gameState[winPositions[1]] &&
        gameState[winPositions[1]] === gameState[winPositions[2]] &&
        gameState[winPositions[0]] !== 2
      ) {
        let WinStr = "";
        setGameActive(false);
        if (gameState[winPositions[0]] === 0) {
          WinStr = "X has won";
          setScoreX(scoreX + 1);
        } else {
          WinStr = "O has won";
          setScoreO(scoreO + 1);
        }
        alert(WinStr);
      }
    });
    // check game is end or not
    let isGameEnd = true;
    for (let index = 0; index < gameState.length; index++) {
      if (gameState[index] === 2) {
        isGameEnd = false;
      }
    }
    if (isGameEnd && gameActive === true) {
      setGameActive(false);
      isGameEnd = true;
      activePlayerName("Game is Over.\nStart new Game.");
    }
  };

  useEffect(() => {
    if (activePlayer === 1) {
      setActivePlayerName("X's - Tap to play");
    } else {
      setActivePlayerName("O's - Tap to play");
    }
  }, [activePlayer]);

  const gameRestart = () => {
    arr.map((item, index) => {
      let btn = document.getElementById(`btn-${index}`);
      btn.innerText = "";
      return null;
    });
    setActivePlayer(1);
  };

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
              return (
                <button
                  key={index}
                  className="blank-btn"
                  id={`btn-${index}`}
                  onClick={() => handelClick(index)}
                ></button>
              );
            })}
          </div>
        </div>
        <div className="footer">
          <p id="curentplayer">
            <span id="player-status">{activePlayerName}</span> turn
          </p>
          <button className="reset-btn" onClick={gameRestart}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default App;

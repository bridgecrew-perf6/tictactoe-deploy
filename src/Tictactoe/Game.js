import React, { useState } from "react";
import styles from "./Game.module.css";
import Board from "./Board";
import Modals from "../Modals";
import caculateWinner from "../logic";
// import Modal from "../Modal";
import checkFill from "./checkFill";

function Game() {
  const [board, setBoard] = useState(Array(9).fill());
  const [isNextClick, setIsNextClick] = useState(true);
  const [displayTurn, setDisplayTurn] = useState("X");

  let winner = caculateWinner(board);
  const result = checkFill(board);

  function handleResetGame() {
    setBoard(Array(9).fill());
    setIsNextClick(true);
  }

  function handleClick(index) {
    const newBoard = [...board];
    if (winner || board[index]) return;
    newBoard[index] = isNextClick ? "X" : "O";
    setDisplayTurn(isNextClick ? "O" : "X");
    setBoard(newBoard);
    setIsNextClick(!isNextClick);
  }
  return (
    <div className={styles["game"]}>
      <div className={styles["display-turn"]}>Your Turn Is: {displayTurn}</div>
      <Board cells={board} onclick={handleClick}></Board>

      {winner && <Modals onClick={handleResetGame} value={winner} />}

      {result && (
        <Modals onClick={handleResetGame} value="We don't have winner" />
      )}
    </div>
  );
}

export default Game;

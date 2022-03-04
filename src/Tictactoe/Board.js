import React from "react";
import Cells from "./Cells";
import styles from "./Board.module.css";

function Board({ cells, onclick }) {
  return (
    <div className={styles["board"]}>
      {cells.map((item, index) => (
        <Cells key={index} value={item} onClick={() => onclick(index)}></Cells>
      ))}
    </div>
  );
}

export default Board;

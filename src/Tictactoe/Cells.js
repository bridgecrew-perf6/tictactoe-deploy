import React from "react";
import styles from "./Cells.module.css";

function Cells({ value, onClick }) {
  return (
    <div className={styles["cell"]} onClick={onClick}>
      {value === "X" ? (
        <div className={styles["cell-x"]}></div>
      ) : value === "O" ? (
        <div className={styles["cell-y"]}></div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Cells;

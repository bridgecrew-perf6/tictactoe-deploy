import React from "react";
import styles from "./Modals.module.css";
import { Button, Modal } from "react-bootstrap";
function Fireworks({ value, onClick }) {
  return (
    <>
      <div className={styles["modal"]}>
        <Modal.Dialog style={{ width: "400px", borderRadius: "10px" }}>
          <Modal.Header>
            <Modal.Title>
              {value === "X" || value === "O"
                ? "Congratulations!!!"
                : "Sorry my friend!!!"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ fontSize: "20px", fontWeight: "normal" }}>
            <p>
              {value} {value === "X" || value === "O" ? "WIN" : ""}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={onClick}>
              Reset Game
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </>
  );
}

export default Fireworks;

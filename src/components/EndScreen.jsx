import "./EndScreen.css";
import Modal from "./Modal";

export default function EndScreen({ gameStatus, score, onPlayAgain, onQuit }) {
  return (
    <Modal title={gameStatus === "gameWon" ? "You won!" : "Game Over..."}>
      <p>Your score was: {score}!</p>
      <div className="buttons">
        <button onClick={() => onPlayAgain()}>Play again?</button>
        <button onClick={() => onQuit()}>Quit</button>
      </div>
    </Modal>
  );
}

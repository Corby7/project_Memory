import "./EndScreen.css";
import Modal from "./Modal";

export default function EndScreen({
  gameStatus,
  highScore,
  onPlayAgain,
  onQuit,
}) {
  return (
    <Modal title={gameStatus === "gameWon" ? "You won!" : "Game Over"}>
      <p>Your highScore was: {highScore}!</p>
      <button onClick={() => onPlayAgain()}>Play again?</button>
      <button onClick={() => onQuit()}>Quit</button>
    </Modal>
  );
}

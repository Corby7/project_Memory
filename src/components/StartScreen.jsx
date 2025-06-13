import LevelSelect from "./DifficultySelect";
import Modal from "./Modal";
import "./StartScreen.css";

export default function StartScreen({
  difficulty,
  onDifficultySelect,
  onStart,
}) {
  return (
    <Modal title="Select difficulty level">
      <LevelSelect
        difficulty={difficulty}
        onDifficultySelect={onDifficultySelect}
        onStartGame={onStart}
      />
    </Modal>
  );
}

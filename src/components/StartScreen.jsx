import LevelSelect from "./DifficultySelect";
import "./StartScreen.css";
import Modal from "./Modal";

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

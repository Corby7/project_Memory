import "./DifficultySelect.css";

export default function DifficultySelect({
  difficulty,
  onDifficultySelect,
  onStartGame,
}) {
  const difficultyLevels = [
    {
      key: "easy",
      name: "Easy",
      pokemonCount: 6,
      description: "6 Pokemon cards",
    },
    {
      key: "medium",
      name: "Medium",
      pokemonCount: 12,
      description: "12 Pokemon cards",
    },
    {
      key: "hard",
      name: "Hard",
      pokemonCount: 18,
      description: "18 Pokemon cards",
    },
  ];

  return (
    <>
      <div className="difficulty-select">
        {difficultyLevels.map((level) => (
          <label key={level.key}>
            <input
              type="radio"
              className="radio"
              name="difficulty"
              checked={difficulty === level.key}
              onChange={() => onDifficultySelect(level.key)}
            />
            <span>
              {level.name} - {level.description}
            </span>
          </label>
        ))}
      </div>
      <button
        className=""
        disabled={!difficulty}
        onClick={() => {
          const selectedDifficulty = difficultyLevels.find(
            (l) => l.key === difficulty
          );
          onStartGame(selectedDifficulty);
        }}
      >
        Start Game
      </button>
    </>
  );
}

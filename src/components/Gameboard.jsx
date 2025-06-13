import "./Gameboard.css";
import Card from "./Card";

export default function Gameboard({
  pokemonList,
  handleCardClick,
  score,
  highScore,
}) {
  return (
    <div className="gameboard">
      <div className="statistics">
        <h2>Score: {score}</h2>
        <h2>High Score: {highScore}</h2>
      </div>
      <div className="grid-container">
        {pokemonList.slice().map((pokemon) => (
          <Card
            key={pokemon.id}
            pokemon={pokemon}
            onClick={() => {
              handleCardClick(pokemon);
            }}
          />
        ))}
      </div>
    </div>
  );
}

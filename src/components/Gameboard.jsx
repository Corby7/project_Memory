import Card from "./Card";
import "./Gameboard.css";

export default function Gameboard({
  pokemonList,
  handleCardClick,
  score,
  highScore,
}) {
  return (
    <div className="gameboard">
      <div className="statistics">
        <h4>Score: {score}</h4>
        <h4>High Score: {highScore}</h4>
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

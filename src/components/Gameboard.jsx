import "./Gameboard.css";
import React, { useState } from "react";
import Card from "./Card";

export default function Gameboard({ pokemonList, setCardSelected }) {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardAmount, setCardAmount] = useState(1);

  const handleCardClick = (selectedPokemon) => {
    if (!selectedPokemon.hasBeenSelected) {
      setScore(score + 1);
      setCardSelected(selectedPokemon.id);
    } else {
      setHighScore(Math.max(highScore, score));
      setScore(0);
      alert(`You already selected ${selectedPokemon.name}. Try again!`);
      // pokemonList.forEach((p) => (p.hasBeenSelected = false));
    }
  };

  return (
    <div className="gameboard">
      <div className="statistics">
        <h2>Score: {score}</h2>
        <h2>High Score: {highScore}</h2>
      </div>
      <div className="grid-container">
        {pokemonList.slice(0, cardAmount).map((pokemon) => (
          <Card
            key={pokemon.id}
            pokemon={pokemon}
            onClick={() => handleCardClick(pokemon)}
          />
        ))}
      </div>
      <button onClick={() => setCardAmount((prevAmount) => prevAmount + 1)}>
        Add card, current amount: {cardAmount}
      </button>
    </div>
  );
}

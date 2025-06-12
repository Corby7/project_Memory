import "./Card.css";
import React, { useState } from "react";

export default function Card({ pokemon, onClick }) {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardAmount, setCardAmount] = useState(1);

  return (
    <div className="card" onClick={() => onClick(pokemon)}>
      <div className="inner-card">
        <img src={pokemon.imageUrl} alt={pokemon.name} />
      </div>
    </div>
  );
}

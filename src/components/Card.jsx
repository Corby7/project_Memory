import "./Card.css";
import Tilt from "react-parallax-tilt";

export default function Card({ pokemon, onClick }) {
  return (
    <Tilt>
      <div className="card" onClick={() => onClick(pokemon)}>
        <div className="inner-card">
          <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
          <img src={pokemon.imageUrl} alt={pokemon.name} />
        </div>
      </div>
    </Tilt>
  );
}

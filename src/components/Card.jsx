import "./Card.css";

export default function Card({ pokemon, onClick }) {
  return (
    <div className="card" onClick={() => onClick(pokemon)}>
      <div className="inner-card">
        <img src={pokemon.imageUrl} alt={pokemon.name} />
        <p>{pokemon.name}</p>
      </div>
    </div>
  );
}

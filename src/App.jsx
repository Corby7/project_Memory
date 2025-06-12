import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Gameboard from "./components/Gameboard.jsx";

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=10"
        );
        const data = await response.json();
        const pokemonList = data.results.map((pokemon, index) => ({
          id: index + 1,
          name: pokemon.name,
          imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
          hasBeenSelected: false,
        }));
        setPokemonList(pokemonList);
        console.log("Pokemon List:", pokemonList);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <div className="playing-field-container">
      <h2>Pokemon Memory</h2>
      <Gameboard
        pokemonList={pokemonList}
        setCardSelected={(id) => {
          setPokemonList((prevList) =>
            prevList.map((p) =>
              p.id === id ? { ...p, hasBeenSelected: true } : p
            )
          );
        }}
      />
    </div>
  );
}

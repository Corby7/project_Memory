import { useState, useEffect } from "react";
import "./App.css";
import Gameboard from "./components/Gameboard.jsx";
import StartScreen from "./components/StartScreen.jsx";
import EndScreen from "./components/EndScreen.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [difficulty, setDifficulty] = useState(null);
  const [gameStatus, setGameStatus] = useState("gameStart"); // 'gameStart', 'gamePlaying', 'gameOver', 'gameWon'
  const [isLoading, setIsLoading] = useState(false);

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const fetchPokemonList = async (pokemonCount) => {
    try {
      const promises = [];
      const usedIds = new Set();

      for (let i = 0; i < pokemonCount; i++) {
        let randomId;
        do {
          randomId = Math.floor(Math.random() * 1000) + 1; // Pokemon IDs 1-1000
        } while (usedIds.has(randomId));

        usedIds.add(randomId);
        promises.push(
          fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
            .then((response) => response.json())
            .then((data) => ({
              id: data.id,
              name: data.name,
              imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
              hasBeenSelected: false,
            }))
        );
      }

      return await Promise.all(promises);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
      return [];
    }
  };

  const startGame = async (difficulty) => {
    setIsLoading(true);
    setDifficulty(difficulty);

    try {
      const fetchedPokemon = await fetchPokemonList(difficulty.pokemonCount);

      setPokemonList(fetchedPokemon);
      setGameStatus("gamePlaying");
    } catch (error) {
      console.error("Failed to start game:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const onPlayAgain = () => {
    startGame(difficulty);
  };

  const onQuit = () => {
    setGameStatus("gameStart");
  };

  // Check win condition
  useEffect(() => {
    if (
      pokemonList.length > 0 &&
      pokemonList.every((pokemon) => pokemon.hasBeenSelected)
    ) {
      setGameStatus("gameWon");
    }
  }, [pokemonList]);

  const handleCardClick = (selectedPokemon) => {
    if (!selectedPokemon.hasBeenSelected) {
      setScore(score + 1);
      setPokemonList((prevPokemons) => {
        const updatedList = prevPokemons.map((pokemon) =>
          pokemon.id === selectedPokemon.id
            ? { ...pokemon, hasBeenSelected: true }
            : pokemon
        );

        // Shuffle cards
        return [...updatedList].sort(() => Math.random() - 0.5);
      });
    } else {
      setHighScore(Math.max(highScore, score));
      setScore(0);
      setGameStatus("gameOver");
    }
  };

  return (
    <div className="playing-field-container">
      <h2>Pokemon Memory</h2>

      {isLoading ? (
        <LoadingSpinner message="Loading Pokemon..." />
      ) : (
        <>
          {gameStatus === "gameStart" ? (
            <StartScreen
              difficulty={difficulty}
              onDifficultySelect={setDifficulty}
              onStart={startGame}
            />
          ) : (
            <Gameboard
              pokemonList={pokemonList}
              handleCardClick={handleCardClick}
              score={score}
              highScore={highScore}
            />
          )}
          {(gameStatus === "gameOver" || gameStatus === "gameWon") && (
            <EndScreen
              gameStatus={gameStatus}
              highScore={highScore}
              onPlayAgain={onPlayAgain}
              onQuit={onQuit}
            />
          )}
        </>
      )}
    </div>
  );
}

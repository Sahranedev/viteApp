import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const handleNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  const handlePrev = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  return (
    <div className="App">
      <PokemonCard
        pokemon={pokemonIndex}
        handleNext={handleNext}
        handlePrev={handlePrev}
        pokemonList={pokemonList}
      />
      <NavBar pokemon={pokemonIndex} pokemonList={pokemonList} />
    </div>
  );
}

export default App;

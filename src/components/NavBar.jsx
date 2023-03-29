import React from "react";
import "../pokemonCard.css";

const NavBar = ({ pokemonList, handlePokePoke }) => {
  return (
    <div className="btn-container">
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => handlePokePoke(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
};

export default NavBar;

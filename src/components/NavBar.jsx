import React from "react";
import "../pokemonCard.css";

const NavBar = ({ pokemonList, handlePokePoke }) => {
  const handleButtonClick = (index) => {
    handlePokePoke(index);
  };

  return (
    <div className="btn-container">
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => handleButtonClick(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
};

export default NavBar;

import React from "react";
import "../pokemonCard.css";

const NavBar = ({ pokemon, pokemonList, handleNext, handlePrev }) => {
  return (
    <div className="btn-container">
      {pokemon > 0 && <button onClick={handlePrev}>Précédent</button>}
      {pokemon < pokemonList.length - 1 && (
        <button className="btn" onClick={handleNext}>
          Suivant
        </button>
      )}
    </div>
  );
};

export default NavBar;

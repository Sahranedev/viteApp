import React from "react";
import PropTypes from "prop-types";
import "../pokemonCard.css";

const PokemonCard = ({ pokemon, handleNext, pokemonList, handlePrev }) => {
  PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    }).isRequired,
  };

  return (
    <div>
      <figure>
        {pokemonList[pokemon].imgSrc ? (
          <img src={pokemonList[pokemon].imgSrc} />
        ) : (
          <p>???</p>
        )}
        <figcaption>{pokemonList[pokemon].name}</figcaption>
      </figure>
      <div className="btn-container">
        {pokemon < pokemonList.length - 1 && (
          <button className="btn" onClick={handleNext}>
            Suivant
          </button>
        )}

        {pokemon > 0 && <button onClick={handlePrev}>Précédent</button>}
      </div>
    </div>
  );
};

export default PokemonCard;

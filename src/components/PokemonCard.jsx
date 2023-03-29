import React from "react";
import PropTypes from "prop-types";

const PokemonCard = ({ pokemon, pokemonList }) => {
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
    </div>
  );
};

export default PokemonCard;

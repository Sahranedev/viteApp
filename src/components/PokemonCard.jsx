import React from "react";
import PropTypes from "prop-types";

const PokemonCard = ({ pokemon }) => {
  PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    }).isRequired,
  };
  return (
    <div>
      <figure>
        {pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>???</p>}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </div>
  );
};

export default PokemonCard;

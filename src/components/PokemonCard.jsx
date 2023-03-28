import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div>
      <figure>
        {pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : "???"}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </div>
  );
};

export default PokemonCard;

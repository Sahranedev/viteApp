import React from "react";

const PokemonCard = () => {
  const pokemonList = [
    {
      name: "bulbasaur",

      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },

    {
      name: "mew",
    },
  ];
  const pokemon = pokemonList[0];
  // changer l'index en pokemonList[1] pour afficher le deuxième élément du tableau
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

import "./App.css";
import PokemonCard from "./components/PokemonCard";
import PropTypes from "prop-types";

function App() {
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
  // changer l'index en pokemonList[1] pour afficher le deuxième élément du tableau et ainsi de suite

  return (
    <div className="App">
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;

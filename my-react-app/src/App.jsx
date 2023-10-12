import { useState } from "react";
import PokemonCard from "./components/PokemonCard"
import NavBar from "./components/NavBar";

const pokemonList = [
  {
    name: "BULBASAUR",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "CHARMANDER",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "SQUIRTLE",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "MEW",
    imgSrc:
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
  },
];

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0)

  return (
    <>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <NavBar 
         pokemonlist={pokemonList}
         indexOf = {pokemonIndex}
         setIndexOf = {setPokemonIndex}
      />
    </>
  );
}

export default App;


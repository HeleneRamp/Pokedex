import { useState } from "react";
import PokemonCard from "./components/PokemonCard"

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0)

  const decrementClick = () => {

    setPokemonIndex(pokemonIndex - 1)

  }
  const incrementClick = () => {

    setPokemonIndex(pokemonIndex + 1)

  }

  return (
    <>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
   
      <button disabled={pokemonIndex <= 0} onClick={decrementClick}>Past</button>
      <button disabled={pokemonIndex > (pokemonList.length - 2)} onClick={incrementClick}>Next</button>
    </>
  );
}

export default App;


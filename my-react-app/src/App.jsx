import { useState } from "react";
import PokemonCard from "./components/PokemonCard"
import NavBar from "./components/NavBar";

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
      <NavBar
        buttonNext={incrementClick}
         buttonPast={decrementClick} 
         indexOf={pokemonIndex} 
         pokemonlist={pokemonList.length - 1}
      />
    </>
  );
}

export default App;


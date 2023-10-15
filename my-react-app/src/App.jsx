import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import "./App.css";

const pokemonList = [
  {
    name: "BULBASAUR",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    type: "plant",
  },
  {
    name: "CHARMANDER",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    type: "fire",
  },
  {
    name: "SQUIRTLE",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    type: "aqua"
  },
  {
    name: "PIKACHU",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    type: "electric",
  },
  {
    name: "MEW",
    imgSrc:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
    type: "psy",
  },
];

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0)

  useEffect(
    () => {
      alert("Helloooo Pokemon trainer 💪")
    },
    []
  );

  return (
    <>
      <PokemonCard
        pokemon={pokemonList[pokemonIndex]}
      />
      <NavBar
        pokemonlist={pokemonList}
        setIndexOf={setPokemonIndex}
      />
    </>
  );
}

export default App;


import PokemonCard from "./components/PokemonCard"

const pokemonList = [
  {
      name: "Bulbasaur",
      imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",  
  },
  {
      name: "Mew",
  },
];

function App() {
  const pokemon = pokemonList[0];
  return (
    <div>
      <PokemonCard pokemon={pokemon}/>
    </div>
  );
}

export default App;


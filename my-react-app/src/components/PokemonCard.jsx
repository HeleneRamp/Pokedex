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

function PokemonCard() {
    const pokemon = pokemonList[0];
    return (
    <>
    {pokemon.imgSrc?(
        <figure>
     <img src= {pokemon.imgSrc} alt="bulbasaur" />
     <figcaption>{pokemon.name}!!!</figcaption>
     </figure>)
    : (<p>???</p>)
    }
    </>
)};
  



export default PokemonCard
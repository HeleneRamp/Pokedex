

function PokemonCard({pokemon}) {
    console.log(pokemon);
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
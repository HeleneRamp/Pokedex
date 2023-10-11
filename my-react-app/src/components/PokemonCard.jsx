import PropTypes from "prop-types";

function PokemonCard({pokemon}) {
   
    return (
    <>
    {
    pokemon.imgSrc?(
        <figure>
     <img src= {pokemon.imgSrc} alt="bulbasaur" />
     <figcaption><h2>{pokemon.name}!!!</h2></figcaption>
     </figure>)
    : (<h2>???</h2>)
    }
    </>
)};

 PokemonCard.propTypes ={
 pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
 }).isRequired,
 }



export default PokemonCard
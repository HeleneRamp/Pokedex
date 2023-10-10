import PropTypes from "prop-types";

function PokemonCard({pokemon}) {
   
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

 PokemonCard.propTypes ={
 pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
 }).isRequired,
 }



export default PokemonCard
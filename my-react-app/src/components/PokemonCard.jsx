import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
console.log("voici",pokemon.imgSrc);
    return (
        <>
            {
                pokemon.imgSrc ? (
                    <figure>
                        <img src={pokemon.imgSrc} />
                        <figcaption><h1>{pokemon.name} !!!</h1></figcaption>
                    </figure>)
                    : (<h1>???</h1>)
            }
        </>
    )
};

 PokemonCard.propTypes ={
 pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
 }).isRequired,
 }



export default PokemonCard
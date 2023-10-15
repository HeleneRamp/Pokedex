import PropTypes from "prop-types";
import "./PokemonCard.css";
function PokemonCard({ pokemon }) {



    return (
        <>
            {
                pokemon.imgSrc ? (
                    <figure className=
                        {(pokemon.type) === `${pokemon.type}` ? `cart ${pokemon.type}` : null}>
                        <img src={pokemon.imgSrc}
                            alt={pokemon.name}
                            className="card-img" />
                        <figcaption>Hi, I'm {pokemon.name} !!! 🤍</figcaption>
                    </figure>)
                    : (<h1>???</h1>)
            }
        </>
    )
};

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        imgSrc: PropTypes.string.isRequired,
    }).isRequired,
}



export default PokemonCard
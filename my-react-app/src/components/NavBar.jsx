import "./NavBar.css";

function NavBar({ pokemonlist, setIndexOf }) {

    const handleClick = (index) => {
        setIndexOf(index);
        (index) === 3 ? alert('⚡pika pikachuuuu⚡') : null;
    }


    return (
        <>
            {pokemonlist.map((pokemon, index) => (
                <button key={pokemon.name}
                    onClick={() => handleClick(index)}
                    className={(pokemon.type) === `${pokemon.type}` ? `btn ${pokemon.type}` : null}
                >
                    {pokemon.name}</button>
            ))}

        </>
    )
}

export default NavBar
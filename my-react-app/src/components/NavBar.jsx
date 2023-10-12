import { Fragment } from "react"



function NavBar({pokemonlist, indexOf, setIndexOf}) {
console.log(indexOf)

const handleClick = (index) => {
    setIndexOf(index)
}


    return (
    <>
    {pokemonlist.map((pokemon, index) =>(
     <button key={pokemon.name} onClick={() => handleClick(index)} >
        {pokemon.name}</button>
    ))}
    </>
    )
}

export default NavBar
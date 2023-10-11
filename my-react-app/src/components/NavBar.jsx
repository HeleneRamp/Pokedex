

function NavBar({buttonNext, buttonPast, indexOf, pokemonlist}) {
   

    return (
    <>
    <h1>coucou</h1>
    <button disabled={indexOf <= 0} onClick={buttonPast}>Past</button>
      <button disabled={indexOf >= pokemonlist} onClick={buttonNext}>Next</button>
      </>
    )
    
}

export default NavBar
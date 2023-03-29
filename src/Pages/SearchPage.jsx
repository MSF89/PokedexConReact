import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import CardPokemon from '../Components/CardPokemon';
import { PokemonContext } from '../Context/PokemonContext'

const SearchPage = () => {
  const location = useLocation();

	const { globalPokemons } = useContext(PokemonContext);

	const filteredPokemons = globalPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()));



  return (
    <div className='container'>
      <p className='p-seacrch'>
        Se encontraron <span>{filteredPokemons.length}</span> {''} resultados
      </p>
      <div className="card-list-pokemon container">
        {filteredPokemons.map(pokemon => <CardPokemon pokemon={pokemon} key={pokemon.id}/>)}
      </div>
    </div>
  )
}

export default SearchPage

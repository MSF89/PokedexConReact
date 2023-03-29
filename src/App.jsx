
import PokemonProvider from './Context/PokemonProvider'
import {AppRouter} from './Routes/AppRouter'

function App() {
  return (
    <PokemonProvider>
      <AppRouter/>
    </PokemonProvider>
  )
  
}

export default App

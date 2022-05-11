import logo from './logo.svg';
import './App.css';
import Pokemons from './components/Pokemons';
import PokemonsWithAxios from './components/PokemonsWithAxios';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Pokemon world!</h1>
      
      {/* <Pokemons></Pokemons> */}
      <PokemonsWithAxios></PokemonsWithAxios>
    </div>
  );
}

export default App;

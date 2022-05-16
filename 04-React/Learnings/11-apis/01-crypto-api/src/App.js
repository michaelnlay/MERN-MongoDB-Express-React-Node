import logo from './logo.svg';
import './App.css';
// import Coins from './components/Coins';
import CoinsWithAxiosAndUseEffect from './components/CoinsWithAxiosAndUseEffect';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Cryptocurrencies! </h1>
      {/* <Coins></Coins> */}
      <CoinsWithAxiosAndUseEffect></CoinsWithAxiosAndUseEffect>
    </div>
  );
}

export default App;

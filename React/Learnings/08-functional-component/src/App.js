import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';

function App() {

  return (
    <div className="App">
      <h1>Happy Learning Function Components</h1>
      <Menu name={"Calamari"} price={8} calories={700}>
        <p>Description: Hungry!</p>
      </Menu>
      <Menu name={"Mac & Cheese"} price={12} calories={1500}>
        <p>Description: Wazzzup!</p>
      </Menu>
      <Menu name={"Poke Bowl"} price={15} calories={1000}>
       <p>Descritpion: Hello!</p> 
      </Menu>
      <Menu name={"Sushi"} price={25} calories={10}>
       <p>Description: Yummy!</p> 
      </Menu>
    </div>
  );
}

export default App;

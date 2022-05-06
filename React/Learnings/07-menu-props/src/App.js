import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu";

//props is a way to send custom data down to a component.
function App() {
  return (
    <div className="App">
      <h1>Welcome to the Dojo Diner</h1>

      <Menu
        name={"Calamari"}
        price={9}
        calories={500}
        description={"Its is yummy"}
      ></Menu>
      <Menu
        name={"Sushi"}
        price={6}
        calories={100}
        description={"Its sushi"}
      ></Menu>
      <Menu
        name={"Chicken Wing"}
        price={10}
        calories={1500}
        description={"I love it"}
      ></Menu>
    </div>
  );
}

export default App;

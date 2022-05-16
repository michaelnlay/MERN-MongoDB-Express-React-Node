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
        calories={500}>
        <p>Description: Its fried squid with basil</p>
        <p><em>Contains Wheat and Seafood</em></p>
      </Menu>
      <Menu
        name={"Sushi"}
        price={6}
        calories={100}>
        <p>Description:sushi is yummy!</p>
        <p><em>This can be anything that work under the this.props.children that list on the Menu.jsx</em></p>
      </Menu>
      <Menu
        name={"Chicken Wing"}
        price={10}
        calories={1500}>
        <p>Description:This can be anything that work under the this.props.children that list on the Menu.jsx</p>
        <p><em>This can be anything that work under the this.props.children that list on the Menu.jsx</em></p>
      </Menu>
    </div>
  );
}

export default App;

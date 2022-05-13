import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter, //this will enable routing for the application, otherwise the routing features will not work
  Switch, //Switch let us determine which components/elements need to show up only at certain routes
  Route, //Route lets us specify the route url address for an element to show up in
  Link,
} from "react-router-dom";

import About from "./components/About";
import Players from "./components/Players";
import Team from "./components/Team";

function App() {
  return (
    //things inside the BrowserRouter will show up any routes
    <BrowserRouter>
      <div className="App">
        <div className="navbar">
          <h1> Rounting Intro</h1>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/players">Players</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
          </ul>
        </div>

        {/* Things inside Switch - only show at specific route */}
        <Switch>
          <Route exact path="/about">
            <h3>About Us Page</h3>
            <About></About>
          </Route>
          <Route exact path="/players">
            <h3>Player Page</h3>
            <Players></Players>
          </Route>
          <Route exact path="/team">
            <h3>Show Teams</h3>
            <Team></Team>
          </Route>
          <Route exact path="/team/:id">
            <h3>Show Teams</h3>
            <Team></Team>
          </Route>
          <Route exact path="/team/:id/:color">
            <h3>Show Teams</h3>
            <Team></Team>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

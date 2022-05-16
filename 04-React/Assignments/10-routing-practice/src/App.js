import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch, 
  Route
} from "react-router-dom";

import Home from './components/Home';
import Number from './components/Number'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home">
          <Home></Home>
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/:id">
          <Number></Number>
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/:id/:color1">
          <Number></Number>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/:id/:color1/:color2">
          <Number></Number>
        </Route>
      </Switch>


    </BrowserRouter>
  );
}

export default App;

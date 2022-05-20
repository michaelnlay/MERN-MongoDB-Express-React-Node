import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AllNinjas from "./components/AllNinjas";
import NewNinjaForm from "./components/NewNinjaForm";
import OneNinja from "./components/OneNinja";
import EditNinjaForm from "./components/EditNinjaForm";

function App() {
  //Step to connect AllNinjas and NewNinjaForm so the useEffect on the AllNinjas can re-render to update the newly add Ninja
  const [newNinjaToggle, setNewNinjaToggle] = useState(false);

  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Wall of Ninjas</h1>
        <Link to ="/new">Add New Ninja</Link>
        <Switch>
          <Route exact path="/">
            {/* <NewNinjaForm
              newNinjaToggle={newNinjaToggle}
              setNewNinjaToggle={setNewNinjaToggle}
            ></NewNinjaForm> */}
            {/* passing props to pass components from parents to child */}
            <AllNinjas newNinjaToggle={newNinjaToggle}></AllNinjas>

          </Route>
          <Route eact path="/new">
            <NewNinjaForm
              newNinjaToggle={newNinjaToggle}
              setNewNinjaToggle={setNewNinjaToggle}
            ></NewNinjaForm>
          </Route>

          {/* Step 9A - route to show one detail */}
          <Route exact path="/ninjas/:_id">
            {/* Step 9B - create a component (OneNinja.js) to render at this route */}
            <OneNinja></OneNinja>
          </Route>

          {/* Step 12A - Route to edit prepopulated one Ninja */}
          <Route exact path="/edit/:_id">
            <EditNinjaForm></EditNinjaForm>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

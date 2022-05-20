import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AllPets from "./components/AllPets";
import NewPetForm from "./components/NewPetForm";
import OnePet from "./components/OnePet";
import EditPetForm from "./components/EditPetForm";

function App() {
  //Step to connect AllPets and NewPetForm so the useEffect on the AllPets can re-render to update the newly add Pet
  const [newPetToggle, setNewPetToggle] = useState(false);

  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Pets Shelter</h1>
        {/* <Link to ="/new">Add New Pet</Link> */}
        <Switch>
          <Route exact path="/">
            {/* <NewPetForm
              newPetToggle={newPetToggle}
              setNewPetToggle={setNewPetToggle}
            ></NewPetForm>
            <hr/> */}
            {/* passing props to pass components from parents to child */}
            <AllPets newPetToggle={newPetToggle}></AllPets>

          </Route> 
          <Route eact path="/new">
            <NewPetForm
              newPetToggle={newPetToggle}
              setNewPetToggle={setNewPetToggle}
            ></NewPetForm>
          </Route>

          {/* Step 9A - route to show one detail */}
          <Route exact path="/pets/:_id">
            {/* Step 9B - create a component (OnePet.js) to render at this route */}
            <OnePet></OnePet>
          </Route>

          {/* Step 12A - Route to edit prepopulated one Pet */}
          <Route exact path="/edit/:_id">
            <EditPetForm></EditPetForm>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;


import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AllAuthors from "./components/AllAuthors";
import NewAuthorForm from "./components/NewAuthorForm";
import OneAuthor from "./components/OneAuthor";
import EditAuthorForm from "./components/EditAuthorForm";

function App() {
  //Step to connect AllAuthors and NewAuthorForm so the useEffect on the AllAuthors can re-render to update the newly add Author
  const [newAuthorToggle, setNewAuthorToggle] = useState(false);

  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Favorite Authors</h1>
        <Link to ="/new">Add New Author</Link>
        <Switch>
          <Route exact path="/">
            {/* <NewAuthorForm
              newAuthorToggle={newAuthorToggle}
              setNewAuthorToggle={setNewAuthorToggle}
            ></NewAuthorForm>
            <hr/> */}
            {/* passing props to pass components from parents to child */}
            <AllAuthors newAuthorToggle={newAuthorToggle}></AllAuthors>

          </Route> 
          <Route eact path="/new">
            <NewAuthorForm
              newAuthorToggle={newAuthorToggle}
              setNewAuthorToggle={setNewAuthorToggle}
            ></NewAuthorForm>
          </Route>

          {/* Step 9A - route to show one detail */}
          <Route exact path="/authors/:_id">
            {/* Step 9B - create a component (OneAuthor.js) to render at this route */}
            <OneAuthor></OneAuthor>
          </Route>

          {/* Step 12A - Route to edit prepopulated one Author */}
          <Route exact path="/edit/:_id">
            <EditAuthorForm></EditAuthorForm>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;


import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import NewProductForm from "./components/NewProductForm";
import OneProduct from "./components/OneProduct";
import EditProductForm from "./components/EditProductForm";

function App() {
  //Step to connect AllProducts and NewProductForm so the useEffect on the AllProducts can re-render to update the newly add Product
  const [newProductToggle, setNewProductToggle] = useState(false);

  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Welcome to the Products Management Tool</h1>
        {/* <Link to ="/new">Add New Product</Link> */}
        <Switch>
          <Route exact path="/">
            <NewProductForm
              newProductToggle={newProductToggle}
              setNewProductToggle={setNewProductToggle}
            ></NewProductForm>
            <hr/>
            {/* passing props to pass components from parents to child */}
            <AllProducts newProductToggle={newProductToggle}></AllProducts>

          </Route> 
          {/* <Route eact path="/new">
            <NewProductForm
              newProductToggle={newProductToggle}
              setNewProductToggle={setNewProductToggle}
            ></NewProductForm>
          </Route> */}

          {/* Step 9A - route to show one detail */}
          <Route exact path="/products/:_id">
            {/* Step 9B - create a component (OneProduct.js) to render at this route */}
            <OneProduct></OneProduct>
          </Route>

          {/* Step 12A - Route to edit prepopulated one Product */}
          <Route exact path="/edit/:_id">
            <EditProductForm></EditProductForm>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

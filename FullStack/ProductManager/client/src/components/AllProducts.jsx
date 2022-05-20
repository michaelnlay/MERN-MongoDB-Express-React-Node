import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


const AllProducts = (props) => {
  //Step 3 - create a state variable to store backend information
  const [allProducts, setAllProducts] = useState([]); //all Products starts as an array

  //toggle
  const [deleteToggle, setDeleteToggle] = useState(false);

  //Step 2A - utilize useEffect for axios to render one time
  useEffect(() => {
    //Step 2 - call request using axios
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        console.log("response:", res);
        //Step 3A
        setAllProducts(res.data.results);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  }, [deleteToggle, props.newProductToggle]); 

  //delete
  const deleteProduct = (id) => {
    console.log("deleting product with this id->", id);
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log("res after deleting", res);
        setDeleteToggle(!deleteToggle);
      })
      .catch((err) => console.log(err));
  };

  //Step 1 - to connect AllProducts with App.js
  return (
    <div>
      <h2>All the products</h2>
      <div className="cards">
        {/* Step 4 - to display information to front end using .map */}
        {allProducts.map((productObj, idx) => {
          return (
            <div
              key={productObj._id}
              className="card mx-auto mb-2"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                {/* Step 9 - show details about one Product, using Link tag */}
                <h5 className="card-title">
                  {" "}
                  <Link to={`/products/${productObj._id}`}>
                    {" "}
                    {productObj.title}
                  </Link>{" "}
                </h5>
          
               
                {/* Step 12 - edit product */}
                <p>
                  <Link to={`/edit/${productObj._id}`} className="btn btn-info">
                    Edit {productObj.title}
                  </Link>
                </p>
                <button
                  onClick={(e) => {
                    deleteProduct(productObj._id);
                  }}
                  className="btn btn-danger"
                >
                  Delete {productObj.title}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
//Step 5 - create a new folder as NewProductForm

export default AllProducts;

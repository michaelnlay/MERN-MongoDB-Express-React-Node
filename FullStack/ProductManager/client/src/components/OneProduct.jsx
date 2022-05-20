import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useHistory } from "react-router-dom";

const OneProduct = () => {
  //Step 9C -useParams to access information from our routes
  const { _id } = useParams();

  //Step 11 - state variable to store the one product information we get back from the api call
  const [productInfo, setProductInfo] = useState({});

  const history = useHistory(); //initilized history so we can redirect

  useEffect(() => {
    //Step 10 - make API call
    axios
      .get(`http://localhost:8000/api/products/${_id}`)
      .then((res) => {
        console.log(res); //now, we got the one detail on the console. Next, create a state variable to store the data to the front end.
        //Step 11A
        setProductInfo(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  //when i click on the button, I want it to make a request to the backend to delete something based on the id

  //delete product
  const deleteProduct = () => {
    axios
      .delete(`http://localhost:8000/api/products/${_id}`)
      .then((res) => {
        console.log("res=>", res);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Details about one Product. ID is {_id}</h3>
      <h3>Title: {productInfo.title}</h3>
      <p>Price:{productInfo.price}</p>
      <p>Description: {productInfo.description}</p>

      <button onClick={deleteProduct} className="btn btn-danger">
        Delete {productInfo.title}
      </button>
    </div>
  );
};

export default OneProduct;

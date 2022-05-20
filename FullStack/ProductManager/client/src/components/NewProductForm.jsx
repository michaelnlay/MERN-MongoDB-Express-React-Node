import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const NewProductForm = (props) => {
  //Step 6A - Create state variables to store form information
  let [title, setTitle] = useState("");
  let [price, setPrice] = useState("");
  let [description, setDescription] = useState("");


  //Step 8A - state variable to store validation errors inside of
  let [errors, setErrors] = useState({});

  const history = useHistory(); //initilized history so we can redirect

  //Step 7 - submithandler
  const addProduct = (e) => {
    e.preventDefault();

    //Step 7A - package up the state variables into an object
    let formInfo = { title, price, description };

    //Step 7B - make an API call to our backend
    axios
      .post("http://localhost:8000/api/products", formInfo) //passing formInfo along with it
      .then((res) => {
        console.log("response after posting form", res);

        //Step 8 - Validation errors on create form
        //if statement means if there are errors and there are validation errors we need to save, the nsave those validation errors into state
        if (res.data.error) {
          setErrors(res.data.error.errors);
        } else {
          //else means there are no errors, and product was successfuly created, then we can clear out the form
          //Step 7C - clear value after form submit (need to pass the value to the form)
          setTitle("");
          setPrice("");
          setDescription("");
   

          props.setNewProductToggle(!props.newProductToggle)

          history.push("/"); //redirect after submitting the form and successfully creating a product
        }
        
      })
      .catch((err) => console.log("error after posting the form", err));
  };

  return (
      <div>
          <h3>Create Product</h3>
      <form onSubmit={addProduct}>
        <div className="form-group">
          <label htmlFor="">Title:</label>
          {/* Step 6B - When update form info, the state varibles to also update the values inside the form is by using OnChange */}
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            value={title}
          />
          {/* <p className="text-danger">{errors.title? errors.title.message:null}</p> */}
          <p className="text-danger">{errors.title?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor="">Price ($):</label>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            className="form-control"
            value={price} // value ={price} <=to clear the form value
          />
          {/* <p className="text-danger">{errors.price.message}</p> */}
          <p className="text-danger">{errors.price?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor="">Description:</label>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            value={description}
          />
          {/* <p className="text-danger">{errors.description.message}</p> */}
          <p className="text-danger">{errors.description?.message}</p>
        </div>
        
        <input
          type="submit"
          value="Add Product"
          className="btn btn-success mt-2"
        />
      </form>
    </div>
  );
};

export default NewProductForm;

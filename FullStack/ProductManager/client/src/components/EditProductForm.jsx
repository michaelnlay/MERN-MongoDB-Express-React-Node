import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";


const EditProductForm = () => {
  //Step 13 - create state variable to store the data from the response
  const [productInfo, setProductInfo] = useState({});

  //Step 12B - make the EditProductFomr to be pre-populated in the front end, using useParams
  const { _id } = useParams();

  //Step 15 - redirect after the form update, using useHistory
  const history = useHistory(); //initilized history so we can redirect

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${_id}`)
      .then((res) => {
        console.log("res-->", res);
        setProductInfo(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  //Step 13B - create onChange handler to change the prepopulated info
  const changeHandler = (e) => {
   
      setProductInfo({
        ...productInfo, //to show all the productInfo
        [e.target.name]: e.target.value, //reason with the [] if there is a key and a dot.
      });
    
  };

  //Step 14 - create submit handler to submit updated info
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/products/${_id}`, productInfo)
      .then((res) => {
        console.log(res);
        history.push("/"); //Step 15A - redirect after updating form
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {/* Step 12A - copy/paste form from NewProductForm */}
      <form onSubmit={submitHandler}>
        <h3>Edit Product: {_id}</h3>
        <div className="form-group">
          <label htmlFor="">Title:</label>

          <input
            type="text"
            name="title"
            onChange={changeHandler}
            className="form-control"
            value={productInfo.title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Price ($):</label>
          {/* Step 13A - Now we can prepopulated by passing state varible to value
          ;however, you will need onChange to modify the prepopulated value */}
          <input
            type="number"
            name="price"
            onChange={changeHandler}
            className="form-control"
            value={productInfo.price}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Description:</label>
          <input
            type="text"
            name="description"
            className="form-control"
            onChange={changeHandler}
            value={productInfo.description}
          />
        </div>
      
        <input
          type="submit"
          value="Update Product"
          className="btn btn-success mt-2"
        />
      </form>
    </div>
  );
};

export default EditProductForm;

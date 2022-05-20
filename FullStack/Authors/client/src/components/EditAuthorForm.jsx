import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const EditAuthorForm = () => {
  //Step 13 - create state variable to store the data from the response
  const [authorInfo, setAuthorInfo] = useState({});

  //Step 12B - make the EditAuthorFomr to be pre-populated in the front end, using useParams
  const { _id } = useParams();

  //Step 15 - redirect after the form update, using useHistory
  const history = useHistory(); //initilized history so we can redirect

  //state variable to store validation errors inside of
  let [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors/${_id}`)
      .then((res) => {
        console.log("res-->", res);
        setAuthorInfo(res.data.results);
        
      })
      .catch((err) => console.log(err));
  }, []);

  //Step 13B - create onChange handler to change the prepopulated info
  const changeHandler = (e) => {
    setAuthorInfo({
      ...authorInfo, //to show all the authorInfo
      [e.target.name]: e.target.value, //reason with the [] if there is a key and a dot.
    });
  };

  //Step 14 - create submit handler to submit updated info
  const submitHandler = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/authors/${_id}`, authorInfo)
    .then((res) => {
      console.log("testing this response",res);

      if (res.data.error) {
        setErrors(res.data.error.errors)
      } else {
        setAuthorInfo("")

        history.push("/"); //Step 15A - redirect after updating form
      }
     
      
      
      })

      .catch((err) => {
        console.log("testing the error", err);


      } );
   }
  
     
        
    


  return (
    <div>
      {/* Step 12A - copy/paste form from NewAuthorForm */}
      <form onSubmit={submitHandler}>
        <h5>Edit this author</h5>
        <div className="form-group">
          <label htmlFor="">Name:</label>
          <input
            type="text"
            name="author"
            onChange={changeHandler}
            className="form-control"
            value={authorInfo.author}
          />
        </div>
        <p className="text-danger">{errors.author?.message}</p>

        <input
          type="submit"
          value="Update Author"
          className="btn btn-success m-2"
        />
        <Link to={"/"} className="btn btn-info m-2">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default EditAuthorForm;

import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const NewAuthorForm = (props) => {
  //Step 6A - Create state variables to store form information
  let [author, setAuthor] = useState("");

  //Step 8A - state variable to store validation errors inside of
  let [errors, setErrors] = useState({});

  const history = useHistory(); //initilized history so we can redirect

  //Step 7 - submithandler
  const addAuthor = (e) => {
    e.preventDefault();

    //Step 7A - package up the state variables into an object
    let formInfo = { author };

    //Step 7B - make an API call to our backend
    axios
      .post("http://localhost:8000/api/authors", formInfo) //passing formInfo along with it
      .then((res) => {
        console.log("response after posting form", res);

        //Step 8 - Validation errors on create form
        //if statement means if there are errors and there are validation errors we need to save, the nsave those validation errors into state
        if (res.data.error) {
          setErrors(res.data.error.errors);
        } else {
          //else means there are no errors, and author was successfuly created, then we can clear out the form
          //Step 7C - clear value after form submit (need to pass the value to the form)
          setAuthor("");
          
   

          props.setNewAuthorToggle(!props.newAuthorToggle)

          history.push("/"); //redirect after submitting the form and successfully creating a author
        }
        
      })
      .catch((err) => console.log("error after posting the form", err));
  };

  return (
      <div>
          <h3>Create Author</h3>
      <form onSubmit={addAuthor}>
        <div className="form-group">
          <label htmlFor="">Author Name:</label>
          {/* Step 6B - When update form info, the state varibles to also update the values inside the form is by using OnChange */}
          <input
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            className="form-control"
            value={author}
          />
          {/* <p className="text-danger">{errors.author? errors.author.message:null}</p> */}
          <p className="text-danger">{errors.author?.message}</p>
        </div>
        
        
        <input
          type="submit"
          value="Add Author"
          className="btn btn-success mt-2"
        />
      </form>
    </div>
  );
};

export default NewAuthorForm;

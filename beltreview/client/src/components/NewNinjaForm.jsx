import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const NewNinjaForm = (props) => {
  //Step 6A - Create state variables to store form information
  let [name, setName] = useState("");
  let [numProjects, setNumProjects] = useState("");
  let [gradDate, setGradDate] = useState("");
  let [isVeteran, setIsVeteran] = useState(false);

  //Step 8A - state variable to store validation errors inside of
  let [errors, setErrors] = useState({});

  const history = useHistory(); //initilized history so we can redirect

  //Step 7 - submithandler
  const addNinja = (e) => {
    e.preventDefault();

    //Step 7A - package up the state variables into an object
    let formInfo = { name, numProjects, gradDate, isVeteran };

    //Step 7B - make an API call to our backend
    axios
      .post("http://localhost:8000/api/ninjas", formInfo) //passing formInfo along with it
      .then((res) => {
        console.log("response after posting form", res);

        //Step 8 - Validation errors on create form
        //if statement means if there are errors and there are validation errors we need to save, the nsave those validation errors into state
        if (res.data.error) {
          setErrors(res.data.error.errors);
        } else {
          //else means there are no errors, and ninja was successfuly created, then we can clear out the form
          //Step 7C - clear value after form submit (need to pass the value to the form)
          setName("");
          setNumProjects("");
          setGradDate("");
          setIsVeteran(false);

          props.setNewNinjaToggle(!props.newNinjaToggle)

          history.push("/"); //redirect after submitting the form and successfully creating a ninja
        }
        
      })
      .catch((err) => console.log("error after posting the form", err));
  };

  return (
      <div>
          <h3>Create Ninja</h3>
      <form onSubmit={addNinja}>
        <div className="form-group">
          <label htmlFor="">Name:</label>
          {/* Step 6B - When update form info, the state varibles to also update the values inside the form is by using OnChange */}
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            value={name}
          />
          {/* <p className="text-danger">{errors.name? errors.name.message:null}</p> */}
          <p className="text-danger">{errors.name?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor="">Number of Projects:</label>
          <input
            type="number"
            onChange={(e) => setNumProjects(e.target.value)}
            className="form-control"
            value={numProjects} // value ={numProjects} <=to clear the form value
          />
          {/* <p className="text-danger">{errors.numProjects.message}</p> */}
          <p className="text-danger">{errors.numProjects?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor="">Graduation Date:</label>
          <input
            type="date"
            onChange={(e) => setGradDate(e.target.value)}
            className="form-control"
            value={gradDate}
          />
          {/* <p className="text-danger">{errors.gradDate.message}</p> */}
          <p className="text-danger">{errors.gradDate?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor="">Check if Veteran: </label>
          <input
            type="checkbox"
            onChange={(e) => setIsVeteran(e.target.checked)}
            className="form-check-input"
            value={isVeteran}
          />
        </div>
        <input
          type="submit"
          value="Add Ninja"
          className="btn btn-success mt-2"
        />
      </form>
    </div>
  );
};

export default NewNinjaForm;

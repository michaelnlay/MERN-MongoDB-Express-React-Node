import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const NewPetForm = (props) => {
  //Step 6A - Create state variables to store form information
  let [petName, setPetName] = useState("");
  let [petType, setPetType] = useState("");
  let [description, setDescription] = useState("");
  let [skill1, setSkill1] = useState("");
  let [skill2, setSkill2] = useState("");
  let [skill3, setSkill3] = useState("");




  //Step 8A - state variable to store validation errors inside of
  let [errors, setErrors] = useState({});

  const history = useHistory(); //initilized history so we can redirect

  //Step 7 - submithandler
  const addPet = (e) => {
    e.preventDefault();

    //Step 7A - package up the state variables into an object
    let formInfo = { petName, petType, description, skill1, skill2, skill3 };

    //Step 7B - make an API call to our backend
    axios
      .post("http://localhost:8000/api/pets", formInfo) //passing formInfo along with it
      .then((res) => {
        console.log("response after posting form", res);

        //Step 8 - Validation errors on create form
        //if statement means if there are errors and there are validation errors we need to save, the nsave those validation errors into state
        if (res.data.error) {
          setErrors(res.data.error.errors);
        } else {
          //else means there are no errors, and pet was successfuly created, then we can clear out the form
          //Step 7C - clear value after form submit (need to pass the value to the form)
          setPetName("");
          setPetType("");
          setDescription("");
          setSkill1("");
          setSkill2("");
          setSkill3("");



   

          props.setNewPetToggle(!props.newPetToggle)

          history.push("/"); //redirect after submitting the form and successfully creating a pet
        }
        
      })
      .catch((err) => console.log("error after posting the form", err));
  };

  return (
    <> 
    <Link to ="/">back to home</Link>
    <div>
        <h3>Know a pet needing a home?</h3>
        
      <form onSubmit={addPet}>
        <div className="form-group">
          <label htmlFor="">Pet Name:</label>
          {/* Step 6B - When update form info, the state varibles to also update the values inside the form is by using OnChange */}
          <input
            type="text"
            onChange={(e) => setPetName(e.target.value)}
            className="form-control"
            value={petName}
          />
          {/* <p className="text-danger">{errors.petName? errors.petName.message:null}</p> */}
          <p className="text-danger">{errors.petName?.message}</p>
        </div>
        <div className="form-group">
          <label htmlFor="">Pet Type:</label>
          <input
            type="text"
            onChange={(e) => setPetType(e.target.value)}
            className="form-control"
            value={petType} // value ={petType} <=to clear the form value
          />
          {/* <p className="text-danger">{errors.petType.message}</p> */}
          <p className="text-danger">{errors.petType?.message}</p>
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
          <h4>Skills (optional):</h4>
        <div className="form-group">
            <label htmlFor="">Skill 1:</label>
            <input
            type="text"
            onChange={(e) => setSkill1(e.target.value)}
            className="form-control"
            value={skill1}
            />
          
          
          {/* <p className="text-danger">{errors.description.message}</p> */}
            <p className="text-danger">{errors.skill1?.message}</p>
            
          </div>
          <div className="form-group">
            <label htmlFor="">Skill 2:</label>
            <input
            type="text"
            onChange={(e) => setSkill2(e.target.value)}
            className="form-control"
            value={skill2}
            />
          
          
          {/* <p className="text-danger">{errors.description.message}</p> */}
            <p className="text-danger">{errors.skill2?.message}</p>
            
          </div>
          <div className="form-group">
            <label htmlFor="">Skill 3:</label>
            <input
            type="text"
            onChange={(e) => setSkill3(e.target.value)}
            className="form-control"
            value={skill3}
            />
          
          
          {/* <p className="text-danger">{errors.description.message}</p> */}
            <p className="text-danger">{errors.skill3?.message}</p>
            
        </div>
        
        <input
          type="submit"
          value="Add Pet"
          className="btn btn-success mt-2"
        />
      </form>
      </div>
      </> 
  );
};

export default NewPetForm;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

const EditPetForm = () => {
  //Step 13 - create state variable to store the data from the response
  const [petInfo, setPetInfo] = useState({});

  //Step 12B - make the EditPetFomr to be pre-populated in the front end, using useParams
  const { _id } = useParams();

  //Step 15 - redirect after the form update, using useHistory
  const history = useHistory(); //initilized history so we can redirect

  //state variable to store validation errors inside of
  let [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/pets/${_id}`)
      .then((res) => {
        console.log("res-->", res);
        setPetInfo(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  //Step 13B - create onChange handler to change the prepopulated info
  const changeHandler = (e) => {
    setPetInfo({
      ...petInfo, //to show all the petInfo
      [e.target.name]: e.target.value, //reason with the [] if there is a key and a dot.
    });
  };

  //Step 14 - create submit handler to submit updated info
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/pets/${_id}`, petInfo)
      .then((res) => {
        console.log(res);

        if (res.data.error) {
          setErrors(res.data.error.errors);
        } else {
          setPetInfo("");

          history.push("/"); //Step 15A - redirect after updating form
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {/* Step 12A - copy/paste form from NewPetForm */}
      <form onSubmit={submitHandler}>
        <h3>Edit {petInfo.petName}</h3>
        <div className="form-group">
          <label htmlFor="">Pet Name:</label>

          <input
            type="text"
            name="petName"
            onChange={changeHandler}
            className="form-control"
            value={petInfo.petName}
          />
        </div>
        <p className="text-danger">{errors.petName?.message}</p>
        <div className="form-group">
          <label htmlFor="">Pet Type:</label>
          {/* Step 13A - Now we can prepopulated by passing state varible to value
          ;however, you will need onChange to modify the prepopulated value */}
          <input
            type="text"
            name="petType"
            onChange={changeHandler}
            className="form-control"
            value={petInfo.petType}
          />
        </div>
        <p className="text-danger">{errors.petType?.message}</p>
        <div className="form-group">
          <label htmlFor="">Description:</label>
          <input
            type="text"
            name="description"
            className="form-control"
            onChange={changeHandler}
            value={petInfo.description}
          />
        </div>
        <p className="text-danger">{errors.description?.message}</p>
        <h4>Skills (optional) </h4>
        <div className="form-group">
          <label htmlFor="">Skill 1:</label>
          <input
            type="text"
            name="skill1"
            className="form-control"
            onChange={changeHandler}
            value={petInfo.skill1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Skill 2:</label>
          <input
            type="text"
            name="skill2"
            className="form-control"
            onChange={changeHandler}
            value={petInfo.skill2}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Skill 3:</label>
          <input
            type="text"
            name="skill3"
            className="form-control"
            onChange={changeHandler}
            value={petInfo.skill3}
          />
        </div>

        <input
          type="submit"
          value="Edit Pet"
          className="btn btn-success mt-2"
        />
      </form>
    </div>
  );
};

export default EditPetForm;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";


const EditNinjaForm = () => {
  //Step 13 - create state variable to store the data from the response
  const [ninjaInfo, setNinjaInfo] = useState({});

  //Step 12B - make the EditNinjaFomr to be pre-populated in the front end, using useParams
  const { _id } = useParams();

  //Step 15 - redirect after the form update, using useHistory
  const history = useHistory(); //initilized history so we can redirect

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/ninjas/${_id}`)
      .then((res) => {
        console.log("res-->", res);
        setNinjaInfo(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  //Step 13B - create onChange handler to change the prepopulated info
  const changeHandler = (e) => {
    if (e.target.type === "checkbox") {
      setNinjaInfo({
        ...ninjaInfo,
        [e.target.name]: e.target.checked,
      });
    } else {
      setNinjaInfo({
        ...ninjaInfo, //to show all the ninjaInfo
        [e.target.name]: e.target.value, //reason with the [] if there is a key and a dot.
      });
    }
  };

  //Step 14 - create submit handler to submit updated info
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/ninjas/${_id}`, ninjaInfo)
      .then((res) => {
        console.log(res);
        history.push("/"); //Step 15A - redirect after updating form
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {/* Step 12A - copy/paste form from NewNinjaForm */}
      <form onSubmit={submitHandler}>
        <h3>Edit Ninja: {_id}</h3>
        <div className="form-group">
          <label htmlFor="">Name:</label>

          <input
            type="text"
            name="name"
            onChange={changeHandler}
            className="form-control"
            value={ninjaInfo.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Number of Projects:</label>
          {/* Step 13A - Now we can prepopulated by passing state varible to value
          ;however, you will need onChange to modify the prepopulated value */}
          <input
            type="number"
            name="numProjects"
            onChange={changeHandler}
            className="form-control"
            value={ninjaInfo.numProjects}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Graduation Date:</label>
          <input
            type="date"
            name="gradDate"
            className="form-control"
            onChange={changeHandler}
            value={moment.utc(ninjaInfo.gradDate?.toLocaleString()).format("YYYY-MM-DD")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Check if Veteran: </label>
          <input
            type="checkbox"
            name="isVeteran"
            onChange={changeHandler}
            className="form-check-input"
            checked={ninjaInfo.isVeteran}
          />
        </div>
        <input
          type="submit"
          value="Update Ninja"
          className="btn btn-success mt-2"
        />
      </form>
    </div>
  );
};

export default EditNinjaForm;

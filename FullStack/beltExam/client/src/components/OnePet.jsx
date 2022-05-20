import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const OnePet = () => {
  //Step 9C -useParams to access information from our routes
  const { _id } = useParams();

  //Step 11 - state variable to store the one pet information we get back from the api call
  const [petInfo, setPetInfo] = useState({});

  const history = useHistory(); //initilized history so we can redirect

  useEffect(() => {
    //Step 10 - make API call
    axios
      .get(`http://localhost:8000/api/pets/${_id}`)
      .then((res) => {
        console.log(res); //now, we got the one detail on the console. Next, create a state variable to store the data to the front end.
        //Step 11A
        setPetInfo(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  //when i click on the button, I want it to make a request to the backend to delete something based on the id

  //delete pet
  const deletePet = () => {
    axios
      .delete(`http://localhost:8000/api/pets/${_id}`)
      .then((res) => {
        console.log("res=>", res);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Link to="/">back to home
      </Link>
      <div className="container d-flex">
        <h3>Details about: {petInfo.petName}</h3>
        <button onClick={deletePet} className="btn btn-danger ml-2">
          Adopted {petInfo.petName}
        </button>
      </div>

      <p>Pet Type:{petInfo.petType}</p>
      <p>Description: {petInfo.description}</p>
      <div>
        <h4>Skills</h4>
        <p> {petInfo.skill1}</p>
        <p>{petInfo.skill2}</p>
        <p>{petInfo.skill3}</p>

      </div>
    </>
  );
};

export default OnePet;

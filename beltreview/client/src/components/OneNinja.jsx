import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useHistory } from "react-router-dom";

const OneNinja = () => {
  //Step 9C -useParams to access information from our routes
  const { _id } = useParams();

  //Step 11 - state variable to store the one ninja information we get back from the api call
  const [ninjaInfo, setNinjaInfo] = useState({});

  const history = useHistory(); //initilized history so we can redirect

  useEffect(() => {
    //Step 10 - make API call
    axios
      .get(`http://localhost:8000/api/ninjas/${_id}`)
      .then((res) => {
        console.log(res); //now, we got the one detail on the console. Next, create a state variable to store the data to the front end.
        //Step 11A
        setNinjaInfo(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  //when i click on the button, I want it to make a request to the backend to delete something based on the id

  //delete ninja
  const deleteNinja = () => {
    axios
      .delete(`http://localhost:8000/api/ninjas/${_id}`)
      .then((res) => {
          console.log("res=>", res);
          history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Details about one Ninja. ID is {_id}</h3>
      <h3>Name: {ninjaInfo.name}</h3>
      <p>Number of projects:{ninjaInfo.numProjects}</p>
      <p>Graduation Date: {ninjaInfo.gradDate}</p>
      <p>Veteran Status: {ninjaInfo.isVeteran ? "Veteran" : "Non-Veteran"}</p>
      <button onClick={deleteNinja} className="btn btn-danger">
        Delete {ninjaInfo.name}
      </button>
    </div>
  );
};

export default OneNinja;

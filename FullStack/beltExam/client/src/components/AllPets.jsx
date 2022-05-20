import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const AllPets = (props) => {
  //Step 3 - create a state variable to store backend information
  const [allPets, setAllPets] = useState([]); //all Pets starts as an array

  //toggle
  const [deleteToggle, setDeleteToggle] = useState(false);

  //For sorting=============================================================
  //create toggle for sorting

  //=========================================================================

  //Step 2A - utilize useEffect for axios to render one time
  useEffect(() => {
    //Step 2 - call request using axios
    axios
      .get("http://localhost:8000/api/pets")
      .then((res) => {
        console.log("response:", res);
        //Step 3A
        setAllPets(res.data.results);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  }, [deleteToggle, props.newPetToggle]);

  //delete
  const deletePet = (id) => {
    console.log("deleting pet with this id->", id);
    axios
      .delete(`http://localhost:8000/api/pets/${id}`)
      .then((res) => {
        console.log("res after deleting", res);
        setDeleteToggle(!deleteToggle);
      })
      .catch((err) => console.log(err));
  };

  //Step 1 - to connect AllPets with App.js
  return (
    <div>
      <h3>These pets are looking for a good home!</h3>
      <Link to="/new">Add a pet to the shelter</Link>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Pet Name</th>
            <th scope="col">Pet Type</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allPets.map((petObj, idx) => (
            <tr>
              <td>{petObj.petName}</td>
              <td>{petObj.petType}</td>
              <td>
                <Link
                  to={`/pets/${petObj._id}`}
                  className="btn btn-primary m-1"
                >
                  Details
                </Link>
                <Link to={`/edit/${petObj._id}`} className="btn btn-info m-1">
                  Edit
                </Link>
                {/* <button
                  onClick={(e) => {
                    deletePet(petObj._id);
                  }}
                  className="btn btn-danger"
                >
                  Delete
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllPets;

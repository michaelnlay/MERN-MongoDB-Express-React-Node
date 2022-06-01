import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import moment from "moment";

const AllNinjas = (props) => {
  //Step 3 - create a state variable to store backend information
  const [allNinjas, setAllNinjas] = useState([]); //all Ninjas starts as an array

  //toggle
  const [deleteToggle, setDeleteToggle] = useState(false);

  //Step 2A - utilize useEffect for axios to render one time
  useEffect(() => {
    //Step 2 - call request using axios
    axios
      .get("http://localhost:8000/api/ninjas")
      .then((res) => {
        console.log("response:", res);
        //Step 3A
        setAllNinjas(res.data.results);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  }, [deleteToggle, props.newNinjaToggle]);

  //delete
  const deleteNinja = (id) => {
    console.log("deleting ninja with this id->", id);
    axios
      .delete(`http://localhost:8000/api/ninjas/${id}`)
      .then((res) => {
        console.log("res after deleting", res);
        setDeleteToggle(!deleteToggle);
      })
      .catch((err) => console.log(err));
  };

  //Step 1 - to connect AllNinjas with App.js
  return (
    <div>
      <h2>All the ninjas</h2>
      <div className="cards">
        {/* Step 4 - to display information to front end using .map */}
        {allNinjas.map((ninjaObj, idx) => {
          return (
            <div
              key={ninjaObj._id}
              className="card mx-auto mb-2"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                {/* Step 9 - show details about one Ninja, using Link tag */}
                <h5 className="card-title">
                  {" "}
                  <Link to={`/ninjas/${ninjaObj._id}`}>
                    {" "}
                    {ninjaObj.name}
                  </Link>{" "}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Nuber of Projects: {ninjaObj.numProjects}
                </h6>
                <p className="card-text">
                  Graduation Date:{" "}
                  {moment
                    .utc(ninjaObj.gradDate.toLocaleString())
                    .format("MMM Do, YYYY")}
                </p>
                <p className="card-text">
                  Veteran Status:{" "}
                  {ninjaObj.isVeteran ? "Veteran" : "Non-Veteran"}
                </p>
                {/* Step 12 - edit ninja */}
                <p>
                  <Link to={`/edit/${ninjaObj._id}`} className="btn btn-info">
                    Edit {ninjaObj.name}
                  </Link>
                </p>
                <button
                  onClick={(e) => {
                    deleteNinja(ninjaObj._id);
                  }}
                  className="btn btn-danger"
                >
                  Delete {ninjaObj.name}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
//Step 5 - create a new folder as NewNinjaForm

export default AllNinjas;

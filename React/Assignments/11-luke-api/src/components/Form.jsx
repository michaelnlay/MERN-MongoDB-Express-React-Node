import React, { useState } from "react";
import { useHistory } from "react-router-dom";


const Form = () => {
  //Step 2 - create state variables to store data ***open console to find those variable
  let [category, setCat] = useState("");
    let [id, setId] = useState("");

    //Step 4- create useHistory();
    const history = useHistory(); //history is used to redirect
    
    //Step 3 - create a submithandler function
    //create an event listenner called onSubmit inside the form
    
    const search = (e) => {
        e.preventDefault(); //prevent form from reloading the whoe page

        //Step 4A- redirect using history.push(routeGoesHere) -->Step 5 is to create result.jsx and setup Switch, Route...
        history.push(`/${category}/${id}`) //the `` to have a string variable is called templat literals (template strings)
    }

  return (
    <div>
      {/* Step 1- Create form per assignment */}
      <form className="d-flex justify-content-around align-item-center" onSubmit={search}>
        <div className="form-group orange b-text">
          <label htmlFor="">Search For:</label>
          <select
            className="form-select mt-2"
            onChange={(e) => {
              setCat(e.target.value);
            }} defaultValue={"default"}
          >
            {/* use onChange with Arrow function, pass in e (as event) to update the category. It is only work if you have value for your object */}
            <option value="default" disabled>
              Please select a category
            </option>

            <option value="people">People</option>
            <option value="films">Films</option>
            <option value="planets">Planets</option>
            <option value="species">Species</option>
            <option value="starships">Starships</option>
            <option value="vehicles">Vehicles</option>
          </select>
        </div>
        <div className="form-group orange b-text">
          <label htmlFor="">ID</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          {/* for input type ="number", we don't need to specify the value, since it will show as we type the number */}
        </div>
        <input
          className="btn btn-success orange b-text"
          type="submit"
          value="Search"
        />
      </form>
    </div>
  );
};

export default Form;

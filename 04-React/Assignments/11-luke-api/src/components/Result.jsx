import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import People from "./People";

const Result = () => {
  //Step 6 - create the useParams so user can see which category and id were selected **need import -->Step 7 fetch API using Axios (need to import and install)
  let { category, id } = useParams(); //the curly braces that variables that was given to this components via this routes ->/:category/:id <-these are variables so they are parameters but variable inside of a route are called route parameters and in order for this component to use its route parameters we have to use useParams() to use the parameter. We have to indicate those parameters inside of curly braces here category and id

  //Step 8 - create state variables to store those API data
  let [detail, setDetail] = useState({});

  //Step 10 - state variable for errors
  let [error, setError] = useState(false);

  //Step 9 - useEffect to preent page from re-renders and create infinite loop
  useEffect(() => {
    //Step 7 - make an axios call to the starwars api using axios -->step 8 - state variable
    axios
      .get(`https://swapi.dev/api/${category}/${id}/`)
      // axios.get("https://swapi.dev/api/people/1/") //this /people/1 only give you that api
      .then((response) => {
        setError(false);
        console.log("response-->", response.data);
        //Step 8A - to use the setDetail -->Step 9 - create a useEffect to prevent page from re-renders...that is what happen to the components.When component re-renders, what happens to the code in the component? It re-runs. When the code reruns, it also reruns the axios call.Inside the axios call is the updated state variable
        //This will create infinite loop

        setDetail(response.data); //to save to state variable
      })
      .catch((err) => {
        console.log("errrr", err);
        setError(true);
      });
  }, [id, category]); //<-id whenever the id when, we want to make a new call.
  //useEffect is taken callback function. It takes objects and empty array. Must have empty (dependecy) array for useEffect to work
  console.log("err", error);
  return (
    <div className="text-white">
      <h2>
        Your Search Result: Category:{" "}
        <span className="text-info">{category}</span> and ID:{" "}
        <span className="text-info">{id}</span>{" "}
      </h2>
      {error === true ? (
        <div>
          <h1>Test</h1>
          <img
            src="https://cdn.vox-cdn.com/thumbor/SRwHbaTMxPr4f8EJdfai_UR2y34=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/6434955/obi-wan.0.jpg"
            width="500px"
            alt=""
          />
          <h6 className="text-danger">ID needs to be greater than 0!</h6>
        </div>
      ) : category === "people" ? (
        <People detail={detail}></People>
      ) : category === "planets" ? (
        <div>
          <h3>
            Name: <span className="text-info">{detail.name}</span>
          </h3>
          <p>
            Climate: <span className="text-info">{detail.climate}</span>
          </p>
          <p>
            Terrain: <span className="text-info">{detail.terrain}</span>
          </p>
          <p>
            Population: <span className="text-info">{detail.population}</span>
          </p>
        </div>
      ) : category === "species" ? (
        <div>
          <h3>
            Name: <span className="text-info">{detail.name}</span>
          </h3>
          <p>
            Language: <span className="text-info">{detail.language}</span>
          </p>
          <p>
            Skin Colors: <span className="text-info">{detail.skin_colors}</span>
          </p>
          <p>
            Classification:{" "}
            <span className="text-info">{detail.classification}</span>
          </p>
        </div>
      ) : (
        <div>
          {/* <img
            src="https://www.liveabout.com/thmb/jY_UZdQrTXce4XZwdC3hd8Il00M=/640x630/filters:no_upscale():max_bytes(150000):strip_icc()/office-space-star-wars-58b8c8f53df78c353c20a063.jpg"
            width="100px"
            alt=""
          >
            {" "}
          </img> */}
          <h6 className="text-danger">
            Sorry! Working progress! Only People, Planets and Species categories
            are working!
          </h6>
        </div>
      )}
    </div>
  );
};

export default Result;

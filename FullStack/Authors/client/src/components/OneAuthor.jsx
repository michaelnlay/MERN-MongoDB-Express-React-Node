import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useHistory } from "react-router-dom";

const OneAuthor = () => {
  //Step 9C -useParams to access information from our routes
  const { _id } = useParams();

  //Step 11 - state variable to store the one author information we get back from the api call
  const [authorInfo, setAuthorInfo] = useState({});

  const history = useHistory(); //initilized history so we can redirect

  useEffect(() => {
    //Step 10 - make API call
    axios
      .get(`http://localhost:8000/api/authors/${_id}`)
      .then((res) => {
        console.log(res); //now, we got the one detail on the console. Next, create a state variable to store the data to the front end.
        //Step 11A
        setAuthorInfo(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  //when i click on the button, I want it to make a request to the backend to delete something based on the id

  //delete author
  const deleteAuthor = () => {
    axios
      .delete(`http://localhost:8000/api/authors/${_id}`)
      .then((res) => {
        console.log("res=>", res);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      
      <h3>Author Name: {authorInfo.author}</h3>
     

      <button onClick={deleteAuthor} className="btn btn-danger">
        Delete {authorInfo.title}
      </button>
    </div>
  );
};

export default OneAuthor;

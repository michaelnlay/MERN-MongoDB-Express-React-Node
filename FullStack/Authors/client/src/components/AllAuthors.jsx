import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const AllAuthors = (props) => {
  //Step 3 - create a state variable to store backend information
  const [allAuthors, setAllAuthors] = useState([]); //all Authors starts as an array

  //toggle
  const [deleteToggle, setDeleteToggle] = useState(false);

  //Step 2A - utilize useEffect for axios to render one time
  useEffect(() => {
    //Step 2 - call request using axios
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => {
        console.log("response:", res);
        //Step 3A
        setAllAuthors(res.data.results);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  }, [deleteToggle, props.newAuthorToggle]);

  //delete
  const deleteAuthor = (id) => {
    console.log("deleting author with this id->", id);
    axios
      .delete(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        console.log("res after deleting", res);
        setDeleteToggle(!deleteToggle);
      })
      .catch((err) => console.log(err));
  };

  //Step 1 - to connect AllAuthors with App.js
  return (
    <div>
      <h5>We have quotes by:</h5>

      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Actions available</th>
          </tr>
        </thead>
        <tbody>
          {allAuthors.map((authorObj, idx) => (
            <tr>
              <td>{authorObj.author}</td>
              <td>
                <Link
                  to={`/edit/${authorObj._id}`}
                  className="btn btn-info m-1"
                >
                  Edit
                </Link>
                <button
                  onClick={(e) => {
                    deleteAuthor(authorObj._id);
                  }}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllAuthors;

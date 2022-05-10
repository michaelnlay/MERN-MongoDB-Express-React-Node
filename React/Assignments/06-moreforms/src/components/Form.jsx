import React, { useState } from "react";

const Form = () => {
  let [firstName, setFname] = useState("");
  let [lastName, setLname] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [Confpassword, setConfPassword] = useState("");

  //function to valid emial using Regex???

  return (
    <>
      <form className="text-primary">
        <div className="form-group">
          <label htmlFor="">First Name:</label>
          <input
            type="text"
            onChange={(e) => setFname(e.target.value)}
            name=""
            id=""
            className="form-control"
          ></input>
          {firstName.length < 2 ? (
            <p className="text-danger">
              First Name cannot less than two characters!
            </p>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="">Last Name:</label>
          <input
            type="text"
            onChange={(e) => setLname(e.target.value)}
            name=""
            id=""
            className="form-control"
          ></input>
          {lastName.length < 2 ? (
            <p className="text-danger">
              Last Name cannot less than two characters!
            </p>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="">Email:</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            name=""
            id=""
            className="form-control"
          ></input>
          {email.length < 5 ? (
            <p className="text-danger">Email cannot less than 5 characters!</p>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="">Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            name=""
            id=""
            className="form-control"
          ></input>
          {password.length < 5 ? (
            <p className="text-danger">
              Password cannot be less than 5 characters!
            </p>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="">Confirm Password:</label>
          <input
            type="password"
            onChange={(e) => setConfPassword(e.target.value)}
            name=""
            id=""
            className="form-control"
          ></input>
          {password != Confpassword ? (
            <p className="text-danger">Password does not match!</p>
          ) : null}
        </div>
      </form>
      <hr></hr>
      <h3 className="text-info">Your Form Data:</h3>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Confirm Password: {Confpassword}</p>
    </>
  );
};
export default Form;

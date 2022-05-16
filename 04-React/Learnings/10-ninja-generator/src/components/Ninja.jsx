import React, { useState } from "react";

const NinjaForm = () => {

  //=======================================================
  //STEP 1 - create state variables 
  //==================================================
  //create a state variable for each input from the form that we want to collect
  let [name, setName] = useState("");
  let [proPicUrl, setProPickUrl] = useState("");
  let [color, setColor] = useState("");
  //for callback parameters lecture
  let [specAttention, setSpecAttention] = useState(false);

  //I want the state variable to update their value (setters like setName) whenever the inputs are changed

  //create state variable which is an array so that we can store ll the pets that get submitted into it
  let [petList, setPetList] = useState([]); //<-to set this as an array
  let list = []; //can't really use this regular list, NEED STATE LIST

  //create a submit handler below
  const submitPet = (e) => {
    //the default behavior of a form when it is submitted, is to reload the page. we can prevent this from happening by usig preventDefault();
    e.preventDefault(); //must be the first line of code after the submit handler
    // console.log("submitted!")

     //=================================================================================
    //STEP 2 - create a pet object (python dictionary) also called a hashmap
    //whenever the form is submitted, it creats a pet object for us
    //==================================================================================
    let pet = { name, proPicUrl, color, specAttention };
    console.log("pet looks like this-->", pet);

    //to push to list []
    // list.push(pet); //CAN'T USE THIS ->NEED A STATE LIST BELOW

    //use the setPetList setter to update the petList array to have the pet object inside of it
    setPetList([...petList, pet]); //use SPREAD... to include all petList then add new pet to the list
    //can also do this
    // setPetList(petList=>[...petList, pet])

    //clear out the state variables so that we can use this to empty the form inputs
    setName("");
    setProPickUrl("");
    setColor("");
  };

  //function to toggle if the pet needs special attention on from false <-> true and vice versa
  const toggleAttention = (e, i) => {
    console.log("toggling pet at index number", i)
    //we will modify the petList arry at specific index -> i so that the pet at that index has their "eedsspecialatteniion" property change to true/false

    //1. make a opy of petList
    let [...copyList] = petList; //use copy is for a best practice to modify the list
    //2. change the pet at the specific index number property for special attention to true/false
    copyList[i].specAttention = e.target.checked; //will turn true when check or false when uncheck`(prefer method)
    // copyList[i].specAttention =!copyList[i].specAttention //can also do this 
    //3. udpate our state variable for petList with modified copy
    setPetList(copyList);

  }
   //delete pet
  const deletePet = (e, i) => {
    console.log("deleting pet at index", i)
    //i represents the index number of the pet we want to delete
    let filteredCopy = petList.filter((pet, idx) => {
      //inside the filter function, idx repressents the index number of each pet
      return idx !== i //return back only the pets whose index number does not match the index number of the pet we want to delete
    })
    //3. udpate our state variable for petList with modified copy
    setPetList(filteredCopy);
  }

  return (
    <>
      <form className="box" onSubmit={submitPet}>
        <div className="form-group">
          <label htmlFor="">Name:</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            className="form-control"
            value={name}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="">Picture URL:</label>
          <input
            onChange={(e) => {
              setProPickUrl(e.target.value);
            }}
            type="text"
            className="form-control"
            value={proPicUrl}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="">Belt Color:</label>
          <input
            onChange={(e) => {
              setColor(e.target.value);
            }}
            type="text"
            className="form-control"
            value={color}
          ></input>
        </div>
        <input type="submit" value="Add Ninja" className="btn btn-info mt-2 box" />
      </form>
      <hr size="10" color="white"/>

      {/* iterate through an array of pets 
            in Python, we use:
            {% for pet in petList %}
            <p>{{pet.name}}
            {% endfor %}*/}

      <div className="pet-list">
        {/* Warning error: each child in a list should have a unique "key" prop
        here is to fix have key={i}, in the future it will be DB id# */}
        {petList.map((petObj, i) => {
          return (
            <div
              key={i}
              className="pet-card"
              style={{ backgroundColor: petObj.color, color: "white", fontSize:20}}
            >
              <h3 style={{ textDecoration: petObj.specAttention ? "underline" : "none" }}>Name: {petObj.name}</h3>
              <p> Spec. attention needed?<input type="checkbox" name="" id="" onChange={(e)=>toggleAttention(e,i)}></input></p>
              <button onClick={(e)=>{deletePet(e,i)} } className="btn btn-danger">Delete</button>
              <p>Belt color: {petObj.color}</p>
              <img
                src={petObj.proPicUrl}
                alt=""
                width="220px"
                height="230px"
              ></img>
              
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NinjaForm;

import React, { useState } from "react";

const TodoList = () => {
  //Step 1 - Create state variables===========================
  let [taskName, setTaskName] = useState("");
  //will need a callback parameter that strike thro text when checkmark, start out with false
  let [isCompleted, setIsCompleted] = useState(false);

  //Step 4 - create state variable to store all texts========

  let [taskList, setTaskList] = useState([]);

  //Step 2 - Create a submit handler
  //to store all input text, we need to create state variable which is an array that get submitted
  const submitList = (e) => {
    e.preventDefault();
    //this step after we have setWord and setCheckbox inside the form

    //Step 3 - Create a todo list object ============================
    let taskObj = { taskName, isCompleted };

    // setWordList(wordList=>[...wordList, message]);
    setTaskList([...taskList, taskObj]);
    // console.log(wordList);

    //clear out the state variable so that we can use this to empty the form
    setTaskName("");
  };

  //function to toggle if task is completed from false <-> true and vice versa
  const toggleToDo = (e, idx) => {
    console.log("toggling task at index numbmer", idx);

    //1, make a copy of taskList
    let [...copyList] = taskList;
    //2, change taksk at specific index number prperty for completion to true/false
    copyList[idx].isCompleted = e.target.checked; //will true true when check or false when uncheck

    //3. update the state variable for taskList with modified copy
    setTaskList(copyList);
  };

  //delete task
    const deleteWord = (e, idx) => {
        let filteredCopy = taskList.filter((task, i) => {
            return i !== idx;
        })
        //3. update our state variable for taskList with modified copy
        setTaskList(filteredCopy);
  };

  return (
    <>
      <p>Please add a todo list!</p>
      <form onSubmit={submitList}>
        <input
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
          type="text"
          value={taskName}
          className="form-control"
        ></input>
        <input type="submit" value="Add" className="btn btn-primary mt-2" />
      </form>
      <hr></hr>

      <div>
        {taskList.map((task, idx) => {
          return (
            <div key={idx}>
              <p
                style={{
                  textDecoration: task.isCompleted ? "line-through" : "none",
                }}
              >
                {task.taskName}{" "}
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onChange={(e) => toggleToDo(e, idx)}
                />{" "}
                Completed?
                <button
                  onClick={(e) => {
                    deleteWord(e, idx);
                  }}
                  className="btn btn-danger m-3"
                >
                  Delete
                </button>
              </p>
            </div>
          );
        })}
      </div>

      {/* <p>This will be text from what user input <input className="m-2" type="checkbox"></input> <button className="btn btn-danger m-2">Delete</button></p> */}
    </>
  );
};

export default TodoList;

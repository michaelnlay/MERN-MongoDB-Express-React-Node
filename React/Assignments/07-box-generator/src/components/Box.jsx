import React, { useState } from "react";

const Box = () => {
    //CREATE a State Variable for input color form that we want to collect
    let [color, setColor] = useState("");
    

    // Create state variable which is an array so we can store all the color boxes 
    let [boxList, setBoxList] = useState([]);
    // let list = [];

    //create a submit handler below
    const submitBox = (e) => {
        //to prevent page from reload the page is to used preventDefault()
        e.preventDefault();
        // console.log("submitted!!!")
    

        //create a box object, also hashmap
        //whenever the form is submitted, it creats a box object for us
        let box = { color };
        // console.log("this is the color of the box", box);

        //use Spread operator to include all boxList then add new box to the list
        setBoxList([...boxList, box]);

        setColor("");
    };

    return (
        <>
            <p>Please input a color</p>
            {/* =========STEP 1 - CREATE A FORM - Color Generator */}
            
      
            <form onSubmit={submitBox}>
                <label htmlFor="">Color: </label>
                <input onChange={(e)=>setColor(e.target.value)} type="text" className="form-control" value={color}></input>
                <input type="submit" value="Input Color" className="btn btn-success mt-2"></input>
            </form>
            <hr />
            
            <div className="box-list">
                {boxList.map((boxObj, i) => {
                    return (
                        <div className="boxSize"
                            style={{ backgroundColor: boxObj.color }}
                        >

                        </div>
                    )
                })}
            </div>



        </>
            )
           
}

export default Box;
import React, {useState} from "react";

const Form = () => {

    //create a STATE variable for each input that will store the information insdie each input

    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    let [type, setType] = useState("dog");
    let [date, setDate] = useState("");
    let [imageUrl, setImgUrl] = useState("");
    let [specialReq, setSpecialReq] = useState("");
      //use STATE when you want a variable that can change its value and the change in its value needs to be reflected in the screen/window
    // let [firstword, secondword] = useState();
    //firstword is the NAME OF STATE VARIABLE
    //secondword is the NAME OF THE FUNCTION that can modify the STATE variable 
    //inside the () is your STARTING VALUE



    return (
        <>
            <h3>Schedule an appointment below</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" onChange={(e)=>setName(e.target.value)} name="" id="" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">Age:</label>
                    <input type="text" onChange={(e)=>setAge(e.target.value)} name="" id="" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">Type:</label>
                    <select onClick={(e)=>setType(e.target.value)} className="form-select" name="pet name" id="">
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Bird">Bird</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">Appointment Date:</label>
                    <input type="date" onChange={(e)=>setDate(e.target.value)} name="" id="" className="form-control"></input>
                </div>

                <div className="form-group">
                <label htmlFor="">Pet Image Url:</label>
                <input type="text" onChange={(e)=>setImgUrl(e.target.value)} name="" id="" className="form-control"></input>

                </div>
                <div className="form-group">
                    <label htmlFor="">Special Requests:</label>
                    <textarea type="" onChange={(e)=>setSpecialReq(e.target.value)} name="" id="" cols="30" rows="10" className="form-control"></textarea>
                </div>
                <input className="btn btn-success mt-2" type="submit" value="Submit"></input>
            </form>
            <hr></hr>
            <h3>Your Pets Info:</h3>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Type: {type}</p>
            <p>Date: {date}</p>
            <p>Image: <img src={imageUrl} alt="" width="250px"/></p>
            <p>Special Request: {specialReq}</p>

            
        
        </>

    )
}

export default Form;
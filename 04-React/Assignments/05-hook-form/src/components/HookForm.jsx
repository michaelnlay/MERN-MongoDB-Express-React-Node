import React, {useState} from "react"

const HookForm = () => {

    let [firstName, setFname] = useState("");
    let [lastName, setLname] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [Confpassword, setConfPassword] = useState("");


    return (
        <>
        <form>
                <div className="form-group">
                    <label htmlFor="">First Name:</label>
                    <input type="text" onChange={(e)=>setFname(e.target.value)} name="" id="" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name:</label>
                    <input type="text" onChange={(e)=>setLname(e.target.value)} name="" id="" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">Email:</label>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} name="" id="" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">Email:</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} name="" id="" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="">Email:</label>
                    <input type="password" onChange={(e)=>setConfPassword(e.target.value)} name="" id="" className="form-control"></input>
                </div>


               
         
            </form>
            <hr></hr>
            <h3>Your Form Data:</h3>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {Confpassword}</p>
           
        </>



    )



}
export default HookForm;
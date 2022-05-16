import React, {useState} from "react";

const Menu = (props) => { //don't have to call props, can be p
    // let { name, price, calories, children } = props;
    const { name, calories, children } = props;

    // console.log(props);
    //you can do javascript not inside the return

    //use STATE when you want a variable that can change its value and the change in its value needs to be reflected in the screen/window
    // let [firstword, secondword] = useState();
    //firstword is the NAME OF STATE VARIABLE
    //secondword is the NAME OF THE FUNCTION that can modify the STATE variable 
    //inside the () is your STARTING VALUE

    const [price, setPrice] = useState(props.price);
    const increasePrice = () => {

        // let newPrice = (price * 1.1).toFixed(1); testing using .Fixed to round decimal 

        setPrice(price+1); //treat setPrice as a function to pass in price+1
        
        
    }

    return (
        <>
            {/* here you can only do html */}
         <div>
                <h4>Item Name:{name}</h4> 
                <p>Price: {price}</p>
                <p>Calories:{calories}</p>
                {children}
                <button onClick={increasePrice}>Increase Price for {name}</button>
                
                {/* <button onClick={increasePrice}>Inflation for {name}</button> */}
            </div>
            <hr/>
        </>


    )

}

export default Menu;
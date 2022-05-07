import React from "react";

const Menu = (props) => { //don't have to call props, can be p
    const { name, price, calories, children } = props;
    // console.log(props);
    //you can do javascript not inside the return


    return (
        <>
            {/* here you can only do html */}
         <div>
                <h4>Item Name:{name}</h4> 
                <p>Price: {price}</p>
                <p>Calories:{calories}</p>
                {children}
                
                {/* <button onClick={increasePrice}>Inflation for {name}</button> */}
            </div>
            <hr/>
        </>


    )

}

export default Menu;
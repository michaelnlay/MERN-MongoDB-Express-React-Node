import React, { Component } from 'react';

class Menu extends Component{
    //first-to add state variable, need constructor
    constructor(props) {
        super(props);
        this.state = {
            price: this.props.price
        };
    }


    //render here is like a method 
    render() {
        //<> this call jsx fragment so that you can use to surround one parent <hr/> outside the <div>
        let { name, calories, children } = this.props;

        //step 3 - to make all work, need to create Arrow funciton, not regular function
        const increasePrice = () => {
            this.setState({ price: this.state.price + 1 })
            // console.log(this.state.price);
            //can't do this below
            //this.state.price++
        }

        return (
            <> 
            <div>
                    <h4>Item Name:{name}</h4> 
                    {/* step 2 - change to this.state.price */}
                <p>Price: ${this.state.price}</p>
                <p>Calories: {calories}</p>
                <p>{children}</p>
                    {/* //children is from children lecture. */}
                    
                    {/* one way */}
                <button onClick={increasePrice}>Inflation for {name}</button>
              
                    {/* another way without having physical funciton */}
                    {/* <button onClick={()=>this.setState({price:this.state.price+1})}>Inflation for {name}</button> */}


                {/* <h4>Item Name: {this.props.name}</h4>
                <p>Price: ${this.props.price}</p>
                <p>Calories: {this.props.calories}</p>
                {this.props.children} */}
                </div>
                <hr/>
                </>
        )
    }

}

export default Menu;
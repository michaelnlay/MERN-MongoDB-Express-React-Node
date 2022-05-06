import React, { Component } from 'react';

class Menu extends Component{
    render() {
        return (
            <div>
                <h4>Item Name: {this.props.name}</h4>
                <p>Price: ${this.props.price}</p>
                <p>Calories: {this.props.calories}</p>
                <p>Description: {this.props.description}</p>
            </div>
        )
    }

}

export default Menu;
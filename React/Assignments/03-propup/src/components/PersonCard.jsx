import React, { Component } from 'react';

class PersonCard extends Component{
    render() {
        return (
            <div>
                <h3>{this.props.firstName}, {this.props.lastName}</h3>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.hColor}</p>
            </div>
        )
    }


}
export default PersonCard;
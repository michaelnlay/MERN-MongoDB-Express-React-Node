import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    render() {
        let { firstName, lastName, age, hColor } = this.props;

        const increaseAge=() => {
            this.setState({age: this.state.age+1})
        }

        return (
            <div>
                <h3>{firstName}, {lastName}</h3>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hColor}</p>
                <button onClick={increaseAge}>Birthday Button for {lastName + " " + firstName}</button>
                <hr></hr>
            </div>
        )
    }


}
export default PersonCard;
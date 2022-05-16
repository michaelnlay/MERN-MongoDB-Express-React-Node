import React from "react";

const PersonCard = (props) => {
    const {firstName, lastName, age, hColor } = props;
    
    return (
        <div>
            <h2>{firstName}, {lastName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: Blak</p>

        <hr/>
        </div>

    )
    
}

export default PersonCard;
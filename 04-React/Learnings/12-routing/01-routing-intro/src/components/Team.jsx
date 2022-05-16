import React from "react";
import { useParams } from "react-router";

const Team = () => {
    
    const { id, color } = useParams();
    console.log("id and color are -->", id, color)
    //if the id is a number, show "team # is", if the id is not a number, show "team name is":

    return (
        <>
            <h3>Teams components. Goat below</h3>
            <ol>
                <li>Lakers</li>
                <li>WIzards</li>
            </ol>
            <hr />
            <div style={{ backgroundColor: color }}>
            {   
                id == undefined ?
                    <p>Please enter your favorite team</p>:

                isNaN(id) ?
                    id =="celtics"? <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/1200px-Boston_Celtics.svg.png" width ="200px"alt=""/>:
                    <h4>Displaying information about team name is: {id}</h4> :
                    <h4>Displaying information about team # is: {id}</h4>
            }
            </div>
        </>
    )
}

export default Team;
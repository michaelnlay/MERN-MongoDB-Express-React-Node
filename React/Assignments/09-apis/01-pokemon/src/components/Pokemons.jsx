import React,{useState} from "react";

const Pokemons = () => {
    //create state variable to store all the pokemons in that we get back
    let [pokemonList, setPokemonList] = useState([]);

 //create a function after clicking on button
    const getPokemons = () => {
        console.log("getting pokemon now..");

//fetch data from API endpoint
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0")
            .then((response) => { //this line means whenver the api is done getting back the data
                return response.json(); //convert the response to json that application can read
            })
            .then((response) => {//this line is what we call callback function
                console.log(("the response is....") + response)
                //setPokemonList to be the response
                setPokemonList(response.results)
            })
            .catch((err) => {//.catch is for if there is any issue when getting the data
                console.log(err);
    
            });
 }   
  return (
    <>
          <button onClick={getPokemons}>Click me for Pokemon</button>
            {
          pokemonList.map((pokemon, idx)=>{
              return (
                <div key={idx}>
                    <h3>{pokemon.name}</h3>
                </div>
              )
          })
          }
    </>
  );
};

export default Pokemons;

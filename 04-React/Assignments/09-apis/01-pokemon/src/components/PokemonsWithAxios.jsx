import React, { useState } from "react";
import axios from "axios";

const PokemonsWithAxios = () => {
  //create state variable to store all the pokemons in that we get back
  let [pokemonList, setPokemonList] = useState([]);

  //create a function after clicking on button
  const getPokemons = () => {
    console.log("getting pokemon now..");

    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0")
      .then((response) => {
        //this line is what we call callback function
        console.log("the response is....", response);
        //setPokemonList to be the response
        setPokemonList(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <button onClick={getPokemons}>Click me for Pokemon</button>
      {pokemonList.map((pokemon, idx) => {
        return (
          <div key={idx}>
            <h3>{pokemon.name}</h3>
          </div>
        );
      })}
    </>
  );
};

export default PokemonsWithAxios;

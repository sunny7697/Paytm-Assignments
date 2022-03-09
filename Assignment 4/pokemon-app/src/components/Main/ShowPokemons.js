import { useDispatch, useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";
import "./Main.css";
import { useEffect, useState } from "react";

const ShowPokemons = () => {
  //   const [pokemons, setPokemons] = useState([]);
  //   //   console.log(pokemons);
  const pokemons = useSelector((state) => state.pokemons.pokemons);
  //   setPokemons(data);
  //   console.log(pokemons);
  //   //   useEffect(() => {
  //   //     setPokemons(data);
  //   //   }, []);
  const pokemonElement = pokemons.map((pokemon, i) => (
    <PokemonCard pokemon={pokemon} key={i} />
  ));
  return <div className="pokemon-container">{pokemonElement}</div>;
};

export default ShowPokemons;

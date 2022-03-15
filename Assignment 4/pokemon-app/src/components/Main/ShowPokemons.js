import { useDispatch, useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";
import "./Main.css";
import { useEffect, useState } from "react";

const ShowPokemons = () => {
  const pokemons = useSelector((state) => state.pokemons.pokemons);
  const searchType = useSelector((state) => state.searchType);

  const pokemonElement = pokemons.map((pokemon, i) => (
    <PokemonCard pokemon={pokemon} key={i} searchType={searchType} />
  ));
  return <div className="pokemons-container">{pokemonElement}</div>;
};

export default ShowPokemons;

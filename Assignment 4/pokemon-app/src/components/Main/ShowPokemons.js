import { useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";
import "./Main.css";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";

const ShowPokemons = () => {
  const pokemons = useSelector((state) => state.pokemons.pokemons);
  const searchType = useSelector((state) => state.searchType);
  const numOfPages = Math.ceil(pokemons.length / 20);
  const [pageActive, setPageActive] = useState(1);

  const startIndex = (pageActive - 1) * 20;
  const showPokemons = pokemons.slice(startIndex, startIndex + 20);

  const pokemonElement = showPokemons.map((pokemon, i) => (
    <PokemonCard pokemon={pokemon} key={i} searchType={searchType} />
  ));

  const activePageHandler = (val) => {
    setPageActive(parseInt(val));
  };

  useEffect(() => {
    setPageActive(1);
  }, [pokemons]);

  return (
    <div className="">
      <div className="pokemons-container">{pokemonElement}</div>
      <Pagination
        numOfPages={numOfPages}
        activePageHandler={activePageHandler}
        pageActive={pageActive}
      />
    </div>
  );
};

export default ShowPokemons;

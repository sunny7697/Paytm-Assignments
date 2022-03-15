import React from "react";
import ShowPokemons from "../Main/ShowPokemons";
import SearchBar from "../SearchBar/SearchBar";

const Home = () => {
  return (
    <div>
      <SearchBar />
      <ShowPokemons />
    </div>
  );
};

export default Home;

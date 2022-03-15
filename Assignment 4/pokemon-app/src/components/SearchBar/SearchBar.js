import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  removePokemons,
  setPokemons,
} from "../../redux/actions.js/pokemonActions";
import Form from "./Form/Form";
import { setSearchType } from "../../redux/actions.js/searchTypeActions";
import { fetchData } from "../../functions/api";

const SearchBar = () => {
  const [searchedPokemons, setSearchedPokemons] = useState([]);
  const searchType = useSelector((state) => state.searchType);

  const dispatch = useDispatch();

  const handleSearchType = (e) => {
    dispatch(removePokemons());
    dispatch(setSearchType(e.target.name));
  };

  const handleInputChange = async (e) => {
    const { value } = e.target;
    const data = await fetchData(value, searchType);
    setSearchedPokemons(data);
  };

  const handleClick = () => {
    dispatch(removePokemons());
    dispatch(setPokemons(searchedPokemons));
  };

  return (
    <Form
      searchType={searchType}
      handleClick={handleClick}
      handleInputChange={handleInputChange}
      handleSearchType={handleSearchType}
      searchedPokemons={searchedPokemons}
    />
  );
};

export default SearchBar;

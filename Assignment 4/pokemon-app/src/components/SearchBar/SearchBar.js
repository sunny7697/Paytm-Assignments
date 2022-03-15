import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  removePokemons,
  setPokemons,
} from "../../redux/actions.js/pokemonActions";
import Form from "./Form/Form";
import { setSearchType } from "../../redux/actions.js/searchTypeActions";
import { fetchData } from "../../functions/api";
import { debounce } from "lodash";

const SearchBar = () => {
  const [searchedPokemons, setSearchedPokemons] = useState([]);
  const [searchText, setSearchText] = useState("");
  const searchType = useSelector((state) => state.searchType);

  const dispatch = useDispatch();

  const handleSearchType = (e) => {
    dispatch(removePokemons());
    dispatch(setSearchType(e.target.name));
  };

  const handleInputChange = debounce((e) => {
    const { value } = e.target;
    setSearchText(value);
  }, 400);

  const handleClick = () => {
    dispatch(removePokemons());
    dispatch(setPokemons(searchedPokemons));
  };

  useEffect(async () => {
    if (searchText.length != 0) {
      const data = await fetchData(searchText, searchType);
      setSearchedPokemons(data);
    }
  }, [searchText]);

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

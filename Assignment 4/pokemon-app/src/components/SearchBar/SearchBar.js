import React, { useEffect, useRef, useState } from "react";
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
  const inputEl = useRef(null);
  const searchType = useSelector((state) => state.searchType);

  const dispatch = useDispatch();

  const handleSearchType = (e) => {
    dispatch(removePokemons());
    dispatch(setSearchType(e.target.name));
  };

  const handleInputChange = debounce((e) => {
    const { value } = e.target;
    setSearchText(() => value);
  }, 400);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(removePokemons());
    dispatch(setPokemons(searchedPokemons));
  };
  const setInputFromSuggestions = (e) => {
    inputEl.current.value = typeof e === "string" ? e : e.target.textContent;
    setSearchText(() => inputEl.current.value);
  };

  useEffect(() => {
    const fetchDataFn = async () => {
      try {
        if (searchText.length !== 0) {
          const data = await fetchData(searchText, searchType);
          setSearchedPokemons(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataFn();
  }, [searchText, searchType]);

  return (
    <Form
      searchType={searchType}
      searchText={searchText}
      handleClick={handleClick}
      setInputFromSuggestions={setInputFromSuggestions}
      handleInputChange={handleInputChange}
      handleSearchType={handleSearchType}
      searchedPokemons={searchedPokemons}
      inputEl={inputEl}
    />
  );
};

export default SearchBar;

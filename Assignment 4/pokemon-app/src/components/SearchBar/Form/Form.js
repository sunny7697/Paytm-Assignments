import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../functions/api";
import { setPokemons } from "../../../redux/actions.js/pokemonActions";
import { setSearchType } from "../../../redux/actions.js/searchTypeActions";
import "./Form.css";

const Form = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedPokemons, setSearchedPokemons] = useState([]);
  const [showAuto, setShowAuto] = useState(false);
  const dispatch = useDispatch();
  const searchType = useSelector((state) => state.searchType);

  const handleSearchType = (e) => {
    dispatch(setSearchType(e.target.name));
  };

  const handleInputChange = async (e) => {
    const { value } = e.target;
    setSearchText(() => value);
    const data = await fetchData(value, searchType);
    setSearchedPokemons(data);
  };
  // console.log(searchedPokemons);

  const handleClick = async () => {
    dispatch(setPokemons(searchedPokemons));
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="input-type">
          <label htmlFor="name">Name</label>
          <input
            type="checkbox"
            name="0"
            id="name"
            className="checkbox"
            checked={searchType === "0"}
            onChange={handleSearchType}
          />
          <label htmlFor="email">Type</label>
          <input
            type="checkbox"
            name="1"
            id="type"
            className="checkbox"
            checked={searchType === "1"}
            onChange={handleSearchType}
          />
          <label htmlFor="id">Generations</label>
          <input
            type="checkbox"
            name="2"
            id="generations"
            className="checkbox"
            checked={searchType === "2"}
            onChange={handleSearchType}
          />
        </div>
        <div className="search-bar">
          <div className="input-container">
            {searchType === "0" ? (
              <input
                type="text"
                className="search-input"
                onChange={handleInputChange}
                onBlur={() => {
                  // setTimeout function so that first auto-suggestion text get copied in input box then auto-suggestions box disappear
                  setTimeout(() => {
                    setShowAuto(false);
                  }, 250);
                }}
                onFocus={() => setShowAuto(true)}
              />
            ) : searchType === "1" ? (
              <select
                className="minimal"
                onChange={handleInputChange}
                defaultValue={"0"}
              >
                <option value="0" disabled="disabled">
                  Select Type of pokemons
                </option>
                <option value="1">Normal</option>
                <option value="2">Fighting</option>
                <option value="3">Flying</option>
                <option value="4">Poison</option>
                <option value="5">Ground</option>
                <option value="6">Rock</option>
                <option value="7">Bug</option>
                <option value="8">Ghost</option>
                <option value="9">Steel</option>
                <option value="10">Fire</option>
                <option value="11">Water</option>
                <option value="12">Grass</option>
                <option value="13">Electric</option>
                <option value="14">Psychic</option>
                <option value="15">Ice</option>
                <option value="16">Dragon</option>
                <option value="17">Dark</option>
                <option value="18">Fairy</option>
                <option value="19">Unknown</option>
                <option value="20">Shadow</option>
              </select>
            ) : (
              <select
                className="minimal"
                onChange={handleInputChange}
                defaultValue={"0"}
              >
                <option value="0" disabled="disabled">
                  Select generations of pokemons
                </option>
                <option value="1">First</option>
                <option value="2">Second</option>
                <option value="3">Third</option>
                <option value="4">Fourth</option>
                <option value="5">Fifth</option>
                <option value="6">Sixth</option>
                <option value="7">Seventh</option>
                <option value="8">Eighth</option>
              </select>
            )}
            <button type="submit" className="btn" onClick={handleClick}>
              Search
            </button>
          </div>
          {showAuto && searchedPokemons?.length > 0 && (
            <div className="autocomplete">
              {searchedPokemons.map((el, i) => (
                <div
                  className="autocomplete-items"
                  key={i}
                  // onClick={setInputFromSuggestions}
                >
                  <span>{el.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;

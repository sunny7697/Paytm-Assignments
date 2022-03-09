import React, { useState } from "react";
import { fetchData } from "../../../functions/api";
import "./Form.css";

const Form = () => {
  const [searchType, setSearchType] = useState("0");
  const [searchText, setSearchText] = useState("");

  const handleSearchType = (e) => {
    setSearchType(e.target.name);
  };

  const handleInputChange = async (e) => {
    const { value } = e.target;
    setSearchText(value);
    const data = await fetchData(searchText, searchType);
    console.log(data);
  };

  const handleClick = async () => {
    // const pokemons = await fetchData(searchType);
    // console.log(pokemons);
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
              />
            ) : searchType === "1" ? (
              <select className="minimal" onChange={handleInputChange}>
                <option value="normal">Normal</option>
                <option value="fighting">Fighting</option>
                <option value="flying">Flying</option>
                <option value="poison">Poison</option>
                <option value="ground">Ground</option>
                <option value="rock">Rock</option>
                <option value="bug">Bug</option>
                <option value="ghost">Ghost</option>
                <option value="steel">Steel</option>
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                <option value="grass">Grass</option>
                <option value="electric">Electric</option>
                <option value="psychic">Psychic</option>
                <option value="ice">Ice</option>
                <option value="dragon">Dragon</option>
                <option value="dark">Dark</option>
                <option value="fairy">Fairy</option>
                <option value="unknown">Unknown</option>
                <option value="shadow">Shadow</option>
              </select>
            ) : (
              <select className="minimal" onChange={handleInputChange}>
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
        </div>
      </div>
    </div>
  );
};

export default Form;

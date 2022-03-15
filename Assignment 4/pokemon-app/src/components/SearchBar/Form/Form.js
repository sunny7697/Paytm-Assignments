import React, { useEffect, useState } from "react";
import "./Form.css";
import { TypeSelect } from "./TypeSelect";

const Form = ({
  searchType,
  handleClick,
  handleInputChange,
  handleSearchType,
  searchedPokemons,
}) => {
  const [showAuto, setShowAuto] = useState(false);

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
              <TypeSelect handleInputChange={handleInputChange} />
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

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removePokemons } from "../../../redux/actions.js/pokemonActions";
import "./Form.css";
import { GenerationSelect } from "./GenerationSelect";
import { TypeSelect } from "./TypeSelect";

const Form = ({
  searchType,
  searchText,
  handleClick,
  handleInputChange,
  handleSearchType,
  searchedPokemons,
  setInputFromSuggestions,
  inputEl,
}) => {
  const [showAuto, setShowAuto] = useState(false);
  const dispatch = useDispatch();
  const [cursor, setCursor] = useState(-1);

  const keyboardNavigation = (e) => {
    if (e.key === "ArrowDown") {
      showAuto
        ? setCursor((c) => (c < searchedPokemons.length - 1 ? c + 1 : c))
        : setShowAuto(true);
    }
    if (e.key === "ArrowUp") {
      setCursor((c) => (c > 0 ? c - 1 : 0));
    }
    if (e.key === "Escape") {
      inputEl.current.blur();
      setCursor(-1);
      setShowAuto(false);
    }
    if (e.key === "Enter" && cursor >= 0) {
      setInputFromSuggestions(searchedPokemons[cursor].name);
      setShowAuto(false);
      setTimeout(() => dispatch(removePokemons()), 0);
      // setTimeout(() => inputEl.current.blur(), 0);
      setCursor(-1);
    }
  };

  useEffect(() => {
    if (searchText === "") {
      setCursor(-1);
    }
  }, [searchText]);

  return (
    <div className="container">
      <form className="form-container">
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
                ref={inputEl}
                onChange={handleInputChange}
                onBlur={() => {
                  // setTimeout function so that first auto-suggestion text get copied in input box then auto-suggestions box disappear
                  setTimeout(() => {
                    setShowAuto(false);
                    // setCursor(-1);
                  }, 250);
                }}
                onFocus={() => setShowAuto(true)}
                onKeyDown={keyboardNavigation}
              />
            ) : searchType === "1" ? (
              <TypeSelect handleInputChange={handleInputChange} />
            ) : (
              <GenerationSelect handleInputChange={handleInputChange} />
            )}
            <button type="submit" className="btn" onClick={handleClick}>
              Search
            </button>
          </div>
          {showAuto && searchText && searchedPokemons?.length > 0 && (
            <div className="autocomplete">
              {searchedPokemons.map((el, i) => (
                <div
                  className={`autocomplete-items ${
                    cursor === i ? "highlight" : ""
                  }`}
                  key={i}
                  onClick={setInputFromSuggestions}
                >
                  <span>{el.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;

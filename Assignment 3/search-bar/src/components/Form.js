import React, { useState } from "react";

const Form = ({
  debouncedHandleInput,
  searchedData,
  handleInputType,
  inputType,
  activeInputType,
  setInputFromSuggestions,
  inputEl,
  searchButtonHandle,
}) => {
  // Auto-Suggestions box state
  const [showAuto, setShowAuto] = useState(true);
  // console.log(inputText);
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
            checked={inputType[0]}
            onChange={handleInputType}
          />
          <label htmlFor="email">Email</label>
          <input
            type="checkbox"
            name="1"
            id="email"
            className="checkbox"
            checked={inputType[1]}
            onChange={handleInputType}
          />
          <label htmlFor="id">ID</label>
          <input
            type="checkbox"
            name="2"
            id="id"
            className="checkbox"
            checked={inputType[2]}
            onChange={handleInputType}
          />
        </div>
        <div className="search-bar">
          <div className="input-container">
            <input
              type="text"
              className="search-input"
              // value={inputText}
              ref={inputEl}
              onChange={debouncedHandleInput}
              onBlur={() => {
                // setTimeout function so that first auto-suggestion text get copied in input box then auto-suggestions box disappear
                setTimeout(() => {
                  setShowAuto(false);
                }, 250);
              }}
              onFocus={() => setShowAuto(true)}
            />
            <button
              type="submit"
              className="btn"
              onClick={() => searchButtonHandle(searchedData)}
            >
              Search
            </button>
          </div>
          {showAuto && searchedData?.length > 0 && searchedData?.length < 500 && (
            <div className="autocomplete">
              {searchedData.map((el, i) => (
                <div
                  className="autocomplete-items"
                  key={i}
                  onClick={setInputFromSuggestions}
                >
                  <span>
                    {activeInputType === "name"
                      ? el.name
                      : activeInputType === "email"
                      ? el.email
                      : el.id}
                  </span>
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

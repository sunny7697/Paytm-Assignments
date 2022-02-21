import { useState } from "react";

const SearchBar = ({
  debouncedHandleInput,
  searchedData,
  handleInputType,
  inputType,
  inputText,
  setInputFromSuggestions,
}) => {
  const [showAuto, setShowAuto] = useState(true);

  return (
    <div className="container">
      <div className="form-container">
        <div className="input-type">
          <label htmlFor="name">Name</label>
          <input
            type="checkbox"
            name="0"
            id="name"
            className="name"
            checked={inputType[0]}
            onChange={handleInputType}
          />
          <label htmlFor="email">Email</label>
          <input
            type="checkbox"
            name="1"
            id="email"
            className="email"
            checked={inputType[1]}
            onChange={handleInputType}
          />
          <label htmlFor="id">ID</label>
          <input
            type="checkbox"
            name="2"
            id="id"
            className="id"
            checked={inputType[2]}
            onChange={handleInputType}
          />
        </div>
        <div className="search-bar">
          <div className="input-container">
            <input
              type="text"
              className="search-input"
              value={inputText}
              onChange={debouncedHandleInput}
              onBlur={() => {
                setTimeout(() => {
                  setShowAuto(false);
                }, 250);
              }}
              onFocus={() => setShowAuto(true)}
            />
            <button type="submit" className="btn">
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

export default SearchBar;

import SearchBar from "./components/SearchBar";
import "./App.css";
import { useCallback, useEffect, useState } from "react";

import { debounce } from "./functions/debounce";
import { fetchData, filterData } from "./functions/api";
import ShowData from "./components/ShowData";

function App() {
  const inputTypes = ["name", "email", "id"];

  const [searchedData, setSearchedData] = useState([]);
  const [inputType, setInputType] = useState([true, false, false]); // 0th index -> name,  1st index -> email
  const [activeInputType, setActiveInputType] = useState("name");
  const [inputText, setInputText] = useState("");

  // Handling input type checkboxes
  const handleInputType = (e) => {
    // Setting input box empty when input type changes
    setInputText("");

    const { name, checked } = e.target;

    setInputType((prevInput) =>
      prevInput.map((_, i) => {
        if (i == name) {
          if (checked) setActiveInputType(inputTypes[i]);
          setSearchedData([]);
          return checked;
        } else return false;
      })
    );
  };

  // Every input changes it will get called from debounce function (if 300ms gap b/w two keystroke)
  const handleInputChange = async (e) => {
    const { value } = e.target;
    const data = await fetchData(value, activeInputType);
    setSearchedData(data);
  };

  // Setting input when clicking a suggestion
  const setInputFromSuggestions = (e) => {
    setInputText(e.target.textContent);
    setSearchedData(
      filterData(searchedData, e.target.textContent, activeInputType, false)
    );
  };

  const debouncedHandleInput = debounce(handleInputChange, setInputText, 300);

  return (
    <div className="App">
      <SearchBar
        debouncedHandleInput={debouncedHandleInput}
        searchedData={searchedData}
        handleInputType={handleInputType}
        inputType={inputType}
        activeInputType={activeInputType}
        inputText={inputText}
        setInputFromSuggestions={setInputFromSuggestions}
      />
      <ShowData searchedData={searchedData} />
    </div>
  );
}

export default App;

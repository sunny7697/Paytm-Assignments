import SearchBar from "./components/SearchBar";
import "./App.css";
import { useCallback, useEffect, useState } from "react";

import { debounce } from "./functions/debounce";
import { fetchData } from "./functions/api";
import ShowData from "./components/ShowData";

function App() {
  const inputTypes = ["name", "email", "id"];

  const [searchedData, setSearchedData] = useState([]);
  const [inputType, setInputType] = useState([true, false, false]); // 0th index -> name,  1st index -> email
  const [activeInputType, setActiveInputType] = useState("name");
  const [inputText, setInputText] = useState("");

  const handleInputType = (e) => {
    const { name, checked } = e.target;

    setInputType((prevInput) =>
      prevInput.map((p, i) => {
        if (i == name) {
          if (checked) setActiveInputType(inputTypes[i]);
          setSearchedData([]);
          return checked;
        } else return false;
      })
    );
  };

  const handleInputChange = async (e) => {
    const { value } = e.target;
    const data = await fetchData(value, activeInputType);
    setSearchedData(data);
  };

  const setInputFromSuggestions = (e) => {
    setInputText(e.target.textContent);
  };

  const debouncedHandleInput = debounce(handleInputChange, setInputText, 300);

  return (
    <div className="App">
      <SearchBar
        debouncedHandleInput={debouncedHandleInput}
        searchedData={searchedData}
        handleInputType={handleInputType}
        inputType={inputType}
        inputText={inputText}
        setInputFromSuggestions={setInputFromSuggestions}
      />
      <ShowData searchedData={searchedData} />
    </div>
  );
}

export default App;

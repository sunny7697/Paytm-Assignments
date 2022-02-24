import SearchBar from "./components/SearchBar";
import "./App.css";
import { useState } from "react";
import ShowData from "./components/ShowData";

function App() {
  const [prevSearchedData, setPrevSearchedData] = useState([]);

  // whenever search button is clicked
  const searchButtonHandle = (data) => {
    setPrevSearchedData(data);
  };
  console.log(prevSearchedData);

  return (
    <div className="App">
      <SearchBar searchButtonHandle={searchButtonHandle} />
      <ShowData prevSearchedData={prevSearchedData} />
    </div>
  );
}

export default App;

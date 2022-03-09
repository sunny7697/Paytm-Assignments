import { useSelector } from "react-redux";
import "./App.css";
import ShowPokemons from "./components/Main/ShowPokemons";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  // const pokemons = useSelector((state) => state.pokemons.pokemons);
  // console.log(pokemons);
  return (
    <div className="App">
      <SearchBar />
      <ShowPokemons />
    </div>
  );
}

export default App;

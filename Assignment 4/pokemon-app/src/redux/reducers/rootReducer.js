import { combineReducers } from "redux";
import pokemonReducer from "./pokemonReducer";
import { searchTypeReducer } from "./searchTypeReducer";

const rootReducer = combineReducers({
  searchType: searchTypeReducer,
  pokemons: pokemonReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import pokemonReducer, {
  selectedPokemonReducer,
  setPokemonDetailsReducer,
} from "./pokemonReducer";
import { searchTypeReducer } from "./searchTypeReducer";

const rootReducer = combineReducers({
  searchType: searchTypeReducer,
  pokemons: pokemonReducer,
  pokemon: selectedPokemonReducer,
  pokemonDetails: setPokemonDetailsReducer,
});

export default rootReducer;

import { ActionTypes } from "../constants/action-types";

const initialState = {
  pokemons: [],
};
const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_POKEMONS:
      const { payload } = action;
      return { ...state, pokemons: payload };
    case ActionTypes.REMOVE_POKEMONS:
      return { ...state, pokemons: [] };
    default:
      return state;
  }
};

export const selectedPokemonReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_POKEMON:
      return [action.payload];
    default:
      return state;
  }
};

export const setPokemonDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SET_POKEMON_DETAILS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default pokemonReducer;

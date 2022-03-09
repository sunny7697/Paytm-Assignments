import { ActionTypes } from "../constants/action-types";

const initialState = {
  pokemons: [],
};
const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_POKEMONS:
      const { payload: pokemons } = action;
      return { pokemons };
    default:
      return state;
  }
};

export default pokemonReducer;

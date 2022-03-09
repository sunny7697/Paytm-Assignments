import { ActionTypes } from "../constants/action-types";

export const setPokemons = (pokemons) => ({
  type: ActionTypes.SET_POKEMONS,
  payload: pokemons,
});

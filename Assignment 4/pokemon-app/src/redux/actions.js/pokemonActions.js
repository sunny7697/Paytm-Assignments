import { ActionTypes } from "../constants/action-types";

export const setPokemons = (pokemons) => ({
  type: ActionTypes.SET_POKEMONS,
  payload: pokemons,
});

export const removePokemons = () => ({
  type: ActionTypes.REMOVE_POKEMONS,
});

export const selectedPokemon = (pokemon) => ({
  type: ActionTypes.SELECTED_POKEMON,
  payload: pokemon,
});

export const getPokemonDetails = (name) => ({
  type: ActionTypes.GET_POKEMON_DETAILS,
  payload: name,
});

export const setPokemonDetails = (details = null) => {
  return {
    type: ActionTypes.SET_POKEMON_DETAILS,
    payload: details,
  };
};

export const removePokemonDetails = () => ({
  type: ActionTypes.REMOVE_POKEMON_DETAILS,
});

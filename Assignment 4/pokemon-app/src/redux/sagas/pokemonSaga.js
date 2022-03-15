import { takeLatest, call, put } from "redux-saga/effects";
import { fetchPokemonDetails } from "../../functions/api";
import { setPokemonDetails } from "../actions.js/pokemonActions";
import { ActionTypes } from "../constants/action-types";

function* getPokemonDetails(payload) {
  try {
    const details = yield call(fetchPokemonDetails, payload.payload);
    yield put(setPokemonDetails(details));
  } catch (error) {
    console.log(error);
  }
}

export function* waitForGetPokemonDetails() {
  yield takeLatest(ActionTypes.GET_POKEMON_DETAILS, getPokemonDetails);
}

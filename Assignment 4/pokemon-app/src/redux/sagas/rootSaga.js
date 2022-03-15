import { all } from "redux-saga/effects";
import { waitForGetPokemonDetails } from "./pokemonSaga";

export default function* rootSaga() {
  yield all([waitForGetPokemonDetails()]);
}

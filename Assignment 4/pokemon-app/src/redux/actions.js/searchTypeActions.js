import { ActionTypes } from "../constants/action-types";

export const setSearchType = (inputType) => ({
  type: ActionTypes.SET_SEARCH_TYPE,
  payload: inputType,
});

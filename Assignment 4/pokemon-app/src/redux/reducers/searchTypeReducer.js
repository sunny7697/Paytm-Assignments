import { ActionTypes } from "../constants/action-types";

export const searchTypeReducer = (state = "0", action) => {
  switch (action.type) {
    case ActionTypes.SET_SEARCH_TYPE:
      return action.payload;
    default:
      return state;
  }
};

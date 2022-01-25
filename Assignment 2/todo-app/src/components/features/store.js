import { configureStore } from "@reduxjs/toolkit";
import appDataReducer from "./todos/todosSlice";

// creating store
export const store = configureStore({
  reducer: {
    appData: appDataReducer,
  },
});

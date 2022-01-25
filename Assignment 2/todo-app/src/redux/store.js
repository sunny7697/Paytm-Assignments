import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";

const reducers = combineReducers({
  todos: todoReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;

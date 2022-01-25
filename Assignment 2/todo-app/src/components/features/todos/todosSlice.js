import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: {},
  todos: {},
};

const todosSlice = createSlice({
  name: "todosApp",
  initialState,
  reducers: {
    addToken: (state, { payload }) => {
      state.token = payload;
    },
    addTodos: (state, { payload }) => {
      state.todos = payload;
    },
  },
});

export const { addToken, addTodos } = todosSlice.actions;
export const getToken = (state) => state.token.token;
export const getTodos = (state) => state.todos.todos;
export default todosSlice.reducer;

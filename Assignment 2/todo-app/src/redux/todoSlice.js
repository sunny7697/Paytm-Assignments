import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: {},
  todos: [
    {
      id: 12345,
      title: "Study",
      priority: "High",
      date: "Jan 25, 2022",
      description: "Learn Redux",
    },
    {
      id: 23456,
      title: "Study",
      priority: "High",
      date: "Jan 28, 2022",
      description: "Complete Assignment",
    },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    hydrate: (state, action) => {
      return action.payload;
    },
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        priority: action.payload.priority,
        date: action.payload.date,
        description: action.payload.description,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    deleteMultipleTodos: (state, action) => {
      console.log(action.payload.checkedBoxesArray);
      state.todos = state.todos.filter(
        (todo) =>
          action.payload.checkedBoxesArray.indexOf(todo.id.toString()) === -1
      );
    },
    addToken: (state, action) => {
      state.token = action.payload;
    },
  },
});
export const { addTodo, deleteTodo, deleteMultipleTodos, addToken } =
  todoSlice.actions;
export default todoSlice.reducer;

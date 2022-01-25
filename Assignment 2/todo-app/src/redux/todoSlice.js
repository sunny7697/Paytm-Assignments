import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
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

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        priority: action.payload.priority,
        date: action.payload.date,
        description: action.payload.description,
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

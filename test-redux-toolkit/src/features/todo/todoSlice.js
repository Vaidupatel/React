import { createSlice, nanoid } from "@reduxjs/toolkit";

// Create the inital state
const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

// Create the slice
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // sate and action is the inbuilt and defualt arguments
    // state give the access of initialstate

    // Creating the todo which have unique id it will automatically generate by nanoid, and text which will be fetch by the action.payload
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Have to export the individual reducers as well as all reducers list 
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //Adding todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //remove todos
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    //update todos
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    //completed
    completeTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          if (!todo.done) {
            return {
              ...todo,
              done: true,
            };
          } else {
            return {
              ...todo,
              done: false,
            };
          }  
        }
        return todo;
      });
    },
    //important
    importantTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          if (!todo.important) {
            return {
              ...todo,
              important: true,
            };
          } else {
            return {
              ...todo,
              important: false,
            };
          }  
        }
        return todo;
      });
    },
  },
});

export const {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
  importantTodos,
} = addTodoReducer.actions;
export const todoReducer = addTodoReducer.reducer;
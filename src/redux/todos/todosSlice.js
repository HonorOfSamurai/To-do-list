import { createSlice } from '@reduxjs/toolkit';

const todos = JSON.parse(localStorage.getItem('todos'));
const todosSlice = createSlice({
  name: 'todos',
  initialState: todos,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      const newArray = state.filter((item) => {
        if (item.id !== action.payload) {
          return true;
        } else {
          return false;
        }
      });
      return newArray;
    },
    completeTodo: (state, action) => {
      state.forEach((item) => {
        if (item.id === action.payload.id) {
          item.completed = action.payload.completed;
        }
      });
    },
    updateTodo: (state, action) => {
      state.forEach((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
        }
      });
    },
    updateTodoCategory: (state, action) => {
      state.forEach((item) => {
        if (item.category.id === action.payload.id) {
          item.category.name = action.payload.name;
        }
      });
    },
  },
});

export const {
  addTodo,
  removeTodo,
  completeTodo,
  updateTodo,
  updateTodoCategory,
} = todosSlice.actions;
export default todosSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './todos/todosSlice';
import categoriesSlice from './category/categorySlice';

const store = configureStore({
  reducer: {
    todos: todosSlice,
    categories: categoriesSlice,
  },
});

export default store;

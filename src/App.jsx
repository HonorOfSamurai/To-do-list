import React from 'react';
import Todo from './components/todo/Todo';
import './App.css';
import AddTodo from './components/addTodo/AddTodo';
import Categories from './components/categories/Categories';
import { useSelector } from 'react-redux';

export default function App() {
  const todos = useSelector((state) => state.todos);
  const { selectedCategory, categories } = useSelector(
    (state) => state.categories,
  );
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('todos', JSON.stringify(todos ? todos: []));
    localStorage.setItem('categories', JSON.stringify(categories.length ? categories: [{name: "Прочие", color: "black", id: "10"}]));
    localStorage.setItem('selectedCategory', JSON.stringify(selectedCategory ? selectedCategory: {name: "Прочие", color: "black"}));
  });
  const filteredTodos = todos.filter(
    (item) => item.category.name === selectedCategory.name,
  );
  return (
    <div className=" text-center container gap-10 md:flex">
      <div className=" mb-5 border-r-2 border-neutral-200 pr-14">
        <Categories />
      </div>
      <div>
        <AddTodo />
        {filteredTodos.map((item) => {
          return (
            <div className=" mb-4">
              <Todo
                title={item?.title}
                completed={item?.completed}
                category={item?.category}
                id={item?.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

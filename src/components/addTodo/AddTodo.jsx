import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/todos/todosSlice';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo() {
  const [inputValue, setInputValue] = useState('');
  const { selectedCategory } = useSelector((state) => state.categories);
  const dispath = useDispatch();

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function createTodo(e) {
    if (e.key === 'Enter' || e.key === 'Tab') {
      dispath(
        addTodo({
          title: inputValue,
          id: uuidv4(),
          category: selectedCategory,
          completed: false,
        }),
      );
      setInputValue('');
    }
  }

  return (
    <div className=" text-left">
      <h1 className=" font-bold text-5xl text-left mb-6">Все задачи</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className=" text-lg h-10 px-4 py-3 rounded-lg bg-gray-200 mb-12 border-none focus:outline-none"
        placeholder="добавить новую задачу"
        onKeyDown={createTodo}
      />
    </div>
  );
}

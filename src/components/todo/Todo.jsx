import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  completeTodo,
  removeTodo,
  updateTodo,
} from '../../redux/todos/todosSlice';

export default function Todo(props) {
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);

  function handleDone(e) {
    dispatch(completeTodo({ id: props?.id, completed: e.target.checked }));
  }

  function handleClick() {
    setIsEditable(!isEditable);
  }

  function handleChange(e) {
    dispatch(updateTodo({ id: props?.id, title: e.target.value }));
  }
  function deleteTodo() {
    dispatch(removeTodo(props.id));
  }

  const inputStyle = props.completed
    ? 'focus:outline-none w-full line-through text-red-500'
    : 'focus:outline-none w-full ';

  return (
    <div className=" flex items-center gap-3">
      <div>
        <label>
          <input type="checkbox" className=" hidden" onChange={handleDone} />
          <div className=" border-red-500 border-2 rounded-xl h-7 w-7">
            {props.completed && <img src="/image/done.svg" alt="" />}
          </div>
        </label>
      </div>
      <div className=" line-through">
        <input
          type="text"
          className={inputStyle}
          onChange={handleChange}
          value={props?.title}
          disabled={!isEditable}
        />
      </div>
      <div onClick={handleClick} className=" cursor-pointer">
        <img className=" w-7 h-7" src="/image/edit.png" alt="edit" />
      </div>
      <div
        style={{ background: props.category.color }}
        className=" text-neutral-400 px-5 py-1 rounded-large"
      >
        {props.category.name}
      </div>
      <div className="cursor-pointer" onClick={deleteTodo}>
        <img className="w-10 h-10" src="/image/delete.jpg" alt="" />
      </div>
    </div>
  );
}

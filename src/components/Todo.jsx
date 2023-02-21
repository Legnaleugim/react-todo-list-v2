import React from "react";
import { useState } from "react";

function Todo({ item, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  function FormEdit() {
    const [newValue, setNewValue] = useState(item.title);

    const handleSubmit = (e) => {
      e.preventDefault();
    };

    const handleClick = (e) => {
      onUpdate(item.id, newValue);
      setIsEdit(false);
    };

    const handleChange = (e) => {
      setNewValue(e.target.value);
    };

    return (
      <form className="todo-update-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          onChange={handleChange}
          value={newValue}
        />
        <button className="button edit" onClick={handleClick}>
          Update
        </button>
      </form>
    );
  } //Form to edit task

  function TodoElement() {
    return (
      <div className="todo-info">
        <span className="todo-title">{item.title}</span>
        <button className="button edit" onClick={() => setIsEdit(true)}>Edit</button>
        <button className="button delete" onClick={(e) => onDelete(item.id)}>Delete</button>
      </div>
    );
  } //Task

  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
} //Returns edit format when true, returns task when false

export default Todo;

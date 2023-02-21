import { useState } from "react";
import Todo from "./Todo";
import './TodoApp.css';

function TodoApp() {
  const [title, setTitle] = useState(""); //Task title
  const [todoList, setTodoList] = useState([]); //To-do list array

  const handleChange = (e) => {
    setTitle(e.target.value);
  }; // Sets text input value as title on change

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };
    setTodoList([newTodo, ...todoList]);
    setTitle("")

  }; // Adds new task to array on submit



  const handleUpdate = (id, value) => {
    const temp = [...todoList];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodoList(temp);
  }; // Hanldes task update

  const handleDelete = (id) => {
    const temp = todoList.filter(item => item.id != id)
    setTodoList(temp)
  }

  return (
    <div className="todo-container">
      <form className="todo-create-form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="todo-input"
          type="text"
          placeholder="Task"
          value={title}
        />
        <input
          type="submit"
          value="Create To-Do"
          className="button-create"
          onClick={handleSubmit}
        />
      </form>

      <div className="todos-container">
        {todoList.map((item) => (
          <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;

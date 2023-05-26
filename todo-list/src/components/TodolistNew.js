import React, { useState } from "react";

function TodolistNew() {
  const [todo, setTodo] = useState("");
  const [alltodos, setAllTodos] = useState([]);

  const submitFormHandler = (e) => {
    e.preventDefault();

    const newObj = {
      todoID: Math.random(Math.random() * 1000),
      value: todo,
    };
    setAllTodos([...alltodos, newObj]);
    setTodo("");
  };

  const onuserInputHandler = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div>
      <form onSubmit={submitFormHandler}>
        <label htmlFor="add-todo">Add Todo: </label>
        <input
          type="text"
          id="add-todo"
          onChange={onuserInputHandler}
          value={todo}
          placeholder="Add Todo..."
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {alltodos.map((alltodo) => {
          return <li key={alltodo.todoID}>{alltodo.value}</li>;
        })}
        <li></li>
      </ul>
    </div>
  );
}

export default TodolistNew;

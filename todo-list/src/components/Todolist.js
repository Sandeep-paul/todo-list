import { React, useState } from "react";
import style from "./Todolist.module.scss";

function Todolist() {
  const [todo, setTodo] = useState("");
  const [tasklists, setTasklists] = useState([]);
  const userInput = (e) => {
    setTodo(e.target.value);
  };
  const submitFormHandler = (e) => {
    e.preventDefault();

    const taskDetails = {
      id: Math.floor(Math.random() * 100),
      value: todo,
    };

    if (!todo) {
      alert("Please add a todo");
      return;
    }

    setTasklists([...tasklists, taskDetails]);
    setTodo("");
  };

  const cancelHandler = (id) => {
    const deleteids = tasklists.filter((deleteid) => {
      return deleteid.id !== id;
    });
    setTasklists(deleteids);
  };

  return (
    <div className={style.wrapper}>
      <h2>Todo App</h2>
      <div className={style["todo-form"]}>
        <form onSubmit={submitFormHandler}>
          <input
            type="text"
            onInput={userInput}
            value={todo}
            placeholder="Add Todo..."
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <ul>
        {tasklists.map((tasklist) => {
          return (
            <li key={tasklist.id}>
              {tasklist.value}
              <button
                type="submit"
                onClick={() => cancelHandler(tasklist.id)}
                className={style["delete-btn"]}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todolist;

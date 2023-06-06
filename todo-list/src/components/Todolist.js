import { React, useState } from "react";
import style from "./Todolist.module.scss";

function Todolist() {
  const [todo, setTodo] = useState("");
  const [tasklists, setTasklists] = useState([]);
  const [priority, setPriority] = useState("");
  const [taskPriority1, setTaskPriority1] = useState([]);
  const [taskPriority2, setTaskPriority2] = useState([]);
  const [taskPriority3, setTaskPriority3] = useState([]);
  const [taskPriority4, setTaskPriority4] = useState([]);
  const [taskPriority5, setTaskPriority5] = useState([]);
  const [open, setOpen] = useState("false");

  const accordionHandler = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const selectHandler = (e) => {
    setPriority(e.target.value);
  };

  const userInput = (e) => {
    setTodo(e.target.value);
  };
  const submitFormHandler = (e) => {
    e.preventDefault();

    if (!todo) {
      alert("Please add a todo");
      return;
    }
    if (!priority) {
      alert("Select Priority list");
      return;
    }

    let a = "";
    for (let i = 0; i > 5; i++) {
      a = tasklists.priorityEl[i];
      console.log(a);
    }

    if (priority === "Priority # 1") {
      let task = {};
      if ([...taskPriority1].length > 0) {
        task = {
          id: Math.floor(Math.random() * 100),
          value: todo,
        };
      } else {
        task = {
          id: Math.floor(Math.random() * 100),
          value: todo,
          priorityEl: priority,
        };
      }
      setTaskPriority1([...taskPriority1, task]);
    } else if (priority === "Priority # 2") {
      let task = {};
      if ([...taskPriority2].length > 0) {
        task = {
          id: Math.floor(Math.random() * 100),
          value: todo,
        };
      } else {
        task = {
          id: Math.floor(Math.random() * 100),
          value: todo,
          priorityEl: priority,
        };
      }
      setTaskPriority2([...taskPriority2, task]);
    } else if (priority === "Priority # 3") {
      let task = {};
      if ([...taskPriority3].length > 0) {
        task = {
          id: Math.floor(Math.random() * 100),
          value: todo,
        };
      } else {
        task = {
          id: Math.floor(Math.random() * 100),
          value: todo,
          priorityEl: priority,
        };
      }
      setTaskPriority3([...taskPriority3, task]);
    } else if (priority === "Priority # 4") {
      let task = {};
      if ([...taskPriority4].length > 0) {
        task = {
          id: Math.floor(Math.random() * 100),
          value: todo,
        };
      } else {
        task = {
          id: Math.floor(Math.random() * 100),
          value: todo,
          priorityEl: priority,
        };
      }
      setTaskPriority4([...taskPriority4, task]);
    } else {
      let task = {};
      if ([...taskPriority5].length > 0) {
        task = {
          id: Math.floor(Math.random() * 100),
          value: todo,
        };
      } else {
        task = {
          id: Math.floor(Math.random() * 100),
          value: todo,
          priorityEl: priority,
        };
      }
      setTaskPriority5([...taskPriority5, task]);
    }
    setTodo("");
  };

  const cancelHandler = (id) => {
    const deleteids = taskPriority1.filter((deleteid) => {
      return deleteid.id !== id;
    });
    setTaskPriority1(deleteids);
    const deleteids1 = taskPriority2.filter((deleteid) => {
      return deleteid.id !== id;
    });
    setTaskPriority2(deleteids1);
    const deleteids2 = taskPriority3.filter((deleteid) => {
      return deleteid.id !== id;
    });
    setTaskPriority3(deleteids2);
  };

  return (
    <div className={style.wrapper}>
      <h2>TODO App</h2>
      <div className={style["inner-wrapper"]}>
        <div className={style["todo-form"]}>
          <form onSubmit={submitFormHandler}>
            <label htmlFor="add-todo">Add Todo: </label>
            <input
              type="text"
              id="add-todo"
              onInput={userInput}
              value={todo}
              placeholder="Add Todo..."
            />
            <div>
              <label htmlFor="priority-list">Priority list: </label>
              <select id="priority-list" onChange={selectHandler}>
                <option></option>
                <option>Priority # 1</option>
                <option>Priority # 2</option>
                <option>Priority # 3</option>
                <option>Priority # 4</option>
                <option>Priority # 5</option>
              </select>
            </div>
            <p style={{ textAlign: "right" }}>
              <button type="submit">Submit</button>
            </p>
          </form>
        </div>
        <ul>
          <li>
            <button onClick={accordionHandler}>+</button>
            {/* <li>priority1</li> */}
            {[
              ...taskPriority1,
              ...taskPriority2,
              ...taskPriority3,
              ...taskPriority4,
              ...taskPriority5,
            ].map((tasklist) => {
              //console.log(tasklist);
              return (
                <div
                  key={tasklist.id}
                  style={{ display: open ? "block" : "none" }}
                >
                  {tasklist.priorityEl && (
                    <div>
                      <h4>{tasklist.priorityEl}</h4>
                    </div>
                  )}
                  <div className={style["list-items"]}>
                    <span>{tasklist.value}</span>
                    <button
                      type="submit"
                      onClick={(e) => {
                        cancelHandler(tasklist.id);
                        e.preventDefault();
                      }}
                      className={style["delete-btn"]}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </li>
        </ul>

        {/* <ul>
          <li>priority2</li>
          {taskPriority2.map((tasklist) => {
            return (
              <li key={tasklist.id}>
                <h4>{tasklist.priorityEl}</h4>
                <div className={style["list-items"]}>
                  <span>{tasklist.value}</span>
                  <button
                    type="submit"
                    onClick={() => cancelHandler(tasklist.id)}
                    className={style["delete-btn"]}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul> */}
      </div>
    </div>
  );
}

export default Todolist;

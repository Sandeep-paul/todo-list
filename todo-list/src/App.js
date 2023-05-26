import logo from "./logo.svg";
import "./App.css";
import Todolist from "./components/Todolist";
import TodolistNew from "./components/TodolistNew";

function App() {
  return <div className="App">{<Todolist />}</div>;
}

export default App;
